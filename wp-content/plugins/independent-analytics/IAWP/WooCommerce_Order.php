<?php

namespace IAWP;

use IAWP\Models\Visitor;
/** @internal */
class WooCommerce_Order
{
    private $order_id;
    private $total;
    private $total_refunded;
    private $total_refunds;
    private $status;
    /**
     * @param int $order_id WooCommerce order ID
     */
    public function __construct(int $order_id)
    {
        $order = wc_get_order($order_id);
        $total = $order->get_total();
        // Total based on order currency, not shop currency
        $total_refunded = \floatval($order->get_total_refunded());
        // Refund amount based on order currency, not shop currency
        // Aelia Currency Switcher
        $aelia_exchange_rate = $order->get_meta('_base_currency_exchange_rate');
        if (\is_numeric($aelia_exchange_rate)) {
            // Exchange rate is from order currency to shop currency (multiply)
            $total = \round($total * \floatval($aelia_exchange_rate), 2);
            $total_refunded = \round($total_refunded * \floatval($aelia_exchange_rate), 2);
        }
        // WPML
        $wpml_exchange_rate = $this->wpml_exchange_rate($order->get_currency());
        if (\is_float($wpml_exchange_rate)) {
            // Exchange rate is from shop currency to order currency (divide)
            $total = \round($total / $wpml_exchange_rate, 2);
            $total_refunded = \round($total_refunded / $wpml_exchange_rate, 2);
        }
        $this->order_id = $order_id;
        $this->total = $total;
        $this->total_refunded = $total_refunded;
        $this->total_refunds = \count($order->get_refunds());
        $this->status = $order->get_status();
    }
    public function insert() : void
    {
        global $wpdb;
        $wc_orders_table = \IAWP\Query::get_table_name(\IAWP\Query::WC_ORDERS);
        $visitor = Visitor::fetch_current_visitor();
        if (!$visitor->has_recorded_session()) {
            return;
        }
        $wpdb->insert($wc_orders_table, ['order_id' => $this->order_id, 'view_id' => $visitor->most_recent_view_id(), 'initial_view_id' => $visitor->most_recent_initial_view_id(), 'total' => $this->total, 'total_refunded' => $this->total_refunded, 'total_refunds' => $this->total_refunds, 'status' => $this->status, 'created_at' => (new \DateTime())->format('Y-m-d H:i:s')]);
    }
    public function update() : void
    {
        global $wpdb;
        $wc_orders_table = \IAWP\Query::get_table_name(\IAWP\Query::WC_ORDERS);
        $existing_wc_order = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wc_orders_table} WHERE order_id = %d", $this->order_id));
        if (\is_null($existing_wc_order)) {
            return;
        }
        $wpdb->update($wc_orders_table, ['total' => $this->total, 'total_refunded' => $this->total_refunded, 'total_refunds' => $this->total_refunds, 'status' => $this->status], ['order_id' => $this->order_id]);
    }
    private function wpml_exchange_rate(string $currency_code) : ?float
    {
        $active_plugins = \get_option('active_plugins');
        if (!\in_array('woocommerce-multilingual/wpml-woocommerce.php', $active_plugins)) {
            return null;
        }
        $wcml_options = \get_option('_wcml_settings');
        if (!\is_array($wcml_options)) {
            return null;
        }
        if (!\array_key_exists('currency_options', $wcml_options)) {
            return null;
        }
        if (!\is_array($wcml_options['currency_options']) || !\array_key_exists($currency_code, $wcml_options['currency_options'])) {
            return null;
        }
        if (!\is_array($wcml_options['currency_options'][$currency_code]) || !\array_key_exists('rate', $wcml_options['currency_options'][$currency_code])) {
            return null;
        }
        $exchange_rate = \floatval($wcml_options['currency_options'][$currency_code]['rate']);
        // Was there an error parsing value as float?
        if ($exchange_rate === 0.0) {
            return null;
        }
        return $exchange_rate;
    }
    public static function initialize_order_tracker()
    {
        // Required for block checkout
        \add_action('woocommerce_store_api_checkout_order_processed', function ($order) {
            try {
                $woocommerce_order = new self($order->get_id());
                $woocommerce_order->insert();
            } catch (\Throwable $e) {
                \error_log('Independent Analytics was unable to track the analytics for a WooCommerce order. Please report this error to Independent Analytics. The error message is below.');
                \error_log($e->getMessage());
            }
        });
        // Required for shortcode checkout
        \add_action('woocommerce_checkout_order_created', function ($order) {
            try {
                $woocommerce_order = new self($order->get_id());
                $woocommerce_order->insert();
            } catch (\Throwable $e) {
                \error_log('Independent Analytics was unable to track the analytics for a WooCommerce order. Please report this error to Independent Analytics. The error message is below.');
                \error_log($e->getMessage());
            }
        });
        \add_action('woocommerce_order_status_changed', function ($order_id) {
            try {
                $woocommerce_order = new self($order_id);
                $woocommerce_order->update();
            } catch (\Throwable $e) {
                \error_log('Independent Analytics was unable to track the analytics for a WooCommerce order. Please report this error to Independent Analytics. The error message is below.');
                \error_log($e->getMessage());
            }
        });
        // Captures a partial refund, something that woocommerce_order_status_changed will not do
        \add_action('woocommerce_order_refunded', function ($order_id) {
            try {
                $woocommerce_order = new self($order_id);
                $woocommerce_order->update();
            } catch (\Throwable $e) {
                \error_log('Independent Analytics was unable to track the analytics for a WooCommerce order. Please report this error to Independent Analytics. The error message is below.');
                \error_log($e->getMessage());
            }
        });
    }
    public static function tracked_order_statuses() : array
    {
        return [
            'wc-completed',
            'completed',
            'wc-processing',
            'processing',
            'wc-refunded',
            'refunded',
            'wc-shipped',
            'shipped',
            'wc-partial-shipped',
            'partial-shipped',
            'wc-delivered',
            'delivered',
            // Specific to WooCommerce Amazon Fulfillment plugin
            'wc-sent-to-fba',
            'sent-to-fba',
            'wc-part-to-fba',
            'part-to-fba',
        ];
    }
}

<?php

namespace IAWP;

use IAWP\Models\Campaign;
use IAWP\Models\Referrer;
use IAWP\Utils\Security;
use IAWPSCOPED\Illuminate\Database\Query\JoinClause;
/** @internal */
class WooCommerce_Referrer_Meta_Box
{
    private $referrer;
    private $campaign;
    public function __construct()
    {
        \add_action('add_meta_boxes_shop_order', [$this, 'maybe_add_meta_box'], 10, 1);
    }
    public function maybe_add_meta_box(\WP_Post $post) : void
    {
        if (!\IAWPSCOPED\iawp()->is_woocommerce_support_enabled()) {
            return;
        }
        $referrer_row = $this->get_referrer_for($post);
        $this->referrer = \is_object($referrer_row) ? new Referrer($referrer_row) : null;
        $campaign_row = $this->get_campaign_for($post);
        $this->campaign = \is_object($campaign_row) ? new Campaign($campaign_row) : null;
        if (\is_null($this->referrer) && \is_null($this->campaign)) {
            return;
        }
        \add_meta_box('iawp-wc-referrer-source', \esc_html__('Order Referrer', 'independent-analytics'), [$this, 'render_meta_box_content'], 'shop_order', 'side');
    }
    public function render_meta_box_content(\WP_Post $post) : void
    {
        if (!\is_null($this->referrer)) {
            if ($this->referrer->has_link()) {
                $content = '<a target="_blank" href="' . \esc_url($this->referrer->referrer_url()) . '">' . Security::string($this->referrer->referrer()) . '</a>';
            } else {
                $content = Security::string($this->referrer->referrer());
            }
            echo '<p><strong>' . \esc_html__('Referrer:', 'independent-analytics') . '</strong> <span data-testid="referrer">' . $content . '</span> <a class="info-link" 
                href="https://independentwp.com/knowledgebase/woocommerce/order-referrers-box/" 
                target="_blank"
                style="text-decoration:none;float:right;">
                    <span class="dashicons dashicons-editor-help"></span>
                </a>
        </p>';
        }
        if (!\is_null($this->campaign)) {
            if (\is_string($this->campaign->utm_source())) {
                echo '<p><strong>' . \__('Campaign Source', 'independent-analytics') . ':</strong> <span data-testid="source">' . Security::string($this->campaign->utm_source()) . '</span> </p>';
            }
            if (\is_string($this->campaign->utm_medium())) {
                echo '<p><strong>' . \__('Campaign Medium', 'independent-analytics') . ':</strong> <span data-testid="medium">' . Security::string($this->campaign->utm_medium()) . '</span> </p>';
            }
            if (\is_string($this->campaign->utm_campaign())) {
                echo '<p><strong>' . \__('Campaign Name', 'independent-analytics') . ':</strong> <span data-testid="campaign">' . Security::string($this->campaign->utm_campaign()) . '</span> </p>';
            }
            if (\is_string($this->campaign->utm_term())) {
                echo '<p><strong>' . \__('Campaign Term', 'independent-analytics') . ':</strong> <span data-testid="term">' . Security::string($this->campaign->utm_term()) . '</span> </p>';
            }
            if (\is_string($this->campaign->utm_content())) {
                echo '<p><strong>' . \__('Campaign Content', 'independent-analytics') . ':</strong> <span data-testid="content">' . Security::string($this->campaign->utm_content()) . '</span> </p>';
            }
        }
    }
    private function get_campaign_for(\WP_Post $post) : ?object
    {
        $wc_orders_table = \IAWP\Query::get_table_name(\IAWP\Query::WC_ORDERS);
        $campaigns_table = \IAWP\Query::get_table_name(\IAWP\Query::CAMPAIGNS);
        $views_table = \IAWP\Query::get_table_name(\IAWP\Query::VIEWS);
        $sessions_table = \IAWP\Query::get_table_name(\IAWP\Query::SESSIONS);
        $campaign_query = \IAWP\Illuminate_Builder::get_builder()->select("landing_page_title AS title", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content")->from($wc_orders_table, 'orders')->join("{$views_table} AS views", function (JoinClause $join) {
            $join->on('views.id', '=', 'orders.view_id');
        })->join("{$sessions_table} AS sessions", function (JoinClause $join) {
            $join->on('sessions.session_id', '=', 'views.session_id');
        })->join("{$campaigns_table} AS campaigns", function (JoinClause $join) {
            $join->on('sessions.campaign_id', '=', 'campaigns.campaign_id');
        })->where('orders.order_id', '=', $post->ID);
        $record = $campaign_query->get()->first();
        return $record;
    }
    private function get_referrer_for(\WP_Post $post) : ?object
    {
        $wc_orders_table = \IAWP\Query::get_table_name(\IAWP\Query::WC_ORDERS);
        $views_table = \IAWP\Query::get_table_name(\IAWP\Query::VIEWS);
        $sessions_table = \IAWP\Query::get_table_name(\IAWP\Query::SESSIONS);
        $referrer_table = \IAWP\Query::get_table_name(\IAWP\Query::REFERRERS);
        $referrer_query = \IAWP\Illuminate_Builder::get_builder()->select('sessions.referrer_id', 'referrer', 'type AS referrer_type', 'domain')->from($wc_orders_table, 'orders')->join("{$views_table} AS views", function (JoinClause $join) {
            $join->on('views.id', '=', 'orders.view_id');
        })->join("{$sessions_table} AS sessions", function (JoinClause $join) {
            $join->on('sessions.session_id', '=', 'views.session_id');
        })->join("{$referrer_table} AS referrers", function (JoinClause $join) {
            $join->on('referrers.id', '=', 'sessions.referrer_id');
        })->where('orders.order_id', '=', $post->ID);
        $record = $referrer_query->get()->first();
        return $record;
    }
}

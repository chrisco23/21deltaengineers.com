<?php

namespace IAWP;

use IAWP\Utils\Currency;
use IAWP\Utils\Number_Formatter;
/** @internal */
class Quick_Stat implements \IAWP\Plugin_Group_Option
{
    private $id;
    private $name;
    private $plugin_group;
    private $plugin_group_header;
    private $icon;
    private $statistic;
    private $unfiltered_statistic;
    private $is_visible_in_dashboard_widget;
    private $format;
    private $is_growth_good;
    private $is_plugin_active;
    public function __construct(array $attributes)
    {
        $this->id = $attributes['id'];
        $this->name = $attributes['name'];
        $this->plugin_group = $attributes['plugin_group'];
        $this->plugin_group_header = $attributes['plugin_group_header'] ?? null;
        $this->icon = $attributes['icon'] ?? null;
        $this->statistic = $attributes['statistic'];
        $this->unfiltered_statistic = $attributes['unfiltered_statistic'];
        $this->is_visible_in_dashboard_widget = $attributes['is_visible_in_dashboard_widget'] ?? \false;
        $this->format = $attributes['format'] ?? null;
        $this->is_growth_good = $attributes['is_growth_good'] ?? \true;
        $this->is_plugin_active = $attributes['is_plugin_active'] ?? \true;
    }
    public function id() : string
    {
        return $this->id;
    }
    public function name() : string
    {
        return $this->name;
    }
    public function icon() : ?string
    {
        return $this->icon;
    }
    public function is_enabled() : bool
    {
        switch ($this->plugin_group) {
            case "woocommerce":
                return \IAWPSCOPED\iawp_using_woocommerce();
            case "forms":
                return \IAWPSCOPED\iawp_using_a_form_plugin();
            default:
                return \true;
        }
    }
    public function is_plugin_active() : bool
    {
        return $this->is_plugin_active;
    }
    public function plugin_group_header() : ?string
    {
        return $this->plugin_group_header;
    }
    public function is_visible() : bool
    {
        $options = \IAWP\Dashboard_Options::getInstance();
        return \in_array($this->id(), $options->visible_quick_stats());
    }
    public function total() : string
    {
        $total = $this->statistic->value();
        return $this->format($total);
    }
    public function unfiltered_total() : ?string
    {
        if (\is_null($this->unfiltered_statistic)) {
            return null;
        }
        $total = $this->unfiltered_statistic->value();
        return $this->format($total);
    }
    /**
     * Growth can be good or bad depending on the quick stat. This allows it to be calculated on a
     * at the individual quick stat level.
     *
     * The default behavior is "up" and "good" so you can tweak either of those as needed
     *
     * @return string
     */
    public function growth_html_class() : string
    {
        $html_classes = [];
        $has_growth = $this->unformatted_growth() >= 0;
        if (!$has_growth) {
            $html_classes[] = 'down';
        }
        if ($has_growth && !$this->is_growth_good || !$has_growth && $this->is_growth_good) {
            $html_classes[] = 'bad';
        }
        return \implode(' ', $html_classes);
    }
    public function growth() : string
    {
        $growth = $this->statistic->growth();
        return Number_Formatter::percent(\absint($growth));
    }
    public function unformatted_growth() : int
    {
        return $this->statistic->growth();
    }
    public function is_member_of_plugin_group(string $plugin_group) : bool
    {
        return $this->plugin_group === $plugin_group;
    }
    public function is_visible_in_dashboard_widget() : bool
    {
        return $this->is_visible_in_dashboard_widget;
    }
    private function format($total)
    {
        // TODO - Ray gettype($value) what are there
        switch ($this->format) {
            case 'time':
                return Number_Formatter::second_to_minute_timestamp($total);
            case 'percent':
                return Number_Formatter::percent($total, 2);
            case 'decimal':
                return Number_Formatter::decimal($total, 2);
            case 'currency':
                return Currency::format($total, \false, \false);
            case 'rounded-currency':
                return Currency::format($total, \true, \false);
            default:
                return Number_Formatter::integer($total);
        }
    }
}

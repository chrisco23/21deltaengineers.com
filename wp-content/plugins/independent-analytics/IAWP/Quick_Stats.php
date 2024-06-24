<?php

namespace IAWP;

use IAWP\Statistics\Statistics;
/** @internal */
class Quick_Stats
{
    private $statistics;
    // private $filtered_statistics;
    private $unfiltered_statistics;
    private $is_dashboard_widget;
    /**
     * @param ?Statistics $statistics
     * @param ?Statistics $unfiltered_statistics
     * @param bool $is_dashboard_widget
     */
    public function __construct(?Statistics $statistics, Statistics $unfiltered_statistics = null, bool $is_dashboard_widget = \false)
    {
        $this->statistics = $statistics;
        $this->unfiltered_statistics = $unfiltered_statistics;
        $this->is_dashboard_widget = $is_dashboard_widget;
    }
    public function make_quick_stat(array $attributes, array $lookup_information = null) : \IAWP\Quick_Stat
    {
        $the_statistic_method_name = $attributes['id'];
        $has_filters = !\is_null($this->unfiltered_statistics);
        if (!\is_null($lookup_information)) {
            $the_method_name = $lookup_information[0];
            $the_argument = $lookup_information[1];
            $attributes['statistic'] = $this->statistics->{$the_method_name}($the_argument);
            $attributes['unfiltered_statistic'] = $has_filters ? $this->unfiltered_statistics->{$the_method_name}($the_argument) : null;
        } else {
            $attributes['statistic'] = $this->statistics->{$the_statistic_method_name}();
            $attributes['unfiltered_statistic'] = $has_filters ? $this->unfiltered_statistics->{$the_statistic_method_name}() : null;
        }
        return new \IAWP\Quick_Stat($attributes);
    }
    public function get_quick_stats()
    {
        $quick_stats = [$this->make_quick_stat(['id' => 'visitors', 'name' => \__('Visitors', 'independent-analytics'), 'plugin_group' => 'general', 'is_visible_in_dashboard_widget' => \true]), $this->make_quick_stat(['id' => 'views', 'name' => \__('Views', 'independent-analytics'), 'plugin_group' => 'general', 'is_visible_in_dashboard_widget' => \true]), $this->make_quick_stat(['id' => 'sessions', 'name' => \__('Sessions', 'independent-analytics'), 'plugin_group' => 'general']), $this->make_quick_stat(['id' => 'average_session_duration', 'name' => \__('Average Session Duration', 'independent-analytics'), 'plugin_group' => 'general', 'format' => 'time']), $this->make_quick_stat(['id' => 'bounce_rate', 'name' => \__('Bounce Rate', 'independent-analytics'), 'plugin_group' => 'general', 'format' => 'percent', 'is_growth_good' => \false]), $this->make_quick_stat(['id' => 'views_per_session', 'name' => \__('Views Per Sessions', 'independent-analytics'), 'plugin_group' => 'general', 'format' => 'decimal']), $this->make_quick_stat(['id' => 'wc_orders', 'name' => \__('Orders', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce']), $this->make_quick_stat(['id' => 'wc_gross_sales', 'name' => \__('Gross Sales', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'rounded-currency']), $this->make_quick_stat(['id' => 'wc_refunds', 'name' => \__('Refunds', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce']), $this->make_quick_stat(['id' => 'wc_refunded_amount', 'name' => \__('Refunded Amount', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'rounded-currency']), $this->make_quick_stat(['id' => 'wc_net_sales', 'name' => \__('Net Sales', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'rounded-currency']), $this->make_quick_stat(['id' => 'wc_conversion_rate', 'name' => \__('Conversion Rate', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'percent']), $this->make_quick_stat(['id' => 'wc_earnings_per_visitor', 'name' => \__('Earnings Per Visitor', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'currency']), $this->make_quick_stat(['id' => 'wc_average_order_volume', 'name' => \__('Average Order Volume', 'independent-analytics'), 'plugin_group' => 'woocommerce', 'icon' => 'woocommerce', 'format' => 'rounded-currency']), $this->make_quick_stat(['id' => 'form_submissions', 'name' => \__('Form Submissions', 'independent-analytics'), 'plugin_group' => 'forms']), $this->make_quick_stat(['id' => 'form_conversion_rate', 'name' => \__('Form Conversion Rate', 'independent-analytics'), 'plugin_group' => 'forms', 'format' => 'percent'])];
        foreach (\IAWP\Form::get_forms() as $form) {
            if (!$form->is_plugin_active()) {
                continue;
            }
            $quick_stats[] = $this->make_quick_stat(['id' => 'form_submissions_for_' . $form->id(), 'name' => \sprintf(\_x('%s Submissions', 'Title of the contact form', 'independent-analytics'), $form->title()), 'plugin_group' => 'forms', 'is_plugin_active' => $form->is_plugin_active(), 'plugin_group_header' => $form->plugin_name(), 'icon' => $form->icon()], ['form_submissions_for', $form]);
            $quick_stats[] = $this->make_quick_stat(['id' => 'form_conversion_rate_for_' . $form->id(), 'name' => \sprintf(\_x('%s Conversion Rate', 'Title of the contact form', 'independent-analytics'), $form->title()), 'plugin_group' => 'forms', 'is_plugin_active' => $form->is_plugin_active(), 'plugin_group_header' => $form->plugin_name(), 'icon' => $form->icon(), 'format' => 'percent'], ['form_conversion_rate_for', $form]);
        }
        return $quick_stats;
    }
    public function get_html()
    {
        $quick_stats = $this->get_quick_stats();
        $visible_quick_stats_count = \count(\array_filter($quick_stats, function (\IAWP\Quick_Stat $quick_stat) : bool {
            return $quick_stat->is_visible() && $quick_stat->is_enabled();
        }));
        $quick_stats_html_class = "quick-stats total-of-{$visible_quick_stats_count}";
        if (!\is_null($this->unfiltered_statistics)) {
            $quick_stats_html_class .= ' filtered';
        }
        return \IAWPSCOPED\iawp_blade()->run('quick-stats', ['is_dashboard_widget' => $this->is_dashboard_widget, 'quick_stats_html_class' => $quick_stats_html_class, 'quick_stats' => $quick_stats, 'plugin_groups' => \IAWP\Plugin_Group::get_plugin_groups()]);
    }
}

<?php

namespace IAWP_SCOPED\IAWP;

use IAWP_SCOPED\IAWP\Utils\Number_Formatter;
use IAWP_SCOPED\IAWP\Utils\Security;
/** @internal */
class View_Counter
{
    public function __construct()
    {
        \add_action('the_content', [$this, 'output_counter']);
        \add_action('init', [$this, 'add_shortcode']);
    }
    public function output_counter($content)
    {
        if (!$this->passes_checks()) {
            return $content;
        }
        $position = \IAWP_SCOPED\iawp()->get_option('iawp_view_counter_position', 'after');
        $counter = $this->get_counter_html();
        if ($position == 'before' || $position == 'both') {
            $content = $counter . $content;
        }
        if ($position == 'after' || $position == 'both') {
            $content .= $counter;
        }
        return $content;
    }
    public function get_counter_html($label = null, $icon = null)
    {
        $current_resource = Resource_Identifier::for_viewed_resource();
        if (\is_null($current_resource)) {
            return;
        }
        $view_count = Number_Formatter::decimal($this->get_view_count($current_resource));
        if (\is_null($label)) {
            $default = \function_exists('IAWP_SCOPED\\pll__') ? pll__('Views:', 'independent-analytics') : \__('Views:', 'independent-analytics');
            $label = \IAWP_SCOPED\iawp()->get_option('iawp_view_counter_label', $default);
        }
        if (\is_null($icon)) {
            $icon = \get_option('iawp_view_counter_icon', \true);
        }
        if ($icon) {
            $svg = '<svg height="20" viewBox="0 0 192 192" width="20" fill="currentColor" style="margin-right:6px; margin-top:-2px;"><path d="m16 176v-136h-16v144a8 8 0 0 0 8 8h184v-16z"/><path d="m72 112a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v56h40z"/><path d="m128 80a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v88h40z"/><path d="m184 48a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v120h40z"/></svg>';
            $label = $svg . ' ' . $label;
        }
        return '<div class="iawp-view-counter" style="display: flex;"><span class="view-counter-text" style="display: flex; align-items: center;">' . Security::svg($label) . '</span> <span style="margin-left: 3px;">' . \esc_html($view_count) . '</span></div>';
    }
    public function add_shortcode()
    {
        \add_shortcode('iawp_view_counter', [$this, 'shortcode']);
    }
    public function shortcode($atts)
    {
        $a = \shortcode_atts(['label' => \IAWP_SCOPED\iawp()->get_option('iawp_view_counter_label', \esc_html__('Views:', 'independent-analytics')), 'icon' => \true], $atts);
        return $this->get_counter_html($a['label'], $a['icon']);
    }
    private function passes_checks() : bool
    {
        if (!\is_singular() || !\is_main_query()) {
            return \false;
        }
        if (\IAWP_SCOPED\iawp()->get_option('iawp_view_counter_enable', \false) == \false) {
            return \false;
        }
        if (!\in_array(\get_post_type(), \IAWP_SCOPED\iawp()->get_option('iawp_view_counter_post_types', []))) {
            return \false;
        }
        $exclude = \IAWP_SCOPED\iawp()->get_option('iawp_view_counter_exclude', '');
        if ($exclude != '') {
            $exclude = \explode(',', $exclude);
            if (\in_array(\get_the_ID(), $exclude)) {
                return \false;
            }
        }
        return \true;
    }
    private function get_view_count(Resource_Identifier $resource) : int
    {
        global $wpdb;
        $resources_table = Query::get_table_name(Query::RESOURCES);
        $views_table = Query::get_table_name(Query::VIEWS);
        if ($resource->has_meta()) {
            $meta_key = $resource->meta_key();
            $query = $wpdb->prepare("\n                SELECT COUNT(views.id) AS views\n                FROM {$resources_table} AS resources\n                         LEFT JOIN {$views_table} AS views ON resources.id = views.resource_id\n                WHERE resource = %s\n                  AND {$meta_key} = %s\n                GROUP BY resources.id;\n            ", $resource->type(), $resource->meta_value());
        } else {
            $query = $wpdb->prepare("\n                SELECT COUNT(views.id) AS views\n                FROM {$resources_table} AS resources\n                         LEFT JOIN {$views_table} AS views ON resources.id = views.resource_id\n                WHERE resource = %s\n                GROUP BY resources.id;\n            ", $resource->type());
        }
        $views = $wpdb->get_var($query);
        return isset($views) ? $wpdb->get_var($query) : 0;
    }
}

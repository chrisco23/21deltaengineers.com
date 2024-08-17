<?php

namespace DiviBooster\GalleryBooster\SliderHideDots;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\add_field');
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\enable_feature', 10, 3);
    \add_filter('divi_booster/gallery_booster/gallery_classes', __NAMESPACE__ . '\\add_class', 10, 2);
}


function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    $new_fields = array(
        'dbdb_show_dots'    => array(
            'label'            => esc_html__('Show Slider Navigation Dots', 'divi-gallery-booster'),
            'type'             => 'yes_no_button',
            'option_category'  => 'configuration',
            'options'          => array(
                'off' => esc_html__('No', 'divi-gallery-booster'),
                'on'  => esc_html__('Yes', 'divi-gallery-booster'),
            ),
            'default' => 'on',
            'tab_slug'        => 'general',
            'toggle_slug'        => 'elements',
            'description'      => esc_html__('Choose whether or not the navigation dots should be displayed on the gallery slider.', 'divi-gallery-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            )
        )
    );
    return array_merge($fields, $new_fields);
}


function enable_feature($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }
    $props = $module->props;

    if (Gallery\layout($props) !== 'slider') {
        return $output;
    }
    if (empty($props['dbdb_show_dots']) || $props['dbdb_show_dots'] !== 'off') {
        return $output;
    }

    if (!has_action('wp_footer', __NAMESPACE__ . '\\add_styles')) {
        \add_action('wp_footer', __NAMESPACE__ . '\\add_styles');
    }

    return $output;
}

function add_class($classes, $props) {
    if (!is_array($classes)) {
        return $classes;
    }
    if (Gallery\layout($props) !== 'slider') {
        return $classes;
    }
    if (empty($props['dbdb_show_dots']) || $props['dbdb_show_dots'] !== 'off') {
        return $classes;
    }
    $classes[] = 'dbdb-slider-dots-off';
    return $classes;
}


function add_styles() { ?>
    <style>
        .et_pb_gallery.dbdb-slider-dots-off .et-pb-controllers {
            display: none !important;
        }
    </style>
<?php
}

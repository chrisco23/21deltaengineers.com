<?php

namespace DiviBooster\GalleryBooster\DisableLightbox;

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
        'dbdb_show_in_lightbox'    => array(
            'label'            => esc_html__('Enable Lightbox', 'divi-gallery-booster'),
            'type'             => 'yes_no_button',
            'option_category'  => 'configuration',
            'options'          => array(
                'off' => esc_html__('No', 'divi-gallery-booster'),
                'on'  => esc_html__('Yes', 'divi-gallery-booster'),
            ),
            'default' => 'on',
            'toggle_slug'      => 'elements',
            'description'      => esc_html__('Here you can choose whether or not the gallery images should open in a lightbox.', 'divi-gallery-booster'),
            // 'show_if' => array(
            //     'fullwidth' => 'off',
            // )
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

    // if (Gallery\layout($props) !== 'grid') {
    //     return $output;
    // }
    if (empty($props['dbdb_show_in_lightbox']) || $props['dbdb_show_in_lightbox'] !== 'off') {
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
    // if (Gallery\layout($props) !== 'grid') {
    //     return $classes;
    // }
    if (empty($props['dbdb_show_in_lightbox']) || $props['dbdb_show_in_lightbox'] !== 'off') {
        return $classes;
    }
    $classes[] = 'dbdb-lightbox-off';
    return $classes;
}


function add_styles() { ?>
    <style>
        .et_pb_gallery.dbdb-lightbox-off .et_pb_gallery_items {
            pointer-events: none;
        }
    </style>
<?php
}

<?php

namespace DiviBooster\GalleryBooster\LightboxHideTitle;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\add_field');
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\enable_feature', 10, 3);
}


function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    $new_fields = array(
        'dbdb_show_lightbox_title'    => array(
            'label'            => esc_html__('Show Lightbox Title', 'divi-gallery-booster'),
            'type'             => 'yes_no_button',
            'option_category'  => 'configuration',
            'options'          => array(
                'off' => esc_html__('No', 'divi-gallery-booster'),
                'on'  => esc_html__('Yes', 'divi-gallery-booster'),
            ),
            'default' => 'on',
            'toggle_slug'      => 'elements',
            'description'      => esc_html__('Here you can choose whether or not the title should be shown when the gallery is open in a lightbox.', 'divi-gallery-booster'),
            'show_if' => array(
                'dbdb_show_in_lightbox' => 'on'
            )
        ),
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

    if (empty($props['dbdb_show_lightbox_title']) || $props['dbdb_show_lightbox_title'] === 'on') {
        return $output;
    }

    if (is_callable('ET_Builder_Element::set_style')) {
        \ET_Builder_Element::set_style(
            $render_slug,
            array(
                'selector'    => '%%order_class%%_dbdb_lightbox_open .mfp-gallery .mfp-title',
                'declaration' => 'display: none;'
            )
        );
    }
    return $output;
}

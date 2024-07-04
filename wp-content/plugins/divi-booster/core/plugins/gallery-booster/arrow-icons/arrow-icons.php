<?php

namespace DiviBooster\GalleryBooster\ArrowIcons;

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
        'dbdb_prev_icon' => array(
            'label'          => esc_html__( 'Previous Slide Icon', 'divi-gallery-booster' ),
            'toggle_slug'    => 'dbdb_arrows',
            'type'           => 'select_icon',
            'class'          => array( 'et-pb-font-icon' ),
            'description'    => esc_html__( 'Choose an icon to display for the previous slide arrow.', 'divi-gallery-booster' ),
            'mobile_options' => true,
            'hover'          => 'tabs',
            'sticky'         => true,
            'tab_slug'       => 'advanced',
            'show_if'        => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_next_icon' => array(
            'label'          => esc_html__( 'Next Slide Icon', 'divi-gallery-booster' ),
            'toggle_slug'    => 'dbdb_arrows',
            'type'           => 'select_icon',
            'class'          => array( 'et-pb-font-icon' ),
            'description'    => esc_html__( 'Choose an icon to display for the next slide arrow.', 'divi-gallery-booster' ),
            'mobile_options' => true,
            'hover'          => 'tabs',
            'sticky'         => true,
            'tab_slug'       => 'advanced',
            'show_if'        => array(
                'fullwidth' => 'on',
            ),
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

    if (Gallery\layout($props) !== 'slider') {
        return $output;
    }

    $module->generate_styles(
        array(
            'utility_arg'    => 'icon_font_family_and_content',
            'render_slug'    => $render_slug,
            'base_attr_name' => 'dbdb_prev_icon',
            'important'      => true,
            'selector'       => "%%order_class%% .et-pb-slider-arrows a.et-pb-arrow-prev:before",
            'processor'      => array(
                'ET_Builder_Module_Helper_Style_Processor',
                'process_extended_icon',
            ),
        )
    );

    $module->generate_styles(
        array(
            'utility_arg'    => 'icon_font_family_and_content',
            'render_slug'    => $render_slug,
            'base_attr_name' => 'dbdb_next_icon',
            'important'      => true,
            'selector'       => "%%order_class%% .et-pb-slider-arrows a.et-pb-arrow-next:before",
            'processor'      => array(
                'ET_Builder_Module_Helper_Style_Processor',
                'process_extended_icon',
            ),
        )
    );

    return $output;
}
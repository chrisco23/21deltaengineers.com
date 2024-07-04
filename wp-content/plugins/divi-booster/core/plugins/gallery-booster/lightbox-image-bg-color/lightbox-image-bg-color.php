<?php

namespace DiviBooster\GalleryBooster\LighboxImageBackground;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\add_field');
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\enable_feature', 10, 3);    
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
}

function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    $new_fields = array(
        'dbdb_lightbox_image_background_color'    => array(
            'label'            => esc_html__('Lightbox Image Background Color', 'divi-gallery-booster'),
            'type'             => 'color-alpha',
            'option_category'  => 'configuration',
            'default' => '',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_lightbox',
            'description'      => esc_html__('Choose the background color for lightbox image area.', 'divi-gallery-booster'),
            'show_if' => array(
                'fullwidth' => 'off',
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

    if (Gallery\layout($props) !== 'grid') {
        return $output;
    }

    if (!empty($props['dbdb_lightbox_image_background_color'])) {
        if (is_callable('ET_Builder_Element::set_style')) {
            \ET_Builder_Element::set_style($render_slug, array(
                'selector'    => '.mfp-figure figure img',
                'declaration' => 'background-color: '.esc_html($props['dbdb_lightbox_image_background_color']).' !important; opacity: 1 !important; background-clip: content-box;'
                )
            );
        }
    }

    return $output;
}


// Create an empty font toggle to hold our fields
function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields)) {
        return $fields;
    }
    if (!isset($fields['fonts'])) {
        $fields['fonts'] = array();
    }
    $fields['fonts']['dbdb_lightbox'] = array(
        'label'      => esc_html__('Lightbox', 'divi-booster'),
        'hide_text_color' => true,
        'hide_font_size' => true,
        'hide_text_shadow' => true,
        'hide_text_align' => true,
        'hide_font'        => true,
        'hide_line_height' => true,
        'hide_letter_spacing' => true,	
    );
    return $fields;
}
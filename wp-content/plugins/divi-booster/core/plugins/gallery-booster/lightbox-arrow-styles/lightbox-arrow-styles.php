<?php

namespace DiviBooster\GalleryBooster\LightboxArrowStyles;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\fix_opacity', 10, 3);
}

function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields) || !isset($fields['fonts'])) {
        return $fields;
    }

    $order_class = preg_replace('/\.[^\.]+$/', '', $main_css_element);

    $fields['fonts']['dbdb_lightbox_arrows'] = array(
        'label'      => esc_html__('Lightbox Arrows', 'divi-booster'),
        'css'        => array(
            'main'       => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-arrow:after",
            'hover'      => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-arrow:hover:after",
            'text_shadow' => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-arrow:after",
            'important' => array(
                'text_shadow'
            )
        ),
        'hide_text_align' => true,
        'hide_font'        => true,
        'hide_line_height' => true,
        'hide_letter_spacing' => true,
        'font_size'       => array(
            'default' => '48px',
        ),

    );
    return $fields;
}

function fix_opacity($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }
    $props = $module->props;

    if (!empty($props['dbdb_lightbox_arrows_text_color'])) {
        if (is_callable('ET_Builder_Element::set_style')) {
            \ET_Builder_Element::set_style(
                $render_slug,
                array(
                    'selector'    => '%%order_class%%_dbdb_lightbox_open .mfp-gallery .mfp-arrow',
                    'declaration' => 'opacity: 1 !important;'
                )
            );
        }
    }

    return $output;
}

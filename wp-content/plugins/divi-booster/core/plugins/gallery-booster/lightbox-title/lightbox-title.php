<?php

namespace DiviBooster\GalleryBooster\LightboxTitle;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\fix_padding', 10, 3);
}

function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields) || !isset($fields['fonts'])) {
        return $fields;
    }

    $order_class = preg_replace('/\.[^\.]+$/', '', $main_css_element);

    $fields['fonts']['dbdb_lightbox_title'] = array(
        'label'      => esc_html__('Lightbox Title', 'divi-booster'),
        'css'        => array(
            'main'       => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-title",
            'hover'      => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-title:hover",
            'text_shadow' => "{$order_class}_dbdb_lightbox_open .mfp-gallery .mfp-title",
            'important' => array(
                'text_shadow'
            )
        ),
        'font_size'       => array(
            'default' => '14px',
        ),

    );
    return $fields;
}

function fix_padding($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }

    if (is_callable('ET_Builder_Element::set_style')) {
        \ET_Builder_Element::set_style(
            $render_slug,
            array(
                'selector'    => '%%order_class%%_dbdb_lightbox_open .mfp-gallery .mfp-title',
                'declaration' => 'padding-right: 0 !important;'
            )
        );
    }

    return $output;
}

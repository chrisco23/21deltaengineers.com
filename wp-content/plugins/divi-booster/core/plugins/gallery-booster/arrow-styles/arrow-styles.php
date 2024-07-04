<?php

namespace DiviBooster\GalleryBooster\ArrowStyles;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
    \add_filter('wp_head', __NAMESPACE__ . '\\add_default_styles');
}

function add_default_styles() {
?>
    <style>
        .et_pb_gallery .et-pb-slider-arrows a {
            margin-top: 0;
            transform: translateY(-50%);
        }
    </style>
<?php
}

function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields) || !isset($fields['fonts'])) {
        return $fields;
    }
    $fields['fonts']['dbdb_arrows'] = array(
        'label'      => esc_html__('Slider Arrows', 'divi-booster'),
        'css'        => array(
            'main'       => "{$main_css_element} .et-pb-slider-arrows a",
            'hover'      => "{$main_css_element} .et-pb-slider-arrows a:hover",
            'text_shadow' => "{$main_css_element} .et-pb-slider-arrows a:before",
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

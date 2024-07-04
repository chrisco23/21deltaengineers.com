<?php

namespace DiviBooster\GalleryBooster\DotNavigationStyles;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\add_field');
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\enable_feature', 10, 3);
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
    \add_filter('wp_head', __NAMESPACE__ . '\\add_default_styles');
}

function add_default_styles() {
?>
    <style>
        .et_pb_gallery .et-pb-controllers a {
            border-style: solid;
        }
    </style>
<?php
}

function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    $new_fields = array(
        'dbdb_dot_nav_color_inactive'    => array(
            'label'            => esc_html__('Dot Navigation Inactive Color', 'divi-gallery-booster'),
            'type'             => 'color-alpha',
            'option_category'  => 'configuration',
            'default' => '',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'description'      => esc_html__('Choose the inactive dot color for the navigation dots at the bottom of the slider.', 'divi-gallery-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_dot_nav_color_inactive_warning' => array(
            'type'              => 'warning',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'message'       => esc_html__('This feature will only show on the front end, not in the Visual Builder preview.', 'divi-booster'),
            'value' => true,
            'display_if' => true,
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_dot_nav_color_active'    => array(
            'label'            => esc_html__('Dot Navigation Active Color', 'divi-gallery-booster'),
            'type'             => 'color-alpha',
            'option_category'  => 'configuration',
            'default' => '',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'description'      => esc_html__('Choose the active dot color for the navigation dots at the bottom of the slider.', 'divi-gallery-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_dot_nav_color_active_warning' => array(
            'type'              => 'warning',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'message'       => esc_html__('This feature will only show on the front end, not in the Visual Builder preview.', 'divi-booster'),
            'value' => true,
            'display_if' => true,
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_dot_nav_size'    => array(
            'label'            => esc_html__('Dot Navigation Size', 'divi-gallery-booster'),
            'type'             => 'range',
            'option_category'  => 'configuration',
            'default'          => '7px',
            'default_unit'     => 'px',
            'default_on_front' => '',
            'range_settings'   => array(
                'min'  => '1',
                'max'  => '120',
                'step' => '1',
            ),
            'allowed_units'    => array('%', 'em', 'rem', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'vh', 'vw'),
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'description'      => esc_html__('Choose the size of the navigation dots at the bottom of the slider.', 'divi-gallery-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            )
        ),
        'dbdb_dot_nav_size_warning' => array(
            'type'              => 'warning',
            'tab_slug' => 'advanced',
            'toggle_slug'      => 'dbdb_dot_navigation',
            'message'       => esc_html__('This feature will only show on the front end, not in the Visual Builder preview.', 'divi-booster'),
            'value' => true,
            'display_if' => true,
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
    );
    return array_merge($new_fields, $fields);
}

function enable_feature($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }
    $props = $module->props;

    if (empty($props['fullwidth']) || $props['fullwidth'] !== 'on') {
        return $output;
    }

    if (!empty($props['dbdb_dot_nav_color_active'])) {
        if (is_callable('ET_Builder_Element::set_style')) {
            \ET_Builder_Element::set_style(
                $render_slug,
                array(
                    'selector'    => '%%order_class%% .et-pb-controllers a.et-pb-active-control',
                    'declaration' => 'background-color: ' . esc_html($props['dbdb_dot_nav_color_active']) . ' !important; opacity: 1 !important;'
                )
            );
        }
    }

    if (!empty($props['dbdb_dot_nav_color_inactive'])) {
        if (is_callable('ET_Builder_Element::set_style')) {
            \ET_Builder_Element::set_style(
                $render_slug,
                array(
                    'selector'    => '%%order_class%% .et-pb-controllers a:not(.et-pb-active-control)',
                    'declaration' => 'background-color: ' . esc_html($props['dbdb_dot_nav_color_inactive']) . ' !important; opacity: 1 !important;'
                )
            );
        }
    }

    if (!empty($props['dbdb_dot_nav_size'])) {
        if (is_callable('ET_Builder_Element::set_style')) {
            \ET_Builder_Element::set_style(
                $render_slug,
                array(
                    'selector'    => 'div%%order_class%% .et-pb-controllers a',
                    'declaration' => 'width: ' . esc_html($props['dbdb_dot_nav_size']) . ' !important; height: ' . esc_html($props['dbdb_dot_nav_size']) . ' !important; border-radius: 50%;'
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
    $fields['fonts']['dbdb_dot_navigation'] = array(
        'label'      => esc_html__('Dot Navigation', 'divi-booster'),
        'hide_text_color' => true,
        'hide_font_size' => true,
        'hide_text_shadow' => true,
        'hide_text_align' => true,
        'hide_font'        => true,
        'hide_line_height' => true,
        'hide_letter_spacing' => true,
    );
    if (!isset($fields['borders'])) {
        $fields['borders'] = array();
    }
    $fields['borders']['dot_navigation'] = array(
        'css'      => array(
            'main' => array(
                'border_styles' => "{$main_css_element} div.et-pb-controllers a",
                'border_radii' => "div{$main_css_element} div.et-pb-controllers a"
            ),
            'important' => 'all'
        ),
        'defaults' => array(
            'border_radii' => 'on|50%|50%|50%|50%',                        'border_styles' => array(
                'width' => '0px',
                'color' => '#333333',
                'style' => 'solid',
            ),
        ),
        'tab_slug' => 'advanced',
        'toggle_slug' => 'dbdb_dot_navigation',
        'depends_on'      => array('fullwidth'),
        'depends_show_if' => 'on',
    );
    return $fields;
}

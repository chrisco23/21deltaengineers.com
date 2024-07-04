<?php

namespace DiviBooster\DiviBooster\SliderModuleLinkSlideTitle;


if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\remove_divi_slider_title_link', 20, 3);
    \add_action('et_builder_ready', __NAMESPACE__ . '\\add_link_title_field_to_module_settings', 11);
    add_filter('et_pb_module_shortcode_attributes', __NAMESPACE__ . '\\fix_missing_props', 10, 3);
}


function add_link_title_field_to_module_settings() {
    if (isset($GLOBALS['shortcode_tags'])) {
        foreach ($GLOBALS['shortcode_tags'] as $slug => $data) {
            if ($slug === 'et_pb_slide' && isset($data[0])) {
                $obj = $data[0];
                if (class_exists('ET_Builder_Module_Slider_Item') && $obj instanceof \ET_Builder_Module_Slider_Item && isset($obj->fields_unprocessed)) {
                    $obj->fields_unprocessed = add_link_title_field($obj->fields_unprocessed);
                    $GLOBALS['shortcode_tags'][$slug][0] = $obj;
                }
            }
        }
    }
}

function fix_missing_props($props, $attrs, $render_slug) {
    $field = 'dbdb_link_slide_title';
    if (!isset($props[$field]) && isset($attrs[$field])) {
        $props[$field] = $attrs[$field];
    }
    return $props;
}

function add_link_title_field($fields) {

    if (!is_array($fields)) {
        return $fields;
    }

    $new_fields = array();

    foreach ($fields as $k => $v) {
        $new_fields[$k] = $v;

        if ($k === 'button_link') {
            $new_fields['dbdb_link_slide_title'] = array(
                'label'           => esc_html__('Link the Slide Title', 'divi-booster'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'on'  => esc_html__('Yes', 'et_builder'),
                    'off' => esc_html__('No', 'et_builder'),
                ),
                'default'         => 'on',
                'toggle_slug'     => 'link_options',
                'description'     => esc_html__('Normally, when the Button Link URL is set, Divi will apply the link to the slide title too. You can use this option to prevent the slide title from being linked. Added by Divi Booster.', 'divi-booster'),
                'show_if_not'         => array(
                    'button_link' => array('', '#'),
                ),
            );
        }
    }
    return $new_fields;
}

function remove_divi_slider_title_link($output, $render_slug, $module) {
    // Proceed only if the output is a string and the module is a slide.
    if (is_string($output) && 'et_pb_slide' === $render_slug && isset($module->props['dbdb_link_slide_title']) && 'off' === $module->props['dbdb_link_slide_title']) {
        $output = preg_replace(
            '~<h([1-6])\s+class="et_pb_slide_title">\s*<a href="[^"]*">(.*?)</a>\s*</h[1-6]>~s',
            '<h$1 class="et_pb_slide_title">$2</h$1>',
            $output
        );
    }
    return $output;
}

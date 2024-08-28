<?php

namespace DiviBooster\DiviBooster\SliderModuleLinkSlideTitle;


if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\remove_divi_slider_title_link', 20, 3);
    \add_action('et_pb_all_fields_unprocessed_et_pb_slide', __NAMESPACE__ . '\\add_link_title_field');
    add_filter('et_pb_module_shortcode_attributes', __NAMESPACE__ . '\\fix_missing_props', 10, 3);
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

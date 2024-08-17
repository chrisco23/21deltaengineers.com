<?php

namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_slider', __NAMESPACE__ . '\\add_slide_random_order_field');
    \add_filter('et_pb_all_fields_unprocessed_et_pb_fullwidth_slider', __NAMESPACE__ . '\\add_slide_random_order_field');
    \add_action('wp_footer', __NAMESPACE__ . '\\add_slide_random_order_js');
    \add_filter('divi_booster/et_pb_slider/classes', __NAMESPACE__ . '\\add_custom_class_to_slider', 10, 2);
    \add_filter('divi_booster/et_pb_fullwidth_slider/classes', __NAMESPACE__ . '\\add_custom_class_to_slider', 10, 2);
    \add_action('wp_head', __NAMESPACE__ . '\\hide_initially_active_slide_css');
}

function add_custom_class_to_slider($classes, $props) {
    if (!is_array($classes)) {
        return $classes;
    }
    if (isset($props['dbdb_randomize_slides']) && 'on' === $props['dbdb_randomize_slides']) {
        $classes[] = 'dbdb_slider_random';
    }
    return $classes;
}

function add_slide_random_order_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    return $fields + array(
        'dbdb_randomize_slides' => array(
            'label'             => esc_html__('Randomize Slides', 'divi-booster'),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__('Yes', 'et_builder'),
                'off' => esc_html__('No', 'et_builder'),
            ),
            'default'  => 'off',
            'toggle_slug'      => 'elements',
            'description'       => esc_html__('Enable this to shuffle the slide order each time the page is loaded. Added by Divi Booster.', 'divi-booster'),
        ),
    );
}

function add_slide_random_order_js() { ?>
    <script>
        jQuery(document).ready(function($) {
            $('.et_pb_slider.dbdb_slider_random').each(function() {
                var $slider = $(this);
                var $slidesContainer = $slider.find('.et_pb_slides');

                // Randomize the slides
                var $slides = $slidesContainer.children().sort(function() {
                    return Math.random() - 0.5;
                }).detach().appendTo($slidesContainer);

                // Remove the active class from existing slide
                $slides.removeClass('et-pb-active-slide');

                // Restore visibility to the slides
                $slides.css('visibility', 'visible');


                // Add the active class to the first slide
                $slides.first().addClass('et-pb-active-slide');
            });
        });
    </script>
<?php
}

function hide_initially_active_slide_css() { ?>
    <style>
        .et_pb_slider.dbdb_slider_random .et-pb-active-slide {
            visibility: hidden;
        }
    </style>
<?php
}

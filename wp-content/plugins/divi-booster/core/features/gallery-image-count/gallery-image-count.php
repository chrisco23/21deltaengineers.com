<?php

namespace DiviBooster\DiviBooster;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_gallery', __NAMESPACE__ . '\\add_gallery_image_count_field');
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__ . '\\add_advanced_fields', 10, 3);
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\add_gallery_image_count', 10, 3);
    \add_action('wp_footer', __NAMESPACE__ . '\\update_gallery_image_count');
}


function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields) || !isset($fields['fonts'])) {
        return $fields;
    }
    $fields['fonts']['dbdb_image_count'] = array(
        'label'      => esc_html__('Image Count', 'divi-booster'),
        'css'        => array(
            'main'       => "{$main_css_element} .dbdb-slide-counter",
            'hover'      => "{$main_css_element} .dbdb-slide-counter:hover",
            'text_align' => "{$main_css_element} .dbdb-slide-counter",
        ),
        'text_align' => array(
            'options' => function_exists('et_builder_get_text_orientation_options') ? et_builder_get_text_orientation_options(array('justified')) : array(),
        )
    );
    return $fields;
}

function add_gallery_image_count_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    return $fields + array(
        'dbdb_image_count' => array(
            'label'             => esc_html__('Show Image Count', 'et_builder'),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__('Yes', 'et_builder'),
                'off' => esc_html__('No', 'et_builder'),
            ),
            'default'  => 'off',
            'toggle_slug'      => 'elements',
            'description'       => esc_html__('Display current image number / total images below the slider.', 'divi-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
        'dbdb_image_count_separator' => array(
            'label'             => esc_html__('Count Separator', 'divi-booster'),
            'type'              => 'text',
            'option_category'   => 'configuration',
            'default'           => esc_html__(' of ', 'divi-booster'),
            'toggle_slug'       => 'elements',
            'description'       => esc_html__('Customize the text between the current image number and total images.', 'divi-booster'),
            'show_if'           => array(
                'dbdb_image_count' => 'on',
            ),
        )
    );
}


function add_gallery_image_count($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if ($render_slug !== 'et_pb_gallery') {
        return $output;
    }
    if (!isset($module->props)) {
        return $output;
    }
    $props = $module->props;
    if (empty($props['fullwidth']) || $props['fullwidth'] !== 'on') {
        return $output;
    }
    if (empty($props['dbdb_image_count']) || $props['dbdb_image_count'] !== 'on') {
        return $output;
    }
    $separator = isset($props['dbdb_image_count_separator']) ? $props['dbdb_image_count_separator'] : __(' of ', 'divi-booster');
    $total = substr_count($output, 'class="et_pb_gallery_item ');
    $counter = '<div class="dbdb-slide-counter"><span class="dbdb-slide-counter-active">1</span>' . esc_html($separator, 'divi-booster') . '<span class="dbdb-slide-counter-total">' . esc_html($total) . '</span></div>';
    $output = preg_replace('/<\/div>$/s', $counter . '</div>', $output);

    // Add a custom class to the gallery to allow for custom styling
    $output = str_replace('class="et_pb_module et_pb_gallery ', 'class="et_pb_module et_pb_gallery dbdb-gallery-with-image-count ', $output);

    return $output;
}


function update_gallery_image_count() { ?>
    <script>
        jQuery(function($) {

            // Trigger counter refresh on first load
            $('.dbdb-gallery-with-image-count').each(function() {
                triggerSlideChanged($(this));
            });

            // Trigger counter refresh when the slide changes (due to arrow button clicked)
            $(document).on('mouseup', '.dbdb-gallery-with-image-count .et-pb-slider-arrows a, .dbdb-gallery-with-image-count .et-pb-controllers a', function() {
                var $gallery = $(this).closest('.dbdb-gallery-with-image-count');
                triggerSlideChanged($gallery);
            });

            function triggerSlideChanged($gallery) {
                $gallery.trigger('divi-booster:gallery-slide-changed');
            }

            // Update the counter when the slide has changed
            $(document).on('divi-booster:gallery-slide-changed', '.dbdb-gallery-with-image-count', function() {
                var $gallery = $(this);
                setTimeout(function() {
                    var currentIndex = $gallery.find('.et-pb-active-slide').index() + 1;
                    $gallery.find('.dbdb-slide-counter-active').text(currentIndex);
                }, 50);
            });

        });
    </script>
    <style>
        .dbdb-gallery-with-image-count .dbdb-slide-counter {
            position: absolute;
            width: 100%;
        }

        .dbdb-gallery-with-image-count {
            overflow: visible !important;
        }

        .dbdb-gallery-with-image-count .et_pb_gallery_items {
            overflow: hidden;
        }

        /* Fix divi gallery layout change on first slide change bug (as this causes the counter to jump too) */
        .dbdb-gallery-with-image-count .et_pb_gallery_item.et_slide_transition {
            display: block !important;
        }
    </style>
<?php
}

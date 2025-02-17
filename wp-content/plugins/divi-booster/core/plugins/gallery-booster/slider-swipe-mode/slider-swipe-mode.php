<?php

namespace DiviBooster\GalleryBooster\SliderSwipeMode;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\add_field');
    \add_filter('divi_booster/gallery_booster/gallery_output', __NAMESPACE__ . '\\enable_feature', 10, 3);
    \add_filter('divi_booster/gallery_booster/gallery_classes', __NAMESPACE__ . '\\add_class', 10, 2);
}

function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    return $fields + array(
        'dbdb_slider_swipe_mode' => array(
            'label'             => esc_html__('Enable Touchscreen Swiping', 'et_builder'),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__('Yes', 'et_builder'),
                'off' => esc_html__('No', 'et_builder'),
            ),
            'default'  => 'off',
            'tab_slug'        => 'advanced',
            'toggle_slug'        => 'layout',
            'description'       => esc_html__('Enable swipe functionality for the gallery slider. On touch screen devices, swiping left or right will navigate through the slides.', 'divi-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
            'class' => 'hide-warning'
        ),
        //'dbdb_slider_swipe_mode_warning' => \DiviBooster\GalleryBooster\no_vb_preview_warning('dbdb_slider_swipe_mode', 'general', 'elements', 'slider')
    );
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
    if (empty($props['dbdb_slider_swipe_mode']) || $props['dbdb_slider_swipe_mode'] !== 'on') {
        return $output;
    }

    if (!has_action('wp_footer', __NAMESPACE__ . '\\add_swipe_script')) {
        \add_action('wp_footer', __NAMESPACE__ . '\\add_swipe_script');
    }

    return $output;
}

function add_class($classes, $props) {
    if (!is_array($classes)) {
        return $classes;
    }
    if (Gallery\layout($props) !== 'slider') {
        return $classes;
    }
    if (empty($props['dbdb_slider_swipe_mode']) || $props['dbdb_slider_swipe_mode'] !== 'on') {
        return $classes;
    }
    $classes[] = 'dbdb-slider-swipe-mode';
    return $classes;
}

function add_swipe_script() { ?>
    <script>
        jQuery(document).ready(function($) {
            $('.et_pb_gallery.dbdb-slider-swipe-mode.et_pb_slider').on('touchstart', function(e) {
                var startTouch = e.originalEvent.touches[0];
                var startX = startTouch.pageX;
                var startY = startTouch.pageY;
                var scrolledVertically = false;
                var $thisGallery = $(this);

                $thisGallery.on('touchmove', function(moveEvent) {
                    var moveTouch = moveEvent.originalEvent.touches[0];
                    var changeX = moveTouch.pageX - startX;
                    var changeY = moveTouch.pageY - startY;

                    if (Math.abs(changeY) > Math.abs(changeX)) {
                        scrolledVertically = true;
                        return;
                    }
                    moveEvent.preventDefault();
                }).on('touchend', function(endEvent) {
                    $thisGallery.off('touchmove touchend');

                    if (scrolledVertically) {
                        scrolledVertically = false;
                        return;
                    }

                    var endTouch = endEvent.originalEvent.changedTouches[0];
                    var endX = endTouch.pageX;
                    var changeX = endX - startX;

                    if (Math.abs(changeX) > 0) {
                        if (changeX > 0) {
                            $thisGallery.find('.et-pb-arrow-prev').click();
                        } else {
                            $thisGallery.find('.et-pb-arrow-next').click();
                        }
                    }
                    var event = $.Event('divi-booster:gallery-slide-changed');
                    $thisGallery.trigger(event);
                });

                e.stopPropagation();
            });
        });
    </script>
<?php
}

<?php

namespace DiviBooster\DiviBooster\GalleryCursorArrows;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_gallery', __NAMESPACE__ . '\\add_field');
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\enable_feature', 10, 3);
}




function add_field($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    return $fields + array(
        'dbdb_cursor_arrows' => array(
            'label'             => esc_html__('Use Cursor-Following Arrow Effect', 'et_builder'),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__('Yes', 'et_builder'),
                'off' => esc_html__('No', 'et_builder'),
            ),
            'default'  => 'off',
            'toggle_slug'      => 'elements',
            'description'       => esc_html__('Replace the static previous / next arrows with an arrow that follows the mouse. Depending which half of the gallery the mouse is in, the previous or next arrow will replace the mouse cursor and clicking will trigger that effect. On mobile, the arrows won\'t show but tapping on (or swiping from) the left half of the gallery will move to the previous slide and tapping on (or swiping from) the right half will move to the next slide. Note that images won\'t open in a lightbox when this feature is enabled. Added by Divi Booster', 'divi-booster'),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
    );
}


function enable_feature($output, $render_slug, $module) {
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
    if (empty($props['dbdb_cursor_arrows']) || $props['dbdb_cursor_arrows'] !== 'on') {
        return $output;
    }
    // Add a class to the gallery to enable the cursor-following arrows
    $output = str_replace('class="et_pb_module et_pb_gallery ', 'class="et_pb_module et_pb_gallery dbdb-cursor-arrows ', $output);

    if (!has_action('wp_footer', __NAMESPACE__ . '\\add_cursor_arrow_script')) {
        \add_action('wp_footer', __NAMESPACE__ . '\\add_cursor_arrow_script');
    }

    return $output;
}


function add_cursor_arrow_script() { ?>
    <style>
        /* Hide the cursor */
        body:not(.et-fb) .et_pb_gallery.dbdb-cursor-arrows.et_pb_slider *,
        body:not(.et-fb) .et_pb_gallery.dbdb-cursor-arrows.et_pb_slider .et-pb-slider-arrows a {
            cursor: none !important;
        }

        /* Make the arrows fixed */
        .et_pb_gallery.dbdb-cursor-arrows.et_pb_slider .et-pb-arrow-prev,
        .et_pb_gallery.dbdb-cursor-arrows.et_pb_slider .et-pb-arrow-next {
            display: none;
            position: fixed;
            z-index: 9999;
            transition: none;
        }
    </style>

    <script>
        jQuery(document).ready(function($) {

            // Flag to determine if a touch event is in progress
            var isTouching = false;

            // Function to move the arrow with the cursor for mouse events
            function moveArrow(arrowClass, e) {
                if (!isTouching) {
                    $(arrowClass).css({
                        'display': 'block',
                        'left': (e.clientX - 24) + 'px',
                        'top': e.clientY + 'px'
                    });
                }
            }

            // Function to simulate a click on the arrow elements
            function triggerClick(arrowClass) {
                $(arrowClass).click();
            }

            // Mousemove event for each gallery
            $(document).on('pointermove', '.et_pb_gallery.dbdb-cursor-arrows.et_pb_slider', function(e) {
                var $thisGallery = $(this);
                var galleryOffset = $thisGallery.offset();
                var galleryWidth = $thisGallery.width();
                var galleryHeight = $thisGallery.height();
                var mouseX = e.clientX - galleryOffset.left;
                var mouseY = (e.clientY + $(window).scrollTop()) - galleryOffset.top;

                // Calculate if the cursor is inside this specific gallery
                var isInsideGallery = (mouseX > 0 && mouseX < galleryWidth && mouseY > 0 && mouseY < galleryHeight);

                // Hide all arrows initially
                $thisGallery.find('.et-pb-arrow-prev, .et-pb-arrow-next').hide();

                // Adjust the arrow position / visibility for this gallery
                if (isInsideGallery) {
                    if (mouseX < galleryWidth / 2) {
                        moveArrow($thisGallery.find('.et-pb-arrow-prev'), e);
                    } else {
                        moveArrow($thisGallery.find('.et-pb-arrow-next'), e);
                    }
                }
            });

            $('.et_pb_gallery.dbdb-cursor-arrows.et_pb_slider').on('touchstart', function(e) {
                isTouching = true;
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
                        isTouching = false;
                        return;
                    }

                    var endTouch = endEvent.originalEvent.changedTouches[0];
                    var endX = endTouch.pageX;
                    var galleryWidth = $thisGallery.width();
                    var changeX = endX - startX;

                    if (Math.abs(changeX) < 10) {
                        var galleryOffset = $thisGallery.offset();
                        var touchX = startX - galleryOffset.left;

                        if (touchX < galleryWidth / 2) {
                            triggerClick($thisGallery.find('.et-pb-arrow-prev'));
                        } else {
                            triggerClick($thisGallery.find('.et-pb-arrow-next'));
                        }
                    } else if (changeX > 0) {
                        triggerClick($thisGallery.find('.et-pb-arrow-prev'));
                    } else {
                        triggerClick($thisGallery.find('.et-pb-arrow-next'));
                    }
                    var event = $.Event('divi-booster:gallery-slide-changed');
                    $thisGallery.trigger(event);
                    isTouching = false;
                });

                e.stopPropagation();
            });


        });
    </script>
<?php
}

<?php

namespace DiviBooster\GalleryBooster;

// === Include the gallery booster features ===

if (version_compare(phpversion(), '5.3', '>=')) {
    include_once(dirname(__FILE__) . '/cursor-arrows/cursor-arrows.php');
    include_once(dirname(__FILE__) . '/slider-swipe-mode/slider-swipe-mode.php');
    include_once(dirname(__FILE__) . '/order/order.php');
    include_once(dirname(__FILE__) . '/grid-image-sizes/grid-image-sizes.php');

    include_once(dirname(__FILE__) . '/disable-lightbox/disable-lightbox.php');
    include_once(dirname(__FILE__) . '/arrow-styles/arrow-styles.php');
    include_once(dirname(__FILE__) . '/arrow-icons/arrow-icons.php');
    include_once(dirname(__FILE__) . '/dot-navigation-styles/dot-navigation-styles.php');
    include_once(dirname(__FILE__) . '/lightbox-hide-title/lightbox-hide-title.php');
    include_once(dirname(__FILE__) . '/lightbox-hide-image-count/lightbox-hide-image-count.php');
    include_once(dirname(__FILE__) . '/lightbox-background-color/lightbox-background-color.php');
    include_once(dirname(__FILE__) . '/lightbox-image-bg-color/lightbox-image-bg-color.php');
    include_once(dirname(__FILE__) . '/lightbox-arrow-styles/lightbox-arrow-styles.php');
    include_once(dirname(__FILE__) . '/lightbox-close-button-styles/lightbox-close-button-styles.php');
    include_once(dirname(__FILE__) . '/lightbox-image-count/lightbox-image-count.php');
    include_once(dirname(__FILE__) . '/lightbox-title/lightbox-title.php');
    include_once(dirname(__FILE__) . '/image-count/image-count.php');
    include_once(dirname(__FILE__) . '/disable-grid-slide-in-effect/disable-grid-slide-in-effect.php');
    include_once(dirname(__FILE__) . '/slider-hide-arrows/slider-hide-arrows.php');
    include_once(dirname(__FILE__) . '/slider-hide-dots/slider-hide-dots.php');
}

// === Add the gallery module fields filter ===

if (function_exists('add_filter')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_gallery', __NAMESPACE__ . '\\register_gallery_module_fields_filter');
}

function register_gallery_module_fields_filter($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    return apply_filters('divi_booster/gallery_booster/gallery_module_fields', $fields);
}

// === Remove VB preview warnings ===
if (function_exists('add_action')) {
    add_action('wp_footer', __NAMESPACE__ . '\\remove_vb_preview_warnings', 11);
    add_action('admin_footer', __NAMESPACE__ . '\\remove_vb_preview_warnings', 11);
}

function remove_vb_preview_warnings() {
?>
    <style>
        .et-fb-no-vb-support-warning {
            display: none !important;
        }
    </style>
<?php
}



// === Wrap the gallery output filter ===

if (function_exists('add_filter')) {
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\filter_gallery_output', 10, 3);
}

function filter_gallery_output($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if ($render_slug !== 'et_pb_gallery') {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }

    $props = $module->props;

    // Add a filter for the classes
    $output = preg_replace_callback(
        '/class="([^"]*?et_pb_module et_pb_gallery[^"]*?)"/',
        function ($matches) use ($props) {
            $classes = explode(' ', $matches[1]);
            $classes = apply_filters('divi_booster/gallery_booster/gallery_classes', $classes, $props);
            return 'class="' . implode(' ', $classes) . '"';
        },
        $output
    );


    $output = apply_filters('divi_booster/gallery_booster/gallery_output', $output, $render_slug, $module);
    return $output;
}

// === Wrap the preprocess computed property action ===

function filter_process_computed_property() {
    if (empty($_POST['module_type']) || $_POST['module_type'] !== 'et_pb_gallery') {
        return;
    }
    do_action('divi_booster/gallery_booster/process_gallery_computed_property');
}

if (function_exists('add_action')) {
    add_action('wp_ajax_et_pb_process_computed_property', __NAMESPACE__ . '\\filter_process_computed_property', 9);
}


// === Wrap the shortcode attributes filter ===

function filter_shortcode_attributes($props, $attrs, $render_slug) {
    if ($render_slug !== 'et_pb_gallery') {
        return $props;
    }
    return apply_filters('divi_booster/gallery_booster/gallery_shortcode_attributes', $props, $attrs, $render_slug);
}

if (function_exists('add_filter')) {
    add_filter('et_pb_module_shortcode_attributes', __NAMESPACE__ . '\\filter_shortcode_attributes', 10, 3);
}

// === Helper functions ===

function no_vb_preview_warning($field, $tab, $toggle, $layout = 'all') {

    $show_if = array(
        $field => 'on'
    );
    if ($layout === 'grid') {
        $show_if['fullwidth'] = 'off';
    } elseif ($layout === 'slider') {
        $show_if['fullwidth'] = 'on';
    }

    return array(
        'type'              => 'warning',
        'tab_slug'          => $tab,
        'toggle_slug'      => $toggle,
        'message'       => esc_html__('This feature will only show on the front end, not in the Visual Builder preview.', 'divi-booster'),
        'show_if' => $show_if,
        'value' => true,
        'display_if' => true,
    );
}

function layout($props) {
    $layout = 'grid';
    if (!empty($props['fullwidth']) && $props['fullwidth'] === 'on') {
        $layout = 'slider';
    }
    return $layout;
}

// === Add the module order class with prefix (e.g. dbdb_lightbox_open_et_pb_gallery_2) to the body (for targeting lightbox associated with a particular module) ===

if (function_exists('add_action')) {
    add_action('wp_footer', __NAMESPACE__ . '\\add_opened_lightbox_class_to_body');
}

function add_opened_lightbox_class_to_body() {
?>
    <script>
        jQuery(document).ready(function($) {
            $(document).on('click', '.et_pb_gallery .et_pb_gallery_image a', function() {

                // Remove the old class
                $('body').removeClass(function(index, className) {
                    return (className.match(/(^|\s)et_pb_gallery_\d+_dbdb_lightbox_open/g) || []).join(' ');
                });

                // Add the new class
                var gallery_module_order = $(this).closest('.et_pb_gallery').attr('class').match(/et_pb_gallery_\d+/)[0];
                $('body').addClass(gallery_module_order + '_dbdb_lightbox_open');
            });
        });
    </script>
<?php
}

// === Module options credit ===

function dbgb_added_by_gallery_booster() {
    if (function_exists('divibooster_module_options_credit')) {
        return divibooster_module_options_credit();
    } else {
        return esc_html__('Added by Divi Gallery Booster', 'divi-gallery-booster');
    }
}

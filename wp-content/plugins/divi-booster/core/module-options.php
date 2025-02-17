<?php

// === Init ===

$divibooster_module_shortcodes = array(
    'et_pb_accordion' => 'db_pb_accordion',
    'et_pb_menu' => 'db_pb_menu',
    'et_pb_team_member' => 'db_pb_team_member',
    'et_pb_portfolio' => 'db_pb_portfolio',
    'et_pb_filterable_portfolio' => 'db_pb_filterable_portfolio',
    'et_pb_fullwidth_portfolio' => 'db_pb_fullwidth_portfolio',
    'et_pb_signup' => 'db_pb_signup',
    'et_pb_slide' => 'db_pb_slide',
    'et_pb_slider' => 'db_pb_slider',
    'et_pb_fullwidth_slider' => 'db_pb_fullwidth_slider',
    'et_pb_post_slider' => 'db_pb_post_slider',
    'et_pb_fullwidth_post_slider' => 'db_pb_fullwidth_post_slider',
    'et_pb_countdown_timer' => 'db_pb_countdown_timer',
    'et_pb_map_pin' => 'db_pb_map_pin',
    'et_pb_video' => 'db_pb_video'
);

// Clear modified modules in local storage as necessary
add_action('db-divi-booster-updated', 'divibooster_clear_module_local_storage');
if (defined('DB_DISABLE_LOCAL_CACHING')) {
    divibooster_clear_module_local_storage();
}

// Register custom db_filter_et_pb_layout filter for global content
add_filter('the_posts', 'divibooster_filter_global_modules');

// Remove excess <p> tags which get added around slides
add_filter('the_content', 'dbmo_unautop_slides', 12);


// === Load the module options ===
$MODULE_OPTIONS_DIR = dbdb_path('core/module_options/');

// General functionality
include_once($MODULE_OPTIONS_DIR . 'dynamic_content.php');

// Module-specific functionality
include_once($MODULE_OPTIONS_DIR . 'et_pb_accordion/et_pb_accordion.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_menu/et_pb_menu.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_team_member.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_portfolio/et_pb_portfolio.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_signup.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_slide/et_pb_slide.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_slider.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_fullwidth_slider.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_post_slider.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_fullwidth_post_slider.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_countdown_timer.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_map_pin.php');
include_once($MODULE_OPTIONS_DIR . 'et_pb_video/et_pb_video.php');


// === Fix missing props when cached ===
add_filter('dbdb_et_pb_module_shortcode_attributes', 'dbdb_module_options_fix_missing_props', 10, 3);

function dbdb_module_options_fix_missing_props($props, $attrs, $render_slug) {
    foreach (apply_filters("dbmo_{$render_slug}_whitelisted_fields", array()) as $field) {
        if (!isset($props[$field]) && isset($attrs[$field])) {
            $props[$field] = $attrs[$field];
        }
    }
    return $props;
}


// === Enable {$tag}_content filter ===

foreach ($divibooster_module_shortcodes as $etsc => $dbsc) {
    DBDBModuleOutputFilterHook::create($etsc, "{$dbsc}_content")->enable();
}

// === Avoid local caching === 

function divibooster_clear_module_local_storage() {
    add_action('admin_head', 'divibooster_remove_from_local_storage');
}
function divibooster_remove_from_local_storage() {

    global $divibooster_module_shortcodes;

    foreach ($divibooster_module_shortcodes as $etsc => $dbsc) {
        echo "<script>localStorage.removeItem('et_pb_templates_" . esc_attr($etsc) . "');</script>";
    }
}


// === Helper filters === 

// Add "db_filter_et_pb_layout" filter for builder layouts returned by WP_Query (on front end only)
function divibooster_filter_global_modules($posts) {

    // Apply filters to builder layouts
    if (!is_admin() && !empty($posts) && count($posts) == 1) { // If have one single result

        $is_et_pb_layout = (isset($posts[0]->post_type) && $posts[0]->post_type == 'et_pb_layout');

        if ($is_et_pb_layout) {
            $content = isset($posts[0]->post_content) ? $posts[0]->post_content : '';
            $posts[0]->post_content = apply_filters('db_filter_et_pb_layout', $content);
        }
    }

    return $posts;
}

// === Shortcode content functions ===

// add classes to the module
function divibooster_add_module_classes_to_content($content, $classes) {
    $classes = implode(' ', $classes);
    $content = preg_replace('#(<div class="[^"]*?et_pb_module [^"]*?)(">)#', '\\1 ' . $classes . '\\2', $content);
    return $content;
}

function divibooster_module_options_credit() {
    return trim((string) DBDBModuleFieldDescription::create(DBDBWp::create(), ''));
}

// === Option styling === //

// Show the mobile icon on hover on added module options
function dbmo_show_mobile_icon_on_hover() { ?>
    <style>
        .et_pb_module_settings[data-module_type="et_pb_slider"] .et-pb-option:hover [id^=et_pb_db_]~.et-pb-mobile-settings-toggle {
            padding: 0 8px !important;
            z-index: 1 !important;
            opacity: 1 !important;
        }

        .et_pb_module_settings[data-module_type="et_pb_slider"] .et-pb-option:hover [id^=et_pb_db_]~.et-pb-mobile-settings-toggle:after {
            opacity: 0.9;
            -moz-animation: et_pb_slide_in_bottom .6s cubic-bezier(0.77, 0, .175, 1);
            -webkit-animation: et_pb_slide_in_bottom .6s cubic-bezier(0.77, 0, .175, 1);
            -o-animation: et_pb_slide_in_bottom .6s cubic-bezier(0.77, 0, .175, 1);
            animation: et_pb_slide_in_bottom .6s cubic-bezier(0.77, 0, .175, 1);
        }
    </style>
<?php
}
add_action('admin_head', 'dbmo_show_mobile_icon_on_hover');

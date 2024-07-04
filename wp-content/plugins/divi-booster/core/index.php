<?php // Core plugin framework

// === Load the functions and hooks ===
include(dirname(__FILE__) . '/divi/divi.php');
include(dirname(__FILE__) . '/functions.php');
include(dirname(__FILE__) . '/classes/classes.php');
include(dirname(__FILE__) . '/hooks/index.php');
include(dirname(__FILE__) . '/helpers/helpers.php');

// Initialize assets
DBDBETModulesFont::create()->load_full_font();

// === Load plugin compatibity / deprecation files ===
include(dirname(__FILE__) . '/compat/compat.php');
include(dirname(__FILE__) . '/deprecated/deprecated-icons/deprecated-icons.php');

// === Load fixes main files, where available ===
include_once(dirname(__FILE__) . '/fixes/126-customizer-social-icons/126-customizer-social-icons.php');
include_once(dirname(__FILE__) . '/fixes/133-header-title-and-tagline/133-header-title-and-tagline.php');


// === Load the core plugin class ===
include(dirname(__FILE__) . '/wtfplugin_1_0.class.php');

// === Load the update checker ===
require dirname(__FILE__) . '/plugin-update-checker/plugin-update-checker.php';

// === Load the plugins page code ===
include(dirname(__FILE__) . '/admin/plugins/plugins.php');

// === Load the module options ===
include(dirname(__FILE__) . '/module-options.php'); // Load the module options

// === Load the icon sets ===
include(dirname(__FILE__) . '/icons/socicon.php');
include(dirname(__FILE__) . '/icons/divi-booster-icons/divi-booster-icons.php');
include(dirname(__FILE__) . '/divi5/divi5.php');

// === Load additional features ===
include(dirname(__FILE__) . '/features/features.php');
include(dirname(__FILE__) . '/plugins/plugins.php');

// === Automatic updates ===
function booster_enable_updates($file) {
    try {
        //if (version_compare(PHP_VERSION, '5.3.0', '>=')) {
        $myUpdateChecker = \DiviBooster\Puc_v4_Factory::buildUpdateChecker(
            DBDBUpdateServer::create()->updatesUrl(),
            $file, //Full path to the main plugin file or functions.php.
            dbdb_slug()
        );
        //}
    } catch (Exception $e) {
    }
}

// === Error handling ===

function booster_error($msg, $details = "") {
    update_option(BOOSTER_OPTION_LAST_ERROR, $msg);
    update_option(BOOSTER_OPTION_LAST_ERROR_DESC, $details);
    return false;
}

// === Add body classes ===

add_filter('body_class', 'dbdb_add_theme_version_body_classes');

function dbdb_add_theme_version_body_classes($classes) {
    if (dbdb_is_divi_2_4_up()) {
        $classes[] = 'dbdb_divi_2_4_up';
    }
    return $classes;
}

// === Minification ===

// JavaScript minification
function booster_minify_js($js) {
    if (!class_exists('JSMin')) {
        include_once(dirname(__FILE__) . '/libs/JSMin.php');
    }
    try {
        return JSMin::minify($js);
    } catch (Exception $e) {
        return $js; // Something went wrong, so fall back to unminified js
    }
}

// CSS minification - modified from: https://github.com/GaryJones/Simple-PHP-CSS-Minification/blob/master/minify.php
function booster_minify_css($css) {
    // Normalize whitespace
    $css = preg_replace('/\s+/', ' ', $css);
    // Remove spaces before and after comment
    $css = preg_replace('/(\s+)(\/\*(.*?)\*\/)(\s+)/', '$2', $css);
    // Remove comment blocks, everything between /* and */, unless preserved with /*! ... */ or /** ... */
    $css = preg_replace('~/\*(?![\!|\*])(.*?)\*/~', '', $css);
    // Remove ; before }
    $css = preg_replace('/;(?=\s*})/', '', $css);
    // Remove space after , : ; { } */ >
    $css = preg_replace('/(,|:|;|\{|}|\*\/|>) /', '$1', $css);
    // Remove space before , ; { } ) >
    $css = preg_replace('/ (,|;|\{|}|\)|>)/', '$1', $css);
    // Strips leading 0 on decimal values (converts 0.5px into .5px)
    $css = preg_replace('/(:| )0\.([0-9]+)(%|em|ex|px|in|cm|mm|pt|pc)/i', '${1}.${2}${3}', $css);
    // Strips units if value is 0 (converts 0px to 0)
    $css = preg_replace('/(:| )(\.?)0(%|em|ex|px|in|cm|mm|pt|pc)/i', '${1}0', $css);
    // Converts all zeros value into short-hand
    $css = preg_replace('/0 0 0 0/', '0', $css);
    // Shorten 6-character hex color codes to 3-character where possible
    $css = preg_replace('/#([a-f0-9])\\1([a-f0-9])\\2([a-f0-9])\\3/i', '#\1\2\3', $css);
    return trim($css);
}

// Add helper classes to buttons
function dbdb_add_button_classes($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props)) return $output;
    $props = $module->props;
    if (!isset($props['custom_button']) || $props['custom_button'] !== 'on') {
        return $output;
    }
    if (!empty($props['button_icon_placement']) && $props['button_icon_placement'] === 'right') {
        $output = preg_replace('/^(<div\b[^>]*\bclass="[^"]*)/', '$1 dbdb-icon-on-right', $output);
    } else {
        $output = preg_replace('/^(<div\b[^>]*\bclass="[^"]*)/', '$1 dbdb-icon-on-left', $output);
    }
    if (empty($props['button_on_hover']) || $props['button_on_hover'] === 'on') {
        $output = preg_replace('/^(<div\b[^>]*\bclass="[^"]*)/', '$1 dbdb-icon-on-hover', $output);
    } elseif (isset($props['button_on_hover']) && $props['button_on_hover'] === 'off') {
        $output = preg_replace('/^(<div\b[^>]*\bclass="[^"]*)/', '$1 dbdb-icon-on-hover-off', $output);
    }
    // Add class if custom_padding set
    if (!empty($props['custom_padding'])) {
        $output = preg_replace('/^(<div\b[^>]*\bclass="[^"]*)/', '$1 dbdb-has-custom-padding', $output);
    }

    return $output;
}
add_filter('et_module_shortcode_output', 'dbdb_add_button_classes', 10, 3);

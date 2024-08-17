<?php

namespace DiviBooster\DiviBooster;

include_once(dirname(__FILE__) . '/dbdb-posttitle-tags/dbdb-posttitle-tags.php');
include_once(dirname(__FILE__) . '/socialmediafollownetworks/socialmediafollownetworks.php');
include_once(dirname(__FILE__) . '/contactFormEmailBlacklist/dbdb-contactform-emailblacklist.php');

if (version_compare(phpversion(), '5.3', '>=')) {
    include_once(dirname(__FILE__) . '/dbdb-blogmodule-tags/dbdb-blogmodule-tags.php');
    include_once(dirname(__FILE__) . '/blog-module-author-filter/blog-module-author-filter.php');
    include_once(dirname(__FILE__) . '/login-module-custom-redirect-url/login-module-custom-redirect-url.php');
    include_once(dirname(__FILE__) . '/slider-module-random-order/slider-module-random-order.php');
    include_once(dirname(__FILE__) . '/email-option-button-animation/email-option-button-animation.php');
    include_once(dirname(__FILE__) . '/contact-form-confirmation-email/contact-form-confirmation-email.php');
    include_once(dirname(__FILE__) . '/slider-module-link-slide-title/slider-module-link-slide-title.php');
}

// === Add a filter to allow custom classes to be added to modules ===

if (function_exists('add_filter')) {
    \add_filter('et_module_shortcode_output', __NAMESPACE__ . '\\add_module_class_filter', 10, 3);
}

function add_module_class_filter($output, $render_slug, $module) {
    if (!is_string($output)) {
        return $output;
    }
    if (!isset($module->props) || !is_array($module->props)) {
        return $output;
    }
    $props = $module->props;

    // Add a filter for the classes
    $output = preg_replace_callback(
        '/class="([^"]*?et_pb_module ' . $render_slug . '(_\d+)?[^"]*?)"/',
        function ($matches) use ($props, $render_slug) {
            $classes = explode(' ', $matches[1]);
            $classes = \apply_filters("divi_booster/{$render_slug}/classes", $classes, $props);
            $classes = array_unique($classes);
            return 'class="' . implode(' ', $classes) . '"';
        },
        $output
    );

    return $output;
}

<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

// Add body classes indicating device type
function wtfdivi011_add_body_classes($classes) {
    $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';

    if (empty($user_agent)) {
        return $classes;
    }

    if (strpos($user_agent, 'iPad') !== false || (strpos($user_agent, 'Android') !== false && strpos($user_agent, 'Mobile') === false)) {
        $classes[] = 'tablet';
    } elseif (wp_is_mobile()) {
        $classes[] = 'mobile';
    } else {
        $classes[] = 'desktop';
    }

    if (preg_match('/iPhone|iPad/i', $user_agent)) {
        $classes[] = 'ios';
    }

    if (strpos($user_agent, 'Android') !== false) {
        $classes[] = 'android';
    }

    return $classes;
}

add_filter('body_class', 'wtfdivi011_add_body_classes');

function db011_user_css($plugin) {
    list($name, $option) = $plugin->get_setting_bases(__FILE__);

    include_once(dirname(__FILE__) . '/media_queries.php');
    $wtfdivi011_media_queries = wtfdivi011_media_queries();

    if (isset($option['customcss'])) {

        $option = DBDBCssManagerOption::fromRawOption($option)->toArray();
        // Output each enabled CSS block	
        foreach ($option['customcss']['enabled'] as $k => $enabled) {

            if ($k == 0) {
                continue;
            } // ignore template block

            if ($enabled) {

                // === build the media query === //
                $media_query = ($option['customcss']['mediaqueries'][$k] == 'all') ? '' : $wtfdivi011_media_queries[$option['customcss']['mediaqueries'][$k]]['css'];

                // === build the selector === //

                // apply the body classes
                $selector = 'body';
                foreach (array('user', 'device', 'browser', 'pagetype', 'elegantthemes') as $selection) {

                    // Do nothing if selection not set for this CSS box
                    if (!isset($option['customcss'][$selection][$k])) {
                        continue;
                    }

                    // Set the value of the current selection
                    $selection_val = $option['customcss'][$selection][$k];

                    // Don't add to selector if selection is "all"
                    if ($option['customcss'][$selection][$k] === 'all') {
                        continue;
                    }

                    // Add selector for non-logged in users
                    if ($selection === 'user' && $selection_val === 'not-logged-in') {
                        $selector .= ':not(.logged-in)';
                    }
                    // Add default selector format 
                    else {
                        $selector .= ".{$selection_val}";
                    }
                }

                // === build the CSS === //
                $css = trim($option['customcss']['css'][$k]);
                $css = booster_minify_css($css);
                $css_rules = array_filter(explode("}", $css)); // break into individual css rules

                foreach ($css_rules as $id => $rule) {

                    // get selectors for the rule
                    list($rule_selectors, $rule_css) = explode('{', $rule); // get the selector list
                    $rule_selectors = explode(',', $rule_selectors); // split them up

                    // add the base selector to each selector
                    foreach ($rule_selectors as $j => $rule_selector) {
                        $rule_selectors[$j] = $selector . ' ' . $rule_selector;
                    }

                    $final_selectors = implode(",\n", $rule_selectors);

                    $css_rules[$id] = $final_selectors . ' { ' . trim($rule_css) . ' }'; // add base selector to first selector
                }

                // === output the CSS === //
                $css = implode("\n", $css_rules);
                echo (empty($media_query)) ? $css : "$media_query {\n$css\n}";
            }
        }
    }
}
add_action('wp_head.css', 'db011_user_css');

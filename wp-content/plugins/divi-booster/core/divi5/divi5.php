<?php // Compatibility fixes for Divi 5

namespace DiviBooster\DiviBooster\Divi5;

/*
add_action('et_builder_ready', __NAMESPACE__.'\fix_undefined_index_in_criticalcss');

function fix_undefined_index_in_criticalcss() {
    add_filter('et_builder_critical_css_enabled', '__return_true', 11);
}
*/
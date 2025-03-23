<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access


function db086_remove_current_menu_classes($classes) {
    $classes = array_diff($classes, array('current-menu-item', 'current-menu-ancestor'));
    return $classes;
}

// Add filter at 'et_head_meta' hook
function db086_add_menu_class_filter() {
    add_filter('nav_menu_css_class', 'db086_remove_current_menu_classes', 100, 1);
}
add_action('et_head_meta', 'db086_add_menu_class_filter');

// Remove filter at 'et_before_main_content' hook
function db086_remove_menu_class_filter() {
    remove_filter('nav_menu_css_class', 'db086_remove_current_menu_classes', 100, 1);
}
add_action('et_before_main_content', 'db086_remove_menu_class_filter');

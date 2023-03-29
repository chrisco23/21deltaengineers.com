<?php 

add_filter('dbdb_custom_icon_classes', 'dbdb_compat_supreme_modules_for_divi_add_icon_classes');

function dbdb_compat_supreme_modules_for_divi_add_icon_classes($classes) {
    if (is_array($classes)) {
        $classes[] = 'dsm_icon_list_icon';
    }
    return $classes;
};
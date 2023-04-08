<?php 

add_filter('dbdb_custom_icon_classes', 'dbdb_compat_supreme_modules_for_divi_add_icon_classes');

function dbdb_compat_supreme_modules_for_divi_add_icon_classes($classes) {
    if (is_array($classes)) {
        $classes[] = 'dsm_icon';
        $classes[] = 'dsm_icon_list_icon'; // Icon list module
        $classes[] = 'dsm_content_icon';
        $classes[] = 'dsm_faq-item-open_icon';
        $classes[] = 'dsm_faq-item-close_icon';
        $classes[] = 'dsm_open_icon'; // FAQ main module
        $classes[] = 'dsm_close_icon'; // FAQ main module
    }
    return $classes;
};

add_filter('dbdb_custom_inline_icon_classes', 'dbdb_compat_supreme_modules_for_divi_add_inline_icon_classes');

function dbdb_compat_supreme_modules_for_divi_add_inline_icon_classes($classes) {
    if (is_array($classes)) {
        $classes[] = 'swiper-button-prev'; // Card carousel prev icon
        $classes[] = 'swiper-button-next'; // Card carousel next icon
    }
    return $classes;
};
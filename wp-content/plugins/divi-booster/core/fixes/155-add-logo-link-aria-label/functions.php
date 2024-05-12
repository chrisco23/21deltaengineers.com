<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db155_add_aria_label_to_logo_container($logo_container) {
    $label = dbdb_option('155-add-logo-link-aria-label', 'arialabel', 'Home Page');
    $home_url = esc_url(home_url('/'));
    $labelled_logo_container = str_replace(
        '<a href="'.$home_url.'">',
        '<a href="'.$home_url.'" aria-label="'.esc_attr($label).'">',
        $logo_container
    );
    return $labelled_logo_container;
}
add_filter('et_html_logo_container', 'db155_add_aria_label_to_logo_container');
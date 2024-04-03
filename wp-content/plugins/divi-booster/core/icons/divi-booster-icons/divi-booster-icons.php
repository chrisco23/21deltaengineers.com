<?php

namespace DiviBooster\DiviBooster\Icons\DiviBoosterIcons;

add_filter('dbdb_font_icon_names', __NAMESPACE__ . '\\icon_names');
add_filter('dbdb_font_icon_data', __NAMESPACE__ . '\\icon_data');
add_filter('dbdb_font_icon_set', __NAMESPACE__ . '\\icon_set', 10, 2);
add_action('dbdb_font_icons_enqueue_fonts', __NAMESPACE__ . '\\enqueue_fonts');
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\register_css');

function icon_set($set, $id) {
    $icons = array_keys(icon_data());
    if (in_array($id, $icons)) {
        return 'divi-booster-icons';
    }
    return $set;
}

function icon_names($names) {
    $new_names = wp_list_pluck(icon_data(), 'name');
    return $names + $new_names;
}

function icon_data($icons = array()) {
    return $icons + array(
        'linktree' => array(
            'name' => 'Linktree',
            'color' => '#39e09b',
            'code' => '\e900'
        ),
        'eventbrite' => array(
            'name' => 'Eventbrite',
            'color' => '#eb572c',
            'code' => '\e901'
        ),
        'kofi' => array(
            'name' => 'Ko-fi',
            'color' => '#FF5E5B',
            'code' => '\e902'
        ),
        'komoot' => array(
            'name' => 'Komoot',
            'color' => 'rgb(141, 207, 86)',
            'code' => '\e903'
        ),
        'michelin-guide' => array(
            'name' => 'Michelin Guide',
            'color' => '#EE1C25',
            'code' => '\e904'
        ),
        'openstreetmap' => array(
            'name' => 'OpenStreetMap',
            'color' => '#003b6f',
            'code' => '\e905'
        ),
        'what3words' => array(
            'name' => 'What3words',
            'color' => '#E11F26',
            'code' => '\e906'
        ),
        'x' => array(
            'name' => 'X',
            'color' => 'rgb(15, 20, 25)',
            'code' => '\e908'
        ),
        'threads' => array(
            'name' => 'Threads',
            'color' => '#000000',
            'code' => '\e907'
        ),
        'substack' => array(
            'name' => 'Substack',
            'color' => '#FFA500',
            'code' => '\e909'
        ),
        'bluesky' => array(
            'name' => 'Bluesky',
            'color' => '#295ef6',
            'code' => '\e90a'
        ),
        'apple-music' => array(
            'name' => 'Apple Music',
            'color' => 'rgb(251, 77, 101)',
            'code' => '\e90b'
        ),
        'amazon-music' => array(
            'name' => 'Amazon Music',
            'color' => '#0dbff5',
            'code' => '\e90c'
        ),
        'youtube-music' => array(
            'name' => 'YouTube Music',
            'color' => 'rgb(247, 0, 0)',
            'code' => '\e90d'
        ),
        'blog' => array(
            'name' => 'Blog',
            'color' => 'rgb(88, 168, 222)',
            'code' => '\e90e'
        ),
        'rumble' => array(
            'name' => 'Rumble',
            'color' => '#85c742',
            'code' => '\e90f'
        ),
        'truth-social' => array(
            'name' => 'Truth Social',
            'color' => 'rgb(83, 70, 239)',
            'code' => '\e910'
        ),
        'gab' => array(
            'name' => 'Gab',
            'color' => '#21cf7a',
            'code' => '\e911'
        ),
    );
}

function register_css() {
    wp_register_style('dbdb-icons-divi-booster-icons', plugin_dir_url(__FILE__) . 'icomoon/style.min.css', array(), BOOSTER_VERSION);
}

function enqueue_fonts() {
    wp_enqueue_style('dbdb-icons-divi-booster-icons');
}

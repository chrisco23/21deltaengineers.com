<?php

if (function_exists('add_filter')) {
    add_filter('dbdbsmsn_networks', 'dbdbsmsn_add_phone_icon');
    add_filter('dbdbsmsn_networks', 'dbdbsmsn_add_podcast_icon');
    add_filter('dbdbsmsn_networks', 'dbdbsmsn_add_website_icon');
}

if (!function_exists('dbdbsmsn_add_phone_icon')) {
	function dbdbsmsn_add_phone_icon($networks) {
        $networks['dbdb-phone'] = array (
            'name' => 'Phone',
            'code' => '\\e090',
            'color' => '#58a9de',
            'font-family' => 'ETModules'
        );
		return $networks;
	}
}

if (!function_exists('dbdbsmsn_add_podcast_icon')) {
	function dbdbsmsn_add_podcast_icon($networks) {
        $networks['dbdb-podcast'] = array (
            'name' => 'Podcast',
            'code' => '\\e01b',
            'color' => '#58a9de',
            'font-family' => 'ETModules'
        );
		return $networks;
	}
}


if (!function_exists('dbdbsmsn_add_website_icon')) {
	function dbdbsmsn_add_website_icon($networks) {
        $networks['dbdb-website'] = array (
            'name' => 'Website',
            'code' => '\\e0e3',
            'color' => '#58a9de',
            'font-family' => 'ETModules'
        );
		return $networks;
	}
}

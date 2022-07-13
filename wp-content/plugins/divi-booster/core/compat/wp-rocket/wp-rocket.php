<?php

add_filter( 'rocket_delay_js_exclusions', 'dbdb_wp_rocket_delay_js_exclusions' );

function dbdb_wp_rocket_delay_js_exclusions($excluded) {
    if (!is_array($excluded)) { return $excluded; }

    // Exclude jquery as required by, e.g. accordion initial state js
    $excluded[] = '/jquery-?[0-9.](.*)(.min|.slim|.slim.min)?.js';
    $excluded[] = '/jquery-migrate(.min)?.js';

    // Don't delay accordion initial state js as it has visual impact
    $excluded[] = 'data-name="dbdb-accordion-initial-state"'; 

    $excluded[] = 'divi-custom-script-js';

    // Don't delay custom icon code as has visual impact
    $excluded[] = 'data-name="dbdb-update-custom-icons"';
    $excluded[] = 'data-name="dbdb-head-js"';

    return $excluded;
}

add_filter( 'rocket_exclude_defer_js', 'dbdb_wp_rocket_defer_js_exclusions');

function dbdb_wp_rocket_defer_js_exclusions($excluded) {
    if (!is_array($excluded)) { return $excluded; }
    // Exclude jquery as required by, e.g. custom icon code
    $excluded[] = '/jquery-?[0-9.](.*)(.min|.slim|.slim.min)?.js';
    $excluded[] = '/jquery-migrate(.min)?.js';

    $excluded[] = 'divi-custom-script-js';

	$excluded[] = '/includes/builder/feature/dynamic-assets/assets/js/magnific-popup\.js';
    
	return $excluded;
}

add_filter( 'rocket_defer_inline_exclusions', 'dbdb_wp_rocket_defer_inline_js_exclusions');

function dbdb_wp_rocket_defer_inline_js_exclusions($excluded) {
    if (is_null($excluded)) { 
        $excluded = array();
    }
    if (!is_array($excluded)) { return $excluded; }

    // Don't delay custom icon code as has visual impact
    $excluded[] = 'db014_update_icon';

	return $excluded;
}


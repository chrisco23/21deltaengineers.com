<?php // Compatibility with https://wordpress.org/plugins/the-events-calendar/

// Disable Enable Divi Builder by default on new pages / posts
add_filter('dbdb_enable_divi_builder_by_default_supported_post_types', 'dbdb_compat_events_calendar_disableDiviBuilderByDefault');

function dbdb_compat_events_calendar_disableDiviBuilderByDefault($post_types) {
    if (is_array($post_types)) {
        $post_types = array_diff($post_types, array('tribe_events'));
    }
    return $post_types;
}
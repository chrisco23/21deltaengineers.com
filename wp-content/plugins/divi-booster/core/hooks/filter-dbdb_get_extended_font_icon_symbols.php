<?php 

if (!function_exists('et_pb_get_extended_font_icon_symbols')) {
	// Override the built-in Divi function to support filtering
	function et_pb_get_extended_font_icon_symbols() {
		$full_icons_list_path = get_template_directory() . '/includes/builder/feature/icon-manager/full_icons_list.json';
		if ( file_exists( $full_icons_list_path ) ) {
			$icons_data = json_decode( file_get_contents( $full_icons_list_path ), true );
			if ( JSON_ERROR_NONE === json_last_error() ) {
				return apply_filters('dbdb_get_extended_font_icon_symbols', $icons_data);
			}
		}
        if (function_exists('et_wrong')) {
        	et_wrong( 'Problem with loading the icon data on this path: ' . $full_icons_list_path );
        }
	}
}
<?php 

// Filter global assets list to enable loading of full divi icon set 

add_filter('et_global_assets_list', 'dbdb_add_full_divi_icon_set_to_assets');

function dbdb_add_full_divi_icon_set_to_assets($assets) {
    if (!function_exists('et_get_dynamic_assets_path') || !is_array($assets)) {
        return $assets;
    } 
    if (apply_filters('dbdb_etmodules_font_require_social_icons', false)) {
        if (isset($assets['et_icons_base'])) {
            $assets_prefix = et_get_dynamic_assets_path();
            $assets['et_icons_social'] = array(
				'css' => "{$assets_prefix}/css/icons_base_social.css",
			);
            unset($assets['et_icons_base']);
        }
    }
    return $assets;
}
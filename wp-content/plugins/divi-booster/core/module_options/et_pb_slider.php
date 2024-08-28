<?php
add_filter('dbmo_et_pb_slider_whitelisted_fields', 'dbmo_et_pb_slider_register_fields');
//add_filter('dbmo_et_pb_slider_fields', 'dbmo_et_pb_slider_add_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_slider', 'dbmo_et_pb_slider_add_fields');


add_filter('dbdb_et_pb_module_shortcode_attributes', 'dbmo_et_pb_slider_migrate_db_height_to_min_height', 10, 3); 

function dbmo_et_pb_slider_migrate_db_height_to_min_height($props, $attrs, $render_slug) {
    $slider_slugs = array(
        'et_pb_slider',
        'et_pb_fullwidth_slider',
        'et_pb_post_slider',
        'et_pb_fullwidth_post_slider'
    );
    if (in_array($render_slug, $slider_slugs) && is_array($props)) {

        // Exit if no height setting
        if (!isset($attrs['db_height'])) {
            return $props;
        }

        // Exit if height setting already migrated
        if (isset($props['db_height']) && $props['db_height'] === 'migrated') {
            return $props;
        }

        foreach(array('', '_tablet', '_phone') as $_suffix) {
            
            $height = empty($props["height{$_suffix}"])?'auto':$props["height{$_suffix}"];
            $max_height = empty($props["max_height{$_suffix}"])?'none':$props["max_height{$_suffix}"];
            $min_height = empty($props["min_height{$_suffix}"])?'auto':$props["min_height{$_suffix}"];
            $db_height = empty($props["db_height{$_suffix}"])?'500px':$props["db_height{$_suffix}"];

            // Update min height setting
            if ($height === 'auto') {
                if (empty($min_height) || $min_height === 'auto' || strpos($min_height, 'px') !== false) {
                    $new_min_height = intval($db_height);
    
                    // Ensure min height is max of db_height and min_height
                    if (!empty($min_height)) {
                        $new_min_height = max($new_min_height, intval($min_height));
                    }
                    // Ensure min height is no greater than max_height
                    if ($max_height !== 'none' && strpos($max_height, 'px') !== false && intval($max_height) < $new_min_height) {
                        $new_min_height = intval($max_height);
                    }
    
                    $props["min_height{$_suffix}"] = $new_min_height.'px';
                } 
            }
        }

        // Migrate last edited
        if (empty($props['height_last_edited']) && !empty($props['db_height_last_edited'])) {
            $props['min_height_last_edited'] = $props['db_height_last_edited'];
        }   
        
        $props["db_height"] = 'migrated';
    }
    return $props;
}


function dbmo_et_pb_slider_register_fields($fields) {
	$fields[] = 'db_height';
	return $fields;
}

function dbmo_et_pb_slider_add_fields($fields) {
	
	// Add slider height option
	$fields['db_height'] = array(
		'label' => 'Height',
        'type' => 'hidden',
		'option_category' => 'layout',
		'description' => 'Set a minimum height for the slider. '.divibooster_module_options_credit(),
		'mobile_options'  => true,
		'tab_slug'        => 'advanced',
		'default'             => '500px'
	);	
	
	// Put height setting into appropriate subheading
	if (!empty($fields['max_width']['toggle_slug'])) { // Sizing subheading
		$fields['db_height']['toggle_slug'] = $fields['max_width']['toggle_slug'];
	} else { // Layout subheading, if it exists
		$fields['db_height']['toggle_slug'] = 'layout';
	}

	return $fields;
}
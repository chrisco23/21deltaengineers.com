<?php

add_filter('dbmo_et_pb_slide_whitelisted_fields', 'db_pb_slide_button_2_register_fields');
//add_filter('dbmo_et_pb_slide_fields', 'db_pb_slide_button_2_add_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_slide', 'db_pb_slide_button_2_add_fields');
add_filter('db_pb_slide_args_button_link_2', 'db_pb_slide_canonicalize_url');
add_filter('db_pb_slide_filter_content_classes', 'db_pb_slide_add_second_more_button_class', 10, 2);
add_filter('db_pb_slide_filter_content_args', 'db_pb_slide_button_2_content_args');
add_filter('db_pb_slide_filter_content_content', 'db_pb_slide_button_2_content_content', 10, 2);

function db_pb_slide_button_2_content_args($args) {
	$args = wp_parse_args($args, array(
		'button_text_2' => '',
		'button_link_2' => '#'
	));
	$args['button_text_2'] = apply_filters('db_pb_slide_args_button_text_2', $args['button_text_2']);
	$args['button_link_2'] = apply_filters('db_pb_slide_args_button_link_2', $args['button_link_2']);
	return $args;
}

function db_pb_slide_button_2_content_content($content, $args) {
	
	$button_2_text = empty($args['button_text_2'])?'':$args['button_text_2'];
	$button_2_url = empty($args['button_link_2'])?'':$args['button_link_2'];
    $button_2_text = str_replace('$', '&#36;', $button_2_text);
	
	if (!empty($args['button_text_2'])) {
		
		// Set button CSS
		dbdb_set_module_style('et_pb_slide', array(
			'selector'    => '%%order_class%%.db_second_more_button .et_pb_more_button',
			'declaration' => 'margin-left: 15px; margin-right: 15px;'
		));
        // Don't apply outer margin when slide has image as buttons should align to the edge of the description area (desktop only)
		dbdb_set_module_style('et_pb_slide', array(
			'selector'    => '%%order_class%%.db_second_more_button.et_pb_slide_with_image .et_pb_more_button:first-child',
			'declaration' => 'margin-left: 0px;',
            'media_query' => '@media only screen and ( min-width: 981px )'
		));
		dbdb_set_module_style('et_pb_slide', array(
			'selector'    => '%%order_class%%.db_second_more_button.et_pb_slide_with_image .et_pb_more_button:last-child',
			'declaration' => 'margin-right: 0px;',
            'media_query' => '@media only screen and ( min-width: 981px )'
		));

		// Add button - old Divi markup
		$content = preg_replace(
			'#(<a href=".*?" class="(et_pb_more_button[^"]+et_pb_button[^"]*)"([^>]*)>.*?</a>)#', 
			'\\1<a href="'.esc_attr($button_2_url).'" class="\\2 db_pb_button_2"\\3>'.esc_html($button_2_text).'</a>', 
			$content); 
		// Add button - new Divi markup	
		$content = preg_replace(
			'#(<a class="(et_pb_button[^"]+et_pb_more_button[^"]*)" href=".*?"([^>]*)>.*?</a>)#', 
			'\\1<a class="\\2 db_pb_button_2" href="'.esc_attr($button_2_url).'"\\3>'.esc_html($button_2_text).'</a>',
			$content); 

        // Set the button icon
        if (isset($args['custom_db_slide_button_2']) && $args['custom_db_slide_button_2'] === 'on') {
            if (isset($args['db_slide_button_2_use_icon']) && $args['db_slide_button_2_use_icon'] === 'on') {
                if (function_exists('et_pb_process_font_icon')) {
                    $button_2_icon = et_pb_process_font_icon($args['db_slide_button_2_icon']);
                    // If icon set on button 2, replace data icon attribute in button 2 with icon set in props
                    if (preg_match('#<a[^>]+class="[^"]*db_pb_button_2[^"]*"[^>]+data-icon="([^"]+)"[^>]*>#', $content, $matches)) {
                        $content = str_replace($matches[0], str_replace($matches[1], $button_2_icon, $matches[0]), $content);
                    } else { // Handle case that data-icon attribute not set in button 1
                        $content = preg_replace('#(<a[^>]+class="[^"]*db_pb_button_2[^"]*"[^>]+)>([^<]*)</a>#', '\\1 data-icon="'.$button_2_icon.'">\\2</a>', $content);
                    }
                }
            }
        }
	}
	
	return $content;
}


function db_pb_slide_button_2_register_fields($fields) {
	$fields[] = 'button_text_2';
	$fields[] = 'button_link_2';
	return $fields;
}

function db_pb_slide_button_2_add_fields($fields) {
	
	$new_fields = array(); 
	
	foreach($fields as $k=>$v) {
		$new_fields[$k] = $v;
		
		// Add second button text option
		if ($k === 'button_text') { 
			$new_fields['button_text_2'] = apply_filters(
				'db_pb_slide_field_button_text_2', 
				array(
					'label' => 'Button #2 Text',
					'type' => 'text',
					'option_category' => 'basic_option',
					'description' => 'Define the text for the second slide button. '.divibooster_module_options_credit(),
					'default' => '',
					'toggle_slug'=>'main_content'
				)
			);
		}
		
		// Add second button link option
		if ($k === 'button_link') {
			$new_fields['button_link_2'] = apply_filters(
				'db_pb_slide_field_button_link_2', 
				array(
					'label' => dbdb_is_divi('3.16', '>=')?'Button #2 Link URL':'Button #2 URL',
					'type' => 'text',
					'option_category' => 'basic_option',
					'description' => 'Input a destination URL for the second slide button. '.divibooster_module_options_credit(),
					'default' => '#',
					'toggle_slug'=>dbdb_is_divi('3.16', '>=')?'link_options':'link',
				)
			);
		}
		
	}
	
	return $new_fields;
}

function db_pb_slide_add_second_more_button_class($classes, $args) {
	if (!empty($args['button_text_2'])) {
		$classes[] = 'db_second_more_button';
	}
	return $classes;
}

// === Enable VB Preview ===

add_action('db_vb_jquery_ready', 'db_pb_slide_button_2_vb_jquery');

function db_pb_slide_button_2_vb_jquery() { ?>

	jQuery(window).on('dbdb_slide_updated', function(event, target) {
		var slider = jQuery(target).closest('.et_pb_slider').get(0);
		var index = jQuery(target).closest('.et_pb_slider').find('.et_pb_slide').index(target);
        var props = slideModuleProps(slider, index);
		add_second_button_to_slide(target, props);
	});

	function slideModuleProps(slider, slide_num) {
        for (var property in slider) {
            if (property.startsWith("__reactInternalInstance$")) {
				try {
					return slider[property].memoizedProps.children[1].props.children[slide_num].props.attrs;
				} catch(e) {
					return {};
				}
            }
        }
        return {};
    }
	
	function add_second_button_to_slide(target, props) {
		if (props && props.button_text_2) {
			jQuery(target).addClass('db_second_more_button');
			if (jQuery(target).find('.db_pb_button_2').length === 0) {
				jQuery(target).find('.et_pb_button_wrapper').append('<a class="et_pb_button et_pb_more_button db_pb_button_2" href="#"></a>');
			}
			
			jQuery(target).find('.db_pb_button_2').text(props.button_text_2);
			if (props.button_link_2) { 
				jQuery(target).find('.db_pb_button_2').attr('href', props.button_link_2);
			}
		} else {
			jQuery(target).removeClass('db_second_more_button');
			jQuery(target).find('.db_pb_button_2').remove();
		}
	}
	
    setTimeout(
        function(){
            if (typeof MutationObserver === 'function') {
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        var target = (mutation||{}).target;
                        var classList = (target||{}).classList;
                        if (classList && classList.contains('et_pb_slide')) {
							$(window).trigger('dbdb_slide_updated', [target]);
                        }
                    });
                });
                observer.observe(
                    document.getElementById('et-fb-app'), 
                    { 
                        attributes: true, 
                        attributeFilter: ["class"],
                        subtree: true
                    }
                );
            }
        },
        200
    );


    <?php
}

add_action('db_vb_css', 'db_pb_slide_button_2_vb_css');

function db_pb_slide_button_2_vb_css() { ?>
    .db_second_more_button .et_pb_more_button {
        margin-left: 15px; margin-right: 15px;
    }
    <?php
}

// === End Enable VB Preview ===

add_filter('et_pb_slide_advanced_fields', 'db_pb_slide_button_2_styles', 10, 3);
add_filter('et_pb_slider_advanced_fields', 'db_pb_slider_button_2_styles', 10, 3);

function db_pb_slide_button_2_styles($fields, $slug, $main_css_element) {
    if (!is_array($fields)) return $fields;
    if (!isset($fields['button']) || !is_array($fields['button'])) {
        $fields['button'] = array();
    }
    $fields['button']['db_slide_button_2'] = array(
        'css' => array(
            'main' => "div.et_pb_slides div.et_pb_slide{$main_css_element} a.et_pb_more_button.db_pb_button_2",
            'important' => 'all'
        ),
        'label' => esc_html__( 'Button 2', 'divi-booster' ),
        'use_alignment' => false
    );
    return $fields;
}

function db_pb_slider_button_2_styles($fields, $slug, $main_css_element) {
    if (!is_array($fields)) return $fields;
    if (!isset($fields['button']) || !is_array($fields['button'])) {
        $fields['button'] = array();
    }
    $fields['button']['db_slide_button_2'] = array(
        'css' => array(
            'main' => "{$main_css_element} a.et_pb_more_button.db_pb_button_2",
            'important' => 'all'
        ),
        'label' => esc_html__( 'Button 2', 'divi-booster' ),
        'use_alignment' => false
    );
    return $fields;
}
<?php

add_filter('dbmo_et_pb_menu_whitelisted_fields', 'dbmo_et_pb_menu_register_title_and_tagline_field');
add_filter('dbmo_et_pb_menu_fields', 'dbmo_et_pb_menu_add_title_and_tagline_field');
add_filter('db_pb_menu_content', 'dbdbMenuModule_add_title_and_tagline_code_to_content', 10, 2);

function dbmo_et_pb_menu_register_title_and_tagline_field($fields) {
	$fields[] = 'db_title';
	$fields[] = 'db_tagline';
	return $fields;
}

function dbmo_et_pb_menu_add_title_and_tagline_field($fields) {
	if (!is_array($fields)) { return $fields; }
	$new_fields = array(
		'db_title' => array(
			'label' => 'Show Site Title',
			'type' => 'yes_no_button',
			'options' => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'yes', 'et_builder' ),
			),
			'option_category' => 'basic_option',
			'description' => 'Display the site title. This option is not previewable, but will show up on the front-end. '.divibooster_module_options_credit(),
			'default' => 'off',
			'tab_slug'          => 'general',
			'toggle_slug'       => 'elements',
		),
		'db_tagline' => array(
			'label' => 'Show Site Tagline',
			'type' => 'yes_no_button',
			'options' => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'yes', 'et_builder' ),
			),
			'option_category' => 'basic_option',
			'description' => 'Display the site tagline. This option is not previewable, but will show up on the front-end. '.divibooster_module_options_credit(),
			'default' => 'off',
			'tab_slug'          => 'general',
			'toggle_slug'       => 'elements',
		)
	);
	return $new_fields + $fields;
}

// Process added options
function dbdbMenuModule_add_title_and_tagline_code_to_content($content, $args) {	
	// Get the class
	$order_class = divibooster_get_order_class_from_content('et_pb_menu', $content);
	
	if (!$order_class) { return $content; }

	$css = '';
    if (isset($args['db_title']) && $args['db_title'] === 'on') {
        $title = get_bloginfo('name');
        $content = str_replace('<div class="et_pb_menu__wrap', '<div class="db_title">'.esc_html($title).'</div><div class="et_pb_menu__wrap', $content);
        $css.= ".{$order_class} .db_title { display: flex; align-items: center; margin-right: 30px }";
    }
    if (isset($args['db_tagline']) && $args['db_tagline'] === 'on') {
        $tagline = get_bloginfo('description');
        $content = str_replace('<div class="et_pb_menu__wrap', '<div class="db_tagline">'.esc_html($tagline).'</div><div class="et_pb_menu__wrap', $content);
        $css.= ".{$order_class} .db_tagline { display: flex; align-items: center; margin-right: 30px }";
    }    
	
	if (!empty($css)) { $content.="<style>$css</style>"; }
	
	return $content;
}


add_filter('et_pb_menu_advanced_fields', 'dbdbMenuModule_add_title_and_tagline_font_options', 10, 3);

function dbdbMenuModule_add_title_and_tagline_font_options($fields, $slug, $main_css_element) {
    if (!is_array($fields)) return $fields;
    if (!isset($fields['fonts']) || !is_array($fields['fonts'])) {
        $fields['fonts'] = array();
    }
    $fields['fonts']['db_title'] = array(
        'css'   => array(
            'main' => "{$main_css_element} .db_title"
        ),
        'label' => esc_html__('Site Title', 'divi-booster'),
    );
    $fields['fonts']['db_tagline'] = array(
        'css'   => array(
            'main' => "{$main_css_element} .db_tagline"
        ),
        'label' => esc_html__('Site Tagline', 'divi-booster'),
    );
    return $fields;
}


add_filter('et_pb_menu_custom_css_fields', 'dbdbMenuModule_add_title_and_tagline_custom_css_fields', 10, 3);

function dbdbMenuModule_add_title_and_tagline_custom_css_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields)) return $fields;
    $fields['db_title'] = array(
        'label'    => esc_html__( 'Site Title', 'divi-booster' ),
        'selector' => '%%order_class%% .db_title'
    );
    $fields['db_tagline'] = array(
        'label'    => esc_html__( 'Site Tagline', 'divi-booster' ),
        'selector' => '%%order_class%% .db_tagline'
    );
    return $fields;
}
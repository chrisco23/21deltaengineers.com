<?php

if (function_exists('add_filter')) {
    add_filter('dbdbsmsn_networks', 'dbdbsmsn_add_custom_image_icon');
    add_filter('dbdbsmsn_add_social_media_follow_fields', 'dbdbsmsn_add_image_icon_fields');
}

if (!function_exists('dbdbsmsn_add_custom_image_icon')) {
	function dbdbsmsn_add_custom_image_icon($networks) {
        $networks['dbdb-custom-image'] = array (
            'name' => 'Image Icon',
            'code' => '\\e005',
            'color' => '#58a9de',
            'font-family' => 'ETModules'
        );
		return $networks;
	}
}

function dbdbsmsn_add_image_icon_fields($fields) {
	$fields['dbdb_image'] = array(
        'label'              => et_builder_i18n( 'Image' ),
        'type'               => 'upload',
        'option_category'    => 'basic_option',
        'upload_button_text' => et_builder_i18n( 'Upload an image' ),
        'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
        'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
        'description'        => esc_html__( 'Upload an image for your social media network icon.', 'et_builder' ),
        'toggle_slug'        => 'main_content',
        'dynamic_content'    => 'image',
        'mobile_options'     => true,
        'hover'              => 'tabs',
        'show_if' => array(
            'social_network' => 'dbdb-custom-image'
        )
    );
    $fields['dbdb_icon_title'] = array(
        'label'           => esc_html__( 'Icon Title', 'et_builder' ),
        'type'            => 'text',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'This defines the HTML title of the icon, used in the tooltip.', 'et_builder' ),
        'toggle_slug'     => 'main_content',
        'dynamic_content' => 'text',
        'show_if' => array(
            'social_network' => 'dbdb-custom-image'
        )
    );
    return $fields;
}

<?php

add_filter('dbmo_et_pb_filterable_portfolio_whitelisted_fields', 'dbmo_et_pb_portfolio_active_tab_register_fields'); 

function dbmo_et_pb_portfolio_active_tab_register_fields($fields) {
	$fields[] = 'db_active_tab';
	return $fields;
}

add_filter('dbmo_et_pb_filterable_portfolio_fields', 'dbmo_et_pb_portfolio_active_tab_fields');

function dbmo_et_pb_portfolio_active_tab_fields($fields) {
	$fields['db_active_tab'] = array(
		'label' => 'Default Category Slug',
		'type' => 'text',
		'option_category' => 'layout',
		'default' => '',
		'description' => 'Enter a category slug to display that category by default in the portfolio (instead of all categories). '.divibooster_module_options_credit(),
		'tab_slug' => 'advanced',
		'toggle_slug' => 'layout'
	);	
	return $fields;
}

add_filter('et_module_shortcode_output', 'dbmo_et_pb_portfolio_active_tab_set_default_portfolio_tab', 10, 3);
function dbmo_et_pb_portfolio_active_tab_set_default_portfolio_tab($output, $render_slug, $module) {


    if (!is_string($output)) { return $output; }
    if ($render_slug !== 'et_pb_filterable_portfolio') { return $output; }
    if (!isset($module->props) || empty($module->props['db_active_tab'])) { return $output; }

    $slug = $module->props['db_active_tab'];

	if ($slug === 'all') { return $output; }
	$output = str_replace(
		'class="active" data-category-slug="all"', 
		'data-category-slug="all"', 
		$output
	);
	$output = str_replace(
		'data-category-slug="'.esc_attr($slug).'"', 
		'data-category-slug="'.esc_attr($slug).'" class="active"', 
		$output
	);
	if (class_exists('ET_Builder_Element') && is_callable(array('ET_Builder_Element', 'set_style'))) {
		\ET_Builder_Element::set_style(
			$render_slug,
			array(
                'selector' => '%%order_class%% .et_pb_portfolio_item:not(.project_category-'.esc_html($slug).')',
                'declaration' => "display: none;",
			)
		);
	}
	return $output;
}
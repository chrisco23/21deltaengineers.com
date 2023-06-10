<?php

add_filter('dbmo_et_pb_filterable_portfolio_whitelisted_fields', 'dbmo_et_pb_portfolio_tab_order_register_fields'); 

function dbmo_et_pb_portfolio_tab_order_register_fields($fields) {
	$fields[] = 'db_tab_order';
	$fields[] = 'db_tab_order_slugs';
    $fields[] = 'db_all_tab_position';
	return $fields;
}

add_filter('dbmo_et_pb_filterable_portfolio_fields', 'dbmo_et_pb_portfolio_add_tab_order_fields');

function dbmo_et_pb_portfolio_add_tab_order_fields($fields) {
	$fields['db_tab_order'] = array(
		'label' => 'Tab Order',
		'type' => 'select',
		'option_category' => 'layout',
		'options' => array(
			'default' => esc_html__('Default', 'et_builder'),
            'random' => esc_html__('Random', 'et_builder'),
            'reverse' => esc_html__('Reverse', 'et_builder'),
            'by_slug' => esc_html__('By Slug', 'et_builder')
		),
		'default' => 'default',
		'description' => 'Adjust the order in which filter tabs are displayed. '.divibooster_module_options_credit(),
		'tab_slug' => 'advanced',
		'toggle_slug' => 'layout'
	);
	$fields['db_tab_order_slugs'] = array(
		'label' => 'Tab Order Slugs',
		'type' => 'text',
		'option_category' => 'layout',
		'default' => '',
		'description' => 'Enter a comma-separated list of category slugs. These will be displayed in order, before any other categories. '.divibooster_module_options_credit(),
		'tab_slug' => 'advanced',
		'toggle_slug' => 'layout',
		'show_if' => array(
			'db_tab_order' => 'by_slug',
		)
	);	
    $fields['db_all_tab_position'] = array(
		'label' => '"All" Tab Position',
		'type' => 'select',
		'option_category' => 'layout',
		'options' => array(
			'first' => esc_html__('First', 'et_builder'),
            'last' => esc_html__('Last', 'et_builder'),
		),
		'default' => 'first',
		'description' => 'Choose whether the "All" tab should be at the start or end of the tabs. '.divibooster_module_options_credit(),
		'tab_slug' => 'advanced',
		'toggle_slug' => 'layout'
	);
	return $fields;
}

add_filter('dbdb_filterable_portfolio_tabs_terms', 'dbdb_sort_filterable_portfolio_tabs', 10, 3);

function dbdb_sort_filterable_portfolio_tabs($terms, $props, $atts) {
    if (!is_array($terms)) return $terms;
    if (!isset($atts['db_tab_order'])) return $terms; 
    if ($atts['db_tab_order'] === 'reverse') {
        $terms = array_reverse($terms);
    }
    elseif ($atts['db_tab_order'] === 'random') {    
        shuffle($terms);
    }
    elseif ($atts['db_tab_order'] === 'by_slug') {
        if (empty($atts['db_tab_order_slugs'])) return $terms;
        $slugs = explode(',', $atts['db_tab_order_slugs']);
        $slugs = array_reverse($slugs);
        foreach($slugs as $slug) {
            $slug = trim($slug);
            foreach($terms as $k=>$term) {
                if (isset($term->slug) && $term->slug === $slug) {
                    $terms = array($k=>$term) + $terms;
                    break;
                }
            }
        }
        $terms = array_values($terms);
    }
    return $terms;
}

// === Option to move "All" tab to end of tabs ===

add_filter('et_module_shortcode_output', 'dbmo_et_pb_portfolio_move_all_filter_last_position', 10, 3);

function dbmo_et_pb_portfolio_move_all_filter_last_position($output, $render_slug, $module) {

    if (!is_string($output)) { return $output; }
    if ($render_slug !== 'et_pb_filterable_portfolio') { return $output; }
    if (!isset($module->props) || empty($module->props['db_all_tab_position']) || $module->props['db_all_tab_position'] !== 'last') { return $output; }

    $pattern = '/(<div class="[^"]*et_pb_portfolio_filters[^"]*"><ul[^>]*>)(.*?)(<\/ul><\/div>)/s';

    if (preg_match($pattern, $output, $matches) && isset($matches[0])) {

        $filters_html = $matches[0]; 
        
        $doc = new DOMDocument();
        $doc->loadHTML($filters_html);
        $filters = $doc->getElementsByTagName('li');

        // Convert the filter DOMNodeList to an array so we can manipulate it
        $filter_array = array();
        foreach ($filters as $filter) {
            $filter_array[] = $filter;
        }

        // Move the first element to the end
        $filter_array[] = array_shift($filter_array);

        // Generate the updated HTML string
        $updated_html = '';
        foreach ($filter_array as $filter) {
            $updated_html .= $doc->saveHTML($filter);
        }

        // Generate the updated output string with the filter HTML in its new position
        return preg_replace($pattern, "\\1{$updated_html}\\3", $output);
    }

    return $output;
}
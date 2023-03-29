<?php

add_filter('et_html_logo_container', 'db133_add_title_and_tagline_to_logo_container');

function db133_add_title_and_tagline_to_logo_container($html) {
    return preg_replace('/<\/div>\s*$/', db133_title_and_tagline_html() . '</div>', $html);
}


if (!function_exists('db133_title_and_tagline_html')) {
	function db133_title_and_tagline_html() {
		return apply_filters(
			'db133_title_and_tagline_html',
			db133_title_and_tagline_html_from_data(db133_title_and_tagline_data())
		);
	}
}

if (!function_exists('db133_title_and_tagline_html_from_data')) {
	function db133_title_and_tagline_html_from_data($data) {
		$data = wp_parse_args($data, array(
			'title' => '',
			'title_tag' => '',
			'tagline' => '',
			'tagline_tag' => ''		
		));
		$result = '';
		if (!empty($data['title_tag']) && !empty($data['tagline_tag'])) {
			$title = sprintf(
				'<%2$s id="logo-text">%1$s</%2$s>', 
				esc_html($data['title']),
				esc_html($data['title_tag'])
			);
            if (apply_filters('db133_enable_title_link', true)) {
                $title = '<a href="'.esc_url( home_url( '/' ) ).'">'.$title.'</a>';
            }
			$tagline = db133_site_tagline_html($data);
			
			$result = '<div id="db_title_and_tagline">'.$title.$tagline.'</div>';
		}
		return apply_filters('db133_title_and_tagline_html_from_data', $result, $data);
	}
}

if (!function_exists('db133_site_tagline_html')) {
	function db133_site_tagline_html($data) {
		$layout = dbdb_option('133-header-title-and-tagline', 'layout', 'horizontal');
		if ($layout !== 'title_only') {
			return sprintf(
				'<%2$s id="logo-tagline" class="logo-tagline">%1$s</%2$s>', 
				esc_html($data['tagline']),
				esc_html($data['tagline_tag'])
			);
		} else {
			return '';
		}
	}
}

if (!function_exists('db133_title_and_tagline_data')) {
	function db133_title_and_tagline_data() {
		return apply_filters(
			'db133_title_and_tagline_data', 
			array(
				'title' => db133_site_title(),
				'title_tag' => db133_site_title_tag(),
				'tagline' => db133_site_tagline(),
				'tagline_tag' => db133_site_tagline_tag()
			)
		);
	}
}

if (!function_exists('db133_site_title')) {
	function db133_site_title() {
		return apply_filters('db133_site_title', get_bloginfo('name'));
	}
}

if (!function_exists('db133_site_tagline')) {
	function db133_site_tagline() {
		return apply_filters('db133_site_tagline', get_bloginfo('description'));
	}
}

if (!function_exists('db133_site_title_tag')) {
	function db133_site_title_tag() {
		$tag = dbdb_option('133-header-title-and-tagline', 'titleHeaderLevel', 'h2');
		return apply_filters('db133_site_title_tag', $tag);
	}
}

if (!function_exists('db133_site_tagline_tag')) {
	function db133_site_tagline_tag() {
		$tag = dbdb_option('133-header-title-and-tagline', 'taglineHeaderLevel', 'p');
		return apply_filters('db133_site_tagline_tag', $tag);
	}
}

add_filter('db133_enable_title_link', 'db133_enable_title_link');

function db133_enable_title_link($enabled) {
    return dbdb_option('133-header-title-and-tagline', 'disable-title-link', false) !== '1';
}
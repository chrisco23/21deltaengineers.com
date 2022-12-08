<?php

// === Setup ===

add_filter('db_pb_slide_content', 'db_pb_slide_filter_content', 10, 2);

// === Load Settings ===

include_once(dirname(__FILE__).'/db_pb_slide_button_2.php');
include_once(dirname(__FILE__).'/db_pb_slide_background_url.php');


// Tidy up URLs (adding http if missing, etc)
function db_pb_slide_canonicalize_url($url) {
	
	if (!empty($url)) {
		// If scheme missing, add http
		if (!parse_url($url, PHP_URL_SCHEME) && // No scheme
			!in_array(substr($url, 0, 1), array('#', '/')) // Not hash or root / protocol relative
		) {
			$url = 'http://'.$url;
		}
	}
	
	return $url;
}

// Process slide options
function db_pb_slide_filter_content($content, $args) {
	
	$args = apply_filters('db_pb_slide_filter_content_args', $args);

    $element = DBDBElement::fromHtmlString($content);
    $classes = $element->getClasses();
    $classes = apply_filters('db_pb_slide_filter_content_classes', $classes, $args);
    $element->setClasses($classes);
    $content = $element->toString();

	$content = apply_filters('db_pb_slide_filter_content_content', $content, $args);
	
	return $content;
}


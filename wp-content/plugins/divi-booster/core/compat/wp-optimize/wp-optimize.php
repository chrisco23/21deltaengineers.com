<?php

add_filter('wp-optimize-minify-default-exclusions', 'dbdb_compat_wpo_disable_jquery_processing');

function dbdb_compat_wpo_disable_jquery_processing($files) {
	if (!is_admin() && is_array($files)) {
		$files[] = '/jquery.min.js';
	}
	return $files;
}
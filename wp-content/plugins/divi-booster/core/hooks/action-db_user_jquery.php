<?php 

// Hook - user jquery
function db_user_jquery() { 
	do_action('db_user_js'); 
    if (has_action('db_user_jquery')) {
        echo 'jQuery(function($){'.do_action('db_user_jquery').'});';
    }
}
add_action('wp_footer.js', 'db_user_jquery');
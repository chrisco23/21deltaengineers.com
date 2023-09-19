<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db150_add_setting($plugin) { 
	$plugin->setting_start(); 
	//$plugin->techlink('https://divibooster.com/increasing-the-width-of-the-divi-sidebar/'); 
	$plugin->checkbox(__FILE__);
    echo "Footer bottom bar padding:";
    $plugin->paddingpicker(__FILE__, array('top'=>15, 'bottom'=>5));
	$plugin->setting_end(); 
} 
$wtfdivi->add_setting('footer-bottombar', 'db150_add_setting');
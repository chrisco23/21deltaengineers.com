<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db151_add_setting($plugin) { 
	$plugin->setting_start(); 
	//$plugin->techlink('https://divibooster.com/increasing-the-width-of-the-divi-sidebar/'); 
	$plugin->checkbox(__FILE__);
    echo "Footer credits padding:";
    $plugin->paddingpicker(__FILE__, array('top'=>0, 'bottom'=>10));
	$plugin->setting_end(); 
} 
$wtfdivi->add_setting('footer-bottombar', 'db151_add_setting');
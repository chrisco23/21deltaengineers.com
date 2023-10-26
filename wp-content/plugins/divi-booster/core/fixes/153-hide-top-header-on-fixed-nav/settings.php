<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db153_add_setting($plugin) {  
	$plugin->setting_start('dbdb-setting-153-hide-top-header-on-fixed-nav'); 
	//$plugin->techlink('https://divibooster.com/show-divi-header-social-icons-on-mobiles-divi-2-4'); 
	$plugin->checkbox(__FILE__); ?> Hide top header on scroll when fixed header enabled<?php
	$plugin->setting_end(); 
} 
$wtfdivi->add_setting('header-top', 'db153_add_setting');

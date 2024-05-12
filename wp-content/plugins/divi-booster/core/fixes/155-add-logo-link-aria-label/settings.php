<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db155_add_setting($plugin) {  
	$plugin->setting_start(); 
	$plugin->techlink('https://divibooster.com/add-an-aria-label-to-the-divi-header-logo/'); 
	$plugin->checkbox(__FILE__); ?> Add "aria-label" attribute to logo 
    <div class="db_subsetting">Label: <?php $plugin->textpicker(__FILE__, 'arialabel', esc_html__('Home Page', 'divi-booster')); ?></div><?php
	$plugin->setting_end(); 
} 
$wtfdivi->add_setting('general-accessibility', 'db155_add_setting');


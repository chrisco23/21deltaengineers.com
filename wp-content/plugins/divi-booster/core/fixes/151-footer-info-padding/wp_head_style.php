<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

list($name, $option) = $this->get_setting_bases(__FILE__); 

if (!empty($option['top'])) { ?>
#main-footer #footer-info { padding-top:<?php esc_html_e(intval($option['top'])); ?>px !important; }
<?php
}

if (!empty($option['bottom'])) { ?>
#main-footer #footer-info { padding-bottom:<?php esc_html_e(intval($option['bottom'])); ?>px !important; }
<?php
}
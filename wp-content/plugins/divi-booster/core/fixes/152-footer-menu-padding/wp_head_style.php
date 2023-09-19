<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

list($name, $option) = $this->get_setting_bases(__FILE__); 

if (!empty($option['top'])) { ?>
#main-footer #et-footer-nav .bottom-nav { padding-top:<?php esc_html_e(intval($option['top'])); ?>px !important; }
<?php
}

if (!empty($option['bottom'])) { ?>
#main-footer #et-footer-nav .bottom-nav { padding-bottom:<?php esc_html_e(intval($option['bottom'])); ?>px !important; }
<?php
}
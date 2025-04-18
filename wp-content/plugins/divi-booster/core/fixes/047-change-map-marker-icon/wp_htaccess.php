<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

list($name, $option) = $this->get_setting_bases(__FILE__); ?>
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^wp-content/themes/Divi/images/marker.png$ <?php esc_html_e(@$option['url']); ?> [L]
    RewriteRule ^wp-content/themes/Divi/includes/builder/images/marker.png$ <?php esc_html_e(@$option['url']); ?> [L]
    RewriteRule ^wp-content/themes/Divi/includes/builder-5/images/marker.png$ <?php esc_html_e(@$option['url']); ?> [L]
</IfModule>
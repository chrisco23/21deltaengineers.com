<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

add_filter('dbdb-load-social-media-follow-assets', '__return_true');
add_filter('dbdb_etmodules_font_require_social_icons', '__return_true');
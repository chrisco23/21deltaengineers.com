<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

add_filter('dbdb-load-social-media-follow-assets', '__return_true');
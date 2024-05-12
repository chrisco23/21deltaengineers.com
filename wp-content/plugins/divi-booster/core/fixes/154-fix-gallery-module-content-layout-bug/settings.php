<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

function db154_add_setting($plugin) {
    $plugin->setting_start();
    $plugin->techlink('https://divibooster.com/how-to-correct-the-divi-gallery-module-content-shift-on-mobile-devices/');
    $plugin->checkbox(__FILE__); ?> Prevent gallery module mobile content layout shift on first slide change
<?php
    $plugin->setting_end();
}
$wtfdivi->add_setting('modules-gallery', 'db154_add_setting');

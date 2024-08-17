<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

function db156_add_setting($plugin) {
    $plugin->setting_start('dbdb-setting_156-hide-divi-cloud');
    //$plugin->techlink('https://divibooster.com/how-to-correct-the-divi-gallery-module-content-shift-on-mobile-devices/');
    $plugin->checkbox(__FILE__); ?> Hide Divi Cloud
<?php
    $plugin->setting_end();
}
$wtfdivi->add_setting('pagebuilder-divi', 'db156_add_setting');

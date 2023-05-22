<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

include_once(dirname(__FILE__).'/settings-svg-support-notice.php');

function db014_add_setting($plugin) {  
	$plugin->setting_start('dbdb-setting-014-add-new-icons'); 
	$plugin->techlink('https://divibooster.com/adding-custom-icons-to-divi/'); 
	$plugin->checkbox(__FILE__); ?> Add custom icons for use in modules [recommended size 96x96px]:<br>
<div style="margin:10px 30px">
<?php 
	list($name, $option) = $plugin->get_setting_bases(__FILE__);
    $icons = DBDBCustomIconsOption::create($option);
    foreach($icons->keys() as $key) {
        $plugin->imagepicker(__FILE__, $key);
        echo '<a href="javascript:;" onclick="jQuery(this).prev().find(\'input[type=url]\').val(\'\');jQuery(this).prev().hide();jQuery(this).hide();jQuery(this).next().hide();" style="text-decoration:none" title="Delete">X</a><br>';
    }
	$plugin->imagepicker(__FILE__, $icons->next_key()); 
?> 
<input type="hidden" name="<?php esc_attr_e($name); ?>[urlmax]" value="<?php esc_attr_e($icons->next_index()); ?>"/>
<?php do_action('db014_setting_after'); ?>  
</div>
<?php
	$plugin->setting_end(); 
} 
$wtfdivi->add_setting('general-icons', 'db014_add_setting');
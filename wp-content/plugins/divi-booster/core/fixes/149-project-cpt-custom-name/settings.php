<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function db149_add_setting($plugin) {  
	$plugin->setting_start(); 
	//$plugin->techlink('https://divibooster.com/how-to-add-text-to-divi-top-header/'); 
	$plugin->checkbox(__FILE__); ?> Rename the Project Custom Post Type:
    <div class="db_subsetting">
        Slug: <?php $plugin->textpicker(__FILE__, 'slug', 'project'); ?>
    </div>
    <div class="db_subsetting">
        Name (singular): <?php $plugin->textpicker(__FILE__, 'name', 'Project'); ?>
    </div>
    <div class="db_subsetting">
        Name (plural): <?php $plugin->textpicker(__FILE__, 'name_plural', 'Projects'); ?>
    </div>
    <div class="db_subsetting">
        <strong>Important: You may need to <a href="<?php esc_attr_e(admin_url('options-permalink.php')); ?>" target="_blank">resave your permalinks</a> for this change to take effect.</strong>
    </div>
	<?php 
    $plugin->setting_end(); 
} 
$wtfdivi->add_setting('projects', 'db149_add_setting');


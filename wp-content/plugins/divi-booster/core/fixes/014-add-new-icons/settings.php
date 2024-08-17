<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

include_once(dirname(__FILE__) . '/settings-svg-support-notice.php');

function db014_add_setting($plugin) {
    $plugin->setting_start('dbdb-setting-014-add-new-icons');
    $plugin->techlink('https://divibooster.com/adding-custom-icons-to-divi/');
    $plugin->checkbox(__FILE__); ?> Add custom icons for use in modules [recommended size 96x96px]:<br>
    <div class="dbdb-icons-wrapper" style="margin:10px 30px">

        <?php
        list($name, $option) = $plugin->get_setting_bases(__FILE__);

        $icons = DBDBCustomIconsOption::create($option);
        $urlmax = $icons->max();
        foreach ($icons->keys() as $key) {
            echo '<div class="dbdb-icon-picker-wrapper">';
            $plugin->imagepicker(__FILE__, "url{$key}");
            echo '<a href="javascript:;" class="dbdb-delete-icon" title="Delete"><span class="dashicons dashicons-trash"></span></a>';
            echo "</div>";
        }
        ?>
        <button id="add-new-icon" type="button" class="dbdb-add-new-icon">
            <span class="dashicons dashicons-plus"></span>
        </button>
        <input id="dbdb014-url-max" type="hidden" name="<?php esc_attr_e($name); ?>[urlmax]" value="<?php esc_attr_e($urlmax); ?>" />
        <?php do_action('db014_setting_after'); ?>
    </div>
    <script>
        jQuery(document).ready(function($) {
            var iconCounter = <?php esc_html_e($icons->next_index()); ?>;

            $('#add-new-icon').on('click', function() {

                var newIcon = `<div class="dbdb-icon-picker-wrapper"><span id="new-icon-picker-${iconCounter}" class="wtf-imagepicker" style="display:inline">
            <input type="url" 
                id="wtf-imagepicker-url${iconCounter}"
                name="<?php echo esc_attr($name); ?>[url${iconCounter}]" 
                class="wtf-imagepicker" 
                size="36" 
                maxlength="1024" 
                placeholder="Image URL" 
                value="" 
            />
            <input type="button" 
                class="wtf-imagepicker-btn upload-button" 
                value="<?php echo esc_attr__('Choose Image', 'divi-booster'); ?>" 
            />
            <img class="wtf-imagepicker-thumb" 
                src="" 
            />
        </span>
        <a href="javascript:;" class="dbdb-delete-icon" title="Delete"><span class="dashicons dashicons-trash"></span></a>
        </div>`;

                // Insert new icon before "#add-new-icon" and click it
                $(newIcon).insertBefore('#add-new-icon').find('.wtf-imagepicker-btn').click();

                // Update the hidden input that stores the next index
                $('#dbdb014-url-max').val(iconCounter);

                iconCounter++;


            });

            $(document).on('click', '.dbdb-delete-icon', function(e) {
                e.stopPropagation();
                $(this).closest('.dbdb-icon-picker-wrapper').hide().find('input.wtf-imagepicker').val('');
            });
        });
    </script>
<?php
    $plugin->setting_end();
}
$wtfdivi->add_setting('general-icons', 'db014_add_setting');

<?php 

class DBDBImageField {

    private $value;
    private $field_id;
    private $setting_id;

    public function __construct($setting_id, $field_id, $value) {
        $this->value = $value;
        $this->field_id = $field_id;
        $this->setting_id = $setting_id;
    }

    public function render() {
        $url = $this->value;
        $src = empty($url)?'':set_url_scheme($url);
        ?>
        <span class="wtf-imagepicker" style="display:inline">
        <input type="url" 
            id="wtf-imagepicker-<?php echo esc_attr($this->field_id); ?>" 
            name="<?php echo esc_attr( $this->setting_id . '[' . $this->field_id . ']' ); ?>" 
            class="wtf-imagepicker" 
            size="36" 
            maxlength="1024" 
            placeholder="Image URL" 
            value="<?php echo esc_attr($url); ?>" 
        />
        <input type="button" 
            class="wtf-imagepicker-btn upload-button" 
            value="<?php echo esc_attr__('Choose Image', 'divi-booster'); ?>" 
        />
        <img class="wtf-imagepicker-thumb" 
            src="<?php echo esc_url($src); ?>" 
        />
        </span>
        <?php
    }
}
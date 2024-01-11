<?php 

class DBDBTextboxField {

    private $value;
    private $field_id;
    private $setting_id;
    private $default;

    public function __construct($setting_id, $field_id, $value, $default = '') {
        $this->value = $value;
        $this->field_id = $field_id;
        $this->setting_id = $setting_id;
        $this->default = $default;
    }

    public function render() {
        $content = empty($this->value)?$this->default:$this->value;
        ?>
        <textarea 
            class="wtf-textbox" 
            name="<?php echo esc_attr( $this->setting_id . '[' . $this->field_id . ']' ); ?>"
        ><?php echo esc_html($content); ?></textarea>
        <?php
    }
}
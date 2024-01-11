<?php 

class DBDBNumberField {

    private $value;
    private $field_id;
    private $setting_id;
    private $default;
    private $min;

    public function __construct($setting_id, $field_id, $value, $default = '', $min=0) {
        $this->value = $value;
        $this->field_id = $field_id;
        $this->setting_id = $setting_id;
        $this->default = $default;
        $this->min = $min;
    }

    public function render() {
        $content = (isset($this->value) and is_numeric($this->value))?$this->value:$this->default;
        ?>
        <input 
            type="number" 
            name="<?php echo esc_attr( $this->setting_id . '[' . $this->field_id . ']' ); ?>"
            value="<?php echo esc_attr($content); ?>"
            min="<?php echo esc_attr($this->min); ?>"
            style="width:64px"
        />
        <?php
    }
}
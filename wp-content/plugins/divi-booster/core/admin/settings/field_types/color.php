<?php 

use DiviBooster\DiviBooster\Color;

class DBDBColorField {

    private $field_id;
    private $setting_id;
    private $color;
    private $default_color;

    public function __construct($setting_id, $field_id, Color $color, Color $default_color) {
        $this->field_id = $field_id;
        $this->setting_id = $setting_id;
        $this->color = $color;
        $this->default_color = $default_color;
    }

    public function render() {
        // $color = empty($this->value) ? $this->default : $this->value;
        // $default = is_null($this->default) ? '' : $this->default;
        ?>
        <input 
            type="text" 
            name="<?php echo esc_attr( $this->setting_id . '[' . $this->field_id . ']' ); ?>" 
            value="<?php echo esc_attr( $this->color->hex() ); ?>" 
            class="wtf-colorpicker" 
            data-default-color="<?php echo esc_attr( $this->default_color->hex() ); ?>"
        />
        <?php
    }
}
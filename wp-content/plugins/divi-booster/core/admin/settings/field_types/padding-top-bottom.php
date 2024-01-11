<?php 

class DBDBPaddingTopBottomField {

    private $setting_id;
    private $defaults;
    private $option;

    public function __construct($setting_id, $option, $defaults = array()) {
        $this->setting_id = $setting_id;
        $this->option = $option;
        $this->defaults = $defaults;
    }

    public function render() {
        $top = isset($this->defaults['top'])?$this->defaults['top']:'';
        $bottom = isset($this->defaults['bottom'])?$this->defaults['bottom']:'';
        ?>
        <table class="dbdb-settings-padding">
        <tr>
            <td>
                <?php 
                $value = empty($this->option['top'])?'':$this->option['top'];
                $field = new DBDBNumberField($this->setting_id, 'top', $value, $top, 0);
                $field->render();
                ?>
            </td>
            <td>px</td>
            <td>
                <?php 
                $value = empty($this->option['bottom'])?'':$this->option['bottom'];
                $field = new DBDBNumberField($this->setting_id, 'bottom', $value, $bottom, 0);
                $field->render();
                ?>
            </td>
            <td>px</td>
        </tr>
        <tr><th>Top</th><th></th><th>Bottom</th><th></th></tr>
        </table>
        <?php
    }
}
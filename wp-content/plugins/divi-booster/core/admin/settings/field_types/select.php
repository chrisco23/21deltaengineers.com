<?php 

class DBDBSelectField {

    private $selected;
    private $field_id;
    private $setting_id;
    private $choices;
    private $feature_slug;

    public function __construct($feature_slug, $setting_id, $field_id, $choices, $selected) {
        $this->selected = $selected;
        $this->field_id = $field_id;
        $this->setting_id = $setting_id;
        $this->choices = $choices;
        $this->feature_slug = $feature_slug;
    }

    public function render() {
        $nameAttribRoot =  DBDBHtmlNameAttribute::fromString($this->setting_id);
        $nameAttrib = $nameAttribRoot->withFields($this->field_id);
        $nameAttribStr = $nameAttrib->toString();
        ?>
        <div class="wtf-select">
        <select id="dbdb-<?php esc_attr_e($this->feature_slug); ?>-<?php esc_attr_e($this->field_id);?>" name="<?php esc_attr_e($nameAttribStr); ?>">
        <?php foreach($this->choices as $val=>$text) { ?>
            <option value="<?php esc_attr_e($val); ?>" <?php echo ($this->selected==$val)?'selected':''; ?>><?php esc_html_e($text); ?></option>
        <?php } ?>
        </select>
        </div>
        <?php
    }
}
<?php
class DBDBModuleOutputFilterHook {

private $divi;
private $render_slug;
private $hook;

static function create($render_slug, $hook) {
    return new self(new DBDBDivi, $render_slug, $hook);
}

public function __construct(DBDBAnyDivi $divi, $render_slug, $hook) {
    $this->divi = $divi;
    $this->render_slug = (string) $render_slug;
    $this->hook = (string) $hook;
}

public function enableInTb() {
    add_filter('et_module_shortcode_output', array($this, 'applyFiltersInTb'), 10, 3);
}

public function applyFiltersInTb($output, $render_slug, $module) {
    if (!$this->divi->isThemeBuilderLayout()) return $output;
    if (!isset($module->props)) return $output;
    if ($render_slug !== $this->render_slug) return $output;
    return apply_filters($this->hook, $output, $module->props);
}
}
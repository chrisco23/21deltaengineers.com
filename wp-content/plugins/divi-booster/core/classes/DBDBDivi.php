<?php

interface DBDBAnyDivi {
}

class DBDBDivi implements DBDBAnyDivi
{
    static function create() {
        return new self();
    }

    public function __construct() {
    }

    public function url($path='') {
        return get_template_directory_uri().$path;
    }

    public function supports_dynamic_assets() {
        return ($this->version() && version_compare($this->version(), '4.10', '>='));
    }

    public function version() {
        return defined('ET_CORE_VERSION')?ET_CORE_VERSION:false;
    }

    public function isThemeBuilderLayout() {
        return (is_callable('ET_Builder_Element::is_theme_builder_layout') && ET_Builder_Element::is_theme_builder_layout());
    }
}

class DBDBFakeDivi implements DBDBAnyDivi
{
    public function isThemeBuilderLayout()
    {
        return false;
    }
}

class DBDBFakeDiviIsTbLayout extends DBDBFakeDivi
{
    public function isThemeBuilderLayout()
    {
        return true;
    }
}

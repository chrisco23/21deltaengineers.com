<?php

interface DBDBAnyDivi
{
    public function isThemeBuilderLayout();
}

class DBDBDivi implements DBDBAnyDivi
{
    public function isThemeBuilderLayout()
    {
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

<?php

namespace IAWP;

/**
 * Form tracking requires dynamic columns. If you have 2 forms, there will be 6 new columns. 2 for
 * a summary and 2 per form. This class makes it easy to get all the forms a given site has, while
 * caching the result, so it doesn't need to re-fetch from the database.
 * @internal
 */
class Form
{
    private $id;
    private $title;
    private $plugin_id;
    private static $forms = null;
    private static $plugins = [['id' => 1, 'name' => 'Fluent Forms', 'slugs' => ['fluentform/fluentform.php']], ['id' => 2, 'name' => 'WPForms', 'slugs' => ['wpforms-lite/wpforms.php', 'wpforms/wpforms.php']], ['id' => 3, 'name' => 'Contact Form 7', 'slugs' => ['contact-form-7/wp-contact-form-7.php']], ['id' => 4, 'name' => 'Gravity Forms', 'slugs' => ['gravityforms/gravityforms.php']], ['id' => 5, 'name' => 'Ninja Forms', 'slugs' => ['ninja-forms/ninja-forms.php']], ['id' => 6, 'name' => 'MailOptin', 'slugs' => ['mailoptin/mailoptin.php']], ['id' => 7, 'name' => 'Convert Pro', 'slugs' => ['convertpro/convertpro.php']], ['id' => 8, 'name' => 'Elementor Pro', 'slugs' => ['elementor-pro/elementor-pro.php']], ['id' => 9, 'name' => 'JetFormBuilder', 'slugs' => ['jetformbuilder/jet-form-builder.php']], ['id' => 10, 'name' => 'Formidable Forms', 'slugs' => ['formidable/formidable.php']], ['id' => 11, 'name' => 'WS Form', 'slugs' => ['ws-form/ws-form.php']], ['id' => 12, 'name' => 'Amelia', 'slugs' => ['ameliabooking/ameliabooking.php']]];
    private function __construct(int $id, string $title, int $plugin_id)
    {
        $this->id = $id;
        $this->title = $title;
        $this->plugin_id = $plugin_id;
    }
    public function id() : int
    {
        return $this->id;
    }
    public function title() : string
    {
        return $this->title;
    }
    public function icon() : string
    {
        $lowercase = \strtolower($this->plugin_name());
        $hyphenated = \str_replace(' ', '_', $lowercase);
        return $hyphenated;
    }
    public function plugin_name() : string
    {
        return \IAWP\Form::find_plugin_by_id($this->plugin_id)['name'];
    }
    public function is_plugin_active() : bool
    {
        $active_plugins = \get_option('active_plugins');
        $slugs = \IAWP\Form::find_plugin_by_id($this->plugin_id)['slugs'];
        foreach ($slugs as $slug) {
            if (\in_array($slug, $active_plugins)) {
                return \true;
            }
        }
        return \false;
    }
    public function submissions_column() : string
    {
        return "form_submissions_for_{$this->id}";
    }
    public function conversion_rate_column() : string
    {
        return "form_conversion_rate_for_{$this->id}";
    }
    public static function has_any_active_form_plugins() : bool
    {
        $active_plugins = \get_option('active_plugins');
        foreach (\IAWP\Form::$plugins as $plugin) {
            foreach ($plugin['slugs'] as $slug) {
                if (\in_array($slug, $active_plugins)) {
                    return \true;
                }
            }
        }
        return \false;
    }
    public static function find_form_by_column_name(string $column_name) : ?\IAWP\Form
    {
        $id = \intval(\preg_match('/(\\d+)\\z/', $column_name));
        $forms = self::get_forms();
        foreach ($forms as $form) {
            if ($id === $form->id()) {
                return $form;
            }
        }
        return null;
    }
    /**
     * @return Form[]
     */
    public static function get_forms() : array
    {
        if (\is_array(self::$forms)) {
            return self::$forms;
        }
        $forms_table = \IAWP\Query::get_table_name(\IAWP\Query::FORMS);
        $query = \IAWP\Illuminate_Builder::get_builder()->select(['form_id', 'cached_form_title', 'plugin_id'])->from($forms_table);
        $forms = \array_filter(\array_map(function ($form) {
            if (\is_null(self::find_plugin_by_id($form->plugin_id))) {
                return null;
            }
            return new self($form->form_id, $form->cached_form_title, $form->plugin_id);
        }, $query->get()->all()));
        \usort($forms, function (\IAWP\Form $a, \IAWP\Form $b) {
            // First level sort by plugin name
            $plugin_name_comparison = \strcmp($a->plugin_name(), $b->plugin_name());
            // If types are equal, sort by 'name'
            if ($plugin_name_comparison === 0) {
                return \strcmp($a->title(), $b->title());
            }
            return $plugin_name_comparison;
        });
        self::$forms = $forms;
        return self::$forms;
    }
    private static function find_plugin_by_id(int $id) : ?array
    {
        foreach (self::$plugins as $plugin) {
            if ($plugin['id'] === $id) {
                return $plugin;
            }
        }
        return null;
    }
}

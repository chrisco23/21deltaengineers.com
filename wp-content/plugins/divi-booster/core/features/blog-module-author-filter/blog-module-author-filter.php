<?php

namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    add_filter('init', array(new BlogModuleAuthorFilterFeature, 'init'));
}

class BlogModuleAuthorFilterFeature {

    private $author;

    function init() {
        add_filter('et_pb_all_fields_unprocessed_et_pb_blog', array($this, 'add_fields'));
        add_filter('et_pb_module_shortcode_attributes', array($this, 'add_author_filter'), 10, 3);
        add_filter('dbdb_et_pb_blog_shortcode_output', array($this, 'remove_author_filter'), 10, 2);
    }

    function add_author_filter($attrs, $content, $module_slug) {
        if ($module_slug !== 'et_pb_blog') {
            return $attrs;
        }
        add_filter('pre_get_posts', array($this, 'filter_the_posts'), 10, 2);
        //$this->author = $attrs['dbdb_author_id'];
        $this->author = isset($attrs['dbdb_author_id'])?$attrs['dbdb_author_id']:'';
        return $attrs;
    }

    function filter_the_posts($query) {
        if ($this->author && $this->author !== 'all') {
            $query->set('author', $this->author);
        }
        return $query;
    }

    function remove_author_filter($output, $attrs) {
        remove_filter('the_posts', array($this, 'filter_the_posts'), 10, 2);
        return $output;
    }
    
    function add_fields($fields) {
        if (!is_array($fields)) { return $fields; }

        $fields['dbdb_author_id'] = array(
            'label' => 'Author ID',
            'type' => 'text',
            'option_category' => 'basic_option',
            'description' => esc_html__('Enter the user ID of an author to show only their posts in the module, or leave blank to show posts by all authors.', 'divi-booster'),
            'toggle_slug' => 'main_content',
            'tab_slug' => 'general',
            'default' => '',
        );

        return $fields;
    }
}



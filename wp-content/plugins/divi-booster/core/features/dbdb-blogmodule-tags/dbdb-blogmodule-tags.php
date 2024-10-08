<?php

namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    add_filter('init', array(new BlogModuleTagsFeature, 'init'));
}

class BlogModuleTagsFeature {

    private $props = array();

    function init() {
        add_filter('dbdb_et_pb_blog_shortcode_output', array($this, 'add_article_filter'), 10, 2);
        add_filter('et_pb_all_fields_unprocessed_et_pb_blog', array($this, 'add_fields'));
    }

    function add_article_filter($content, $props) {
        if (!isset($props['dbdb_show_tags']) || $props['dbdb_show_tags'] !== 'on') { 
            return $content; 
        }
        $this->props = $props;
        return preg_replace_callback('/<article.*?<\/article>/s', array($this, 'apply_article_filter'), $content);
    }

    function apply_article_filter($match) {
        if (!is_array($match) || !isset($match[0])) { 
            return $match; 
        }
        return $this->add_tags($match[0]);
    }
    
    function add_tags($html) {
        $match = false;
        preg_match('/<article id="post-(\d*)"/', $html, $match);
        $id = isset($match[1])?intval($match[1]):false;
        if (!$id) { return $html; }

        // get the post type from the class attribute
        $post_type = 'post';
        preg_match('/class="[^"]*type-(\w*)/', $html, $post_type);
        $post_type = isset($post_type[1])?$post_type[1]:false;

        // get the term list for the post_type
        $sep = isset($this->props['dbdb_tags_separator'])?$this->props['dbdb_tags_separator']:', ';
        $tags = get_the_term_list($id, $post_type . '_tag', '', $sep, '');
        if (is_wp_error($tags)) { return $html; }

        if (empty($tags)) { return $html; }
        $tags = '<span class="dbdb-post-tags">'.$tags.'</span>';
        if (strpos($html, '<p class="post-meta">') !== false) {
            $html = preg_replace('/(<p class="post-meta">.*?)(<\/p>)/s', '\\1 | '.$tags.'\\2', $html);
        } else {
            $html = preg_replace('/(<div class="post-content">)/s', '<p class="post-meta">'.$tags.'</p>\\1', $html);
        }
        return $html;
    }
    
    function add_fields($fields) {
        return $fields + array(
            'dbdb_show_tags' => array(
                'label'             => esc_html__( 'Show Tags', 'et_builder' ),
                'type'              => 'yes_no_button',
                'option_category'   => 'configuration',
                'options'           => array(
                    'on'  => esc_html__( 'Yes', 'et_builder' ),
                    'off' => esc_html__( 'No', 'et_builder' ),
                ),
                'default_on_front'  => 'off',
                'depends_show_if'   => 'on',
                'toggle_slug'       => 'elements',
                'description'      => esc_html__( 'Turn the tag links on or off.', 'et_builder' ),
                'mobile_options'    => true,
                'hover'             => 'tabs',
            ),
            'dbdb_tags_separator' => array(
                'label'             => esc_html__( 'Tag Separator', 'et_builder' ),
                'type'              => 'text',
                'option_category'   => 'configuration',
                'show_if' => array(
                    'dbdb_show_tags' => 'on',
                ),
                'default' => ', ', 
                'toggle_slug'       => 'elements',
                'description'      => esc_html__( 'The text to use between the tags.', 'et_builder' )
            )
        );
    }
}



<?php
namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    add_filter('init', array(new GalleryOrderFeature, 'init'));
}

class GalleryOrderFeature {

    public function init() {
        add_filter('dbdb_et_pb_module_shortcode_attributes', array($this, 'db_sort_gallery_ids'), 10, 3);
        add_filter('dbdb_gallery_fields', array($this, 'add_fields'));
        add_action('dbdb_preprocess_computed_property', array($this, 'apply_to_vb_preview'));
    }
    
    public function apply_to_vb_preview() {
        if (empty($_POST['module_type']) || !dbdb_is_gallery_module_slug($_POST['module_type'])) { return; }
        if (empty($_POST['depends_on']['gallery_ids'])) { return; }
        if (empty($_POST['depends_on']['gallery_orderby'])) { return; }
        if ($_POST['depends_on']['gallery_orderby'] === 'dbdb_reverse') {
            $_POST['depends_on']['gallery_ids'] = implode(',', array_reverse(explode(',', $_POST['depends_on']['gallery_ids'])));
        } 
        elseif ($_POST['depends_on']['gallery_orderby'] === 'dbdb_by_id') {
            $gallery_ids = $_POST['depends_on']['gallery_ids'];
            $gallery_ids_arr = explode(',', $gallery_ids);
            sort($gallery_ids_arr);
            $_POST['depends_on']['gallery_ids'] = implode(',', $gallery_ids_arr);
        }
        elseif ($_POST['depends_on']['gallery_orderby'] === 'dbdb_by_id_reverse') {
            $gallery_ids = $_POST['depends_on']['gallery_ids'];
            $gallery_ids_arr = explode(',', $gallery_ids);
            rsort($gallery_ids_arr);
            $_POST['depends_on']['gallery_ids'] = implode(',', $gallery_ids_arr);
        } 
        elseif ($_POST['depends_on']['gallery_orderby'] === 'dbdb_alphabetical') { 
            $gallery_ids = $_POST['depends_on']['gallery_ids'];
            $gallery_ids_arr = explode(',', $gallery_ids);
            $media_titles = array();
            foreach ($gallery_ids_arr as $media_id) {
                $media_titles[$media_id] = get_the_title($media_id);
            }
            asort($media_titles);
            $sorted_media_ids = array_keys($media_titles);
            $_POST['depends_on']['gallery_ids'] = implode(',', $sorted_media_ids);
        }
        elseif ($_POST['depends_on']['gallery_orderby'] === 'dbdb_alphabetical_reverse') { 
            $gallery_ids = $_POST['depends_on']['gallery_ids'];
            $gallery_ids_arr = explode(',', $gallery_ids);
            $media_titles = array();
            foreach ($gallery_ids_arr as $media_id) {
                $media_titles[$media_id] = get_the_title($media_id);
            }
            arsort($media_titles);
            $sorted_media_ids = array_keys($media_titles);
            $_POST['depends_on']['gallery_ids'] = implode(',', $sorted_media_ids);
        }
    }
    
    public function db_sort_gallery_ids($props, $attrs, $render_slug) {
        if (dbdb_is_vb()) { return $props; }
        if (!dbdb_is_gallery_module_slug($render_slug)) { return $props; }
        if (empty($props['gallery_orderby']) || empty($props['gallery_ids'])) { return $props; }
        $gallery_ids_arr = explode(',', $props['gallery_ids']);
        if ($props['gallery_orderby'] === 'dbdb_reverse') {  
            $props['gallery_ids'] = implode(',', array_reverse($gallery_ids_arr));
        } 
        elseif ($props['gallery_orderby'] === 'dbdb_by_id') {
            sort($gallery_ids_arr);
            $props['gallery_ids'] = implode(',', $gallery_ids_arr);
        } 
        elseif ($props['gallery_orderby'] === 'dbdb_by_id_reverse') { 
            rsort($gallery_ids_arr);
            $props['gallery_ids'] = implode(',', $gallery_ids_arr);
        } 
        elseif ($props['gallery_orderby'] === 'dbdb_alphabetical') { 
            $media_titles = array();
            foreach ($gallery_ids_arr as $media_id) {
                $media_titles[$media_id] = get_the_title($media_id);
            }
            asort($media_titles);
            $sorted_media_ids = array_keys($media_titles);
            $props['gallery_ids'] = implode(',', $sorted_media_ids);
        } 
        elseif ($props['gallery_orderby'] === 'dbdb_alphabetical_reverse') { 
            $media_titles = array();
            foreach ($gallery_ids_arr as $media_id) {
                $media_titles[$media_id] = get_the_title($media_id);
            }
            arsort($media_titles);
            $sorted_media_ids = array_keys($media_titles);
            $props['gallery_ids'] = implode(',', $sorted_media_ids);
        } 

        return $props;
    }

    public function add_fields($fields) {
        if (isset($fields['gallery_orderby']['options']) && is_array($fields['gallery_orderby']['options'])) {
            $fields['gallery_orderby']['options']['dbdb_reverse'] = esc_html__('Reverse', 'divi-booster');
            $fields['gallery_orderby']['options']['dbdb_alphabetical'] = esc_html__('Alphabetical', 'divi-booster');
            $fields['gallery_orderby']['options']['dbdb_alphabetical_reverse'] = esc_html__('Alphabetical (Reverse)', 'divi-booster');
            $fields['gallery_orderby']['options']['dbdb_by_id'] = esc_html__('By ID', 'divi-booster');
            $fields['gallery_orderby']['options']['dbdb_by_id_reverse'] = esc_html__('By ID (Reverse)', 'divi-booster');
        }
        if (isset($fields['gallery_orderby']['description'])) {
            $fields['gallery_orderby']['description'] = $fields['gallery_orderby']['description'].' '.esc_html__('Additional ordering methods <a href="https://divibooster.com/sorting-the-divi-gallery-images/" target="_blank">added by Divi Booster</a>.', 'divi-booster');
        }
        return $fields;
    }
}

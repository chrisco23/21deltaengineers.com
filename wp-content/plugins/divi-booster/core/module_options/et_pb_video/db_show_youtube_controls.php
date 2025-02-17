<?php

add_filter('dbmo_et_pb_video_whitelisted_fields', 'dbmo_et_pb_video_show_youtube_controls_register_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_video', 'dbmo_et_pb_video_show_youtube_controls_add_fields');
add_filter('db_pb_video_content', 'db_pb_video_show_youtube_controls_filter_content', 10, 2);

function dbmo_et_pb_video_show_youtube_controls_register_fields($fields) {
    $fields[] = 'db_show_youtube_controls';
    return $fields;
}

function dbmo_et_pb_video_show_youtube_controls_add_fields($fields) {

    // Add the custom label toggle
    $fields['db_show_youtube_controls'] = array(
        'label' => 'Show YouTube Video Controls',
        'type' => 'yes_no_button',
        'options' => array(
            'off' => esc_html__('No', 'et_builder'),
            'on'  => esc_html__('Yes', 'et_builder'),
        ),
        'option_category' => 'basic_option',
        'description' => 'YouTube shows video controls by default. Disabling this option hides the controls. ' . divibooster_module_options_credit(),
        'default' => 'on',
        'toggle_slug' => 'main_content'
    );

    return $fields;
}

function db_pb_video_show_youtube_controls_filter_content($content, $args) {
    if (
        !empty($args['db_show_youtube_controls']) &&
        $args['db_show_youtube_controls'] === 'off'
    ) {
        $content = dbvideo_html_with_hide_youtube_controls($content);
    }
    return $content;
}

if (!function_exists('dbvideo_html_with_hide_youtube_controls')) {
    function dbvideo_html_with_hide_youtube_controls($old_content) {
        $new_content = preg_replace_callback("/https?:\/\/www\.youtube\.com\/[^\"]*/i", 'dbvideo_url_with_hide_youtube_controls', $old_content);
        return apply_filters('dbvideo_html_with_hide_youtube_controls', $new_content, $old_content);
    }
}

if (!function_exists('dbvideo_url_with_hide_youtube_controls')) {
    function dbvideo_url_with_hide_youtube_controls($match) {
        $old_url = isset($match[0]) ? $match[0] : '';
        $new_url = add_query_arg('controls', '0', $old_url);
        return apply_filters('dbvideo_url_with_hide_youtube_controls', $new_url, $match);
    }
}

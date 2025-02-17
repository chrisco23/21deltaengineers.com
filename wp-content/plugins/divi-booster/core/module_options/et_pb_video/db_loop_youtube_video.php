<?php

add_filter('dbmo_et_pb_video_whitelisted_fields', 'dbmo_et_pb_video_loop_register_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_video', 'dbmo_et_pb_video_loop_add_fields');
add_filter('db_pb_video_content', 'db_pb_video_loop_filter_content', 10, 2);

function dbmo_et_pb_video_loop_register_fields($fields) {
    $fields[] = 'db_loop_youtube_video';
    return $fields;
}

function dbmo_et_pb_video_loop_add_fields($fields) {

    // Add the custom label toggle
    $fields['db_loop_youtube_video'] = array(
        'label' => 'Loop YouTube Videos',
        'type' => 'yes_no_button',
        'options' => array(
            'off' => esc_html__('No', 'et_builder'),
            'on'  => esc_html__('Yes', 'et_builder'),
        ),
        'option_category' => 'basic_option',
        'description' => 'YouTube videos do not loop by default. Enabling this option will loop the video. ' . divibooster_module_options_credit(),
        'default' => 'off',
        'toggle_slug' => 'main_content'
    );

    return $fields;
}

function db_pb_video_loop_filter_content($content, $args) {
    if (
        !empty($args['db_loop_youtube_video']) &&
        $args['db_loop_youtube_video'] === 'on'
    ) {
        $content = dbvideo_html_with_loop_youtube_videos($content);
    }
    return $content;
}

if (!function_exists('dbvideo_html_with_loop_youtube_videos')) {
    function dbvideo_html_with_loop_youtube_videos($old_content) {
        $new_content = preg_replace_callback("/https?:\/\/www\.youtube\.com\/[^\"]*/i", 'dbvideo_url_with_loop_youtube_videos', $old_content);
        return apply_filters('dbvideo_html_with_loop_youtube_videos', $new_content, $old_content);
    }
}

if (!function_exists('dbvideo_url_with_loop_youtube_videos')) {
    function dbvideo_url_with_loop_youtube_videos($match) {
        $old_url = isset($match[0]) ? $match[0] : '';
        $video_id = dbvideo_extract_youtube_video_id($old_url);
        $new_url = add_query_arg(array('loop' => '1', 'playlist' => $video_id), $old_url);
        return apply_filters('dbvideo_url_with_loop_youtube_videos', $new_url, $match);
    }
}

if (!function_exists('dbvideo_extract_youtube_video_id')) {
    function dbvideo_extract_youtube_video_id($url) {
        preg_match("/embed\/([^?]+)/", $url, $matches);
        return isset($matches[1]) ? $matches[1] : '';
    }
}

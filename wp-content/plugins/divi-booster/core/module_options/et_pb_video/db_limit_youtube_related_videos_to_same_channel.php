<?php

add_filter('dbmo_et_pb_video_whitelisted_fields', 'dbmo_et_pb_video_limit_to_related_register_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_video', 'dbmo_et_pb_video_limit_to_related_add_fields');
add_filter('db_pb_video_content', 'db_pb_video_limit_to_related_filter_content', 10, 2);

function dbmo_et_pb_video_limit_to_related_register_fields($fields) {
    $fields[] = 'db_limit_youtube_related_videos_to_same_channel';
    return $fields;
}

function dbmo_et_pb_video_limit_to_related_add_fields($fields) {

    // Add the custom label toggle
    $fields['db_limit_youtube_related_videos_to_same_channel'] = array(
        'label' => 'Limit YouTube Related Videos to Same Channel',
        'type' => 'yes_no_button',
        'options' => array(
            'off' => esc_html__('No', 'et_builder'),
            'on'  => esc_html__('Yes', 'et_builder'),
        ),
        'option_category' => 'basic_option',
        'description' => 'YouTube show related videos when playback of the initial video ends. By default, these can come from any channel. Enabling this option limits the related videos to those in the same channel as the current video. ' . divibooster_module_options_credit(),
        'default' => 'off',
        'toggle_slug' => 'main_content'
    );

    return $fields;
}

function db_pb_video_limit_to_related_filter_content($content, $args) {
    if (
        !empty($args['db_limit_youtube_related_videos_to_same_channel']) &&
        $args['db_limit_youtube_related_videos_to_same_channel'] === 'on'
    ) {
        $content = dbvideo_html_without_youtube_related_videos($content);
    }
    return $content;
}

if (!function_exists('dbvideo_html_without_youtube_related_videos')) {
    function dbvideo_html_without_youtube_related_videos($old_content) {
        $new_content = preg_replace_callback("/https?:\/\/www\.youtube\.com\/[^\"]*/i", 'dbvideo_url_without_youtube_related_videos', $old_content);
        return apply_filters('dbvideo_html_without_youtube_related_videos', $new_content, $old_content);
    }
}

if (!function_exists('dbvideo_url_without_youtube_related_videos')) {
    function dbvideo_url_without_youtube_related_videos($match) {
        $old_url = isset($match[0]) ? $match[0] : '';
        $new_url = add_query_arg('rel', '0', $old_url);
        return apply_filters('dbvideo_url_without_youtube_related_videos', $new_url, $match);
    }
}

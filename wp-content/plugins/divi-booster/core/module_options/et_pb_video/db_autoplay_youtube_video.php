<?php

add_filter('dbmo_et_pb_video_whitelisted_fields', 'dbmo_et_pb_video_autoplay_register_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_video', 'dbmo_et_pb_video_autoplay_add_fields');
add_filter('db_pb_video_content', 'db_pb_video_autoplay_filter_content', 10, 2);

function dbmo_et_pb_video_autoplay_register_fields($fields) {
    $fields[] = 'db_autoplay_youtube_video';
    return $fields;
}

function dbmo_et_pb_video_autoplay_add_fields($fields) {

    // Add the custom label toggle
    $fields['db_autoplay_youtube_video'] = array(
        'label' => 'Autoplay YouTube Video',
        'type' => 'yes_no_button',
        'options' => array(
            'off' => esc_html__('No', 'et_builder'),
            'on'  => esc_html__('Yes', 'et_builder'),
        ),
        'option_category' => 'basic_option',
        'description' => 'YouTube videos do not autoplay by default. Enabling this option will start the video automatically. Please note that some browsers restrict abiity to autoplay videos with sound. Use the option to start the video muted to ensure your video will autoplay for all users.' . divibooster_module_options_credit(),
        'default' => 'off',
        'toggle_slug' => 'main_content'
    );

    return $fields;
}

function db_pb_video_autoplay_filter_content($content, $args) {
    if (
        !empty($args['db_autoplay_youtube_video']) &&
        $args['db_autoplay_youtube_video'] === 'on'
    ) {
        $content = dbvideo_html_with_autoplay_youtube_videos($content);
    }
    return $content;
}

if (!function_exists('dbvideo_html_with_autoplay_youtube_videos')) {
    function dbvideo_html_with_autoplay_youtube_videos($old_content) {
        $new_content = preg_replace_callback("/https?:\/\/www\.youtube\.com\/[^\"]*/i", 'dbvideo_url_with_autoplay_youtube_videos', $old_content);
        return apply_filters('dbvideo_html_with_autoplay_youtube_videos', $new_content, $old_content);
    }
}

if (!function_exists('dbvideo_url_with_autoplay_youtube_videos')) {
    function dbvideo_url_with_autoplay_youtube_videos($match) {
        $old_url = isset($match[0]) ? $match[0] : '';
        $new_url = add_query_arg('autoplay', '1', $old_url);
        return apply_filters('dbvideo_url_with_autoplay_youtube_videos', $new_url, $match);
    }
}

<?php
// Add options to post slider - just adds standard et_pb_slider options
add_filter('dbmo_et_pb_post_slider_whitelisted_fields', 'dbmo_et_pb_slider_register_fields');
//add_filter('dbmo_et_pb_post_slider_fields', 'dbmo_et_pb_slider_add_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_post_slider', 'dbmo_et_pb_slider_add_fields');

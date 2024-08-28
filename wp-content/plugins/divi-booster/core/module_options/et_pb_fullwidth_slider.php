<?php
if (version_compare(phpversion(), '5.3', '>=')) {
    include_once(dirname(__FILE__) . '/et_pb_fullwidth_slider/FullwidthSliderRunOnceFeature.php');
}

// Add options to fullwidth slider - just adds standard et_pb_slider options
add_filter('dbmo_et_pb_fullwidth_slider_whitelisted_fields', 'dbmo_et_pb_slider_register_fields');
// add_filter('dbmo_et_pb_fullwidth_slider_fields', 'dbmo_et_pb_slider_add_fields');
add_filter('et_pb_all_fields_unprocessed_et_pb_fullwidth_slider', 'dbmo_et_pb_slider_add_fields');

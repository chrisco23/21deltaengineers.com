<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

$color_code = dbdb_option('046-slider-text-transparent-background', 'bgcol', '#000');
$opacity_percentage = dbdb_option('046-slider-text-transparent-background', 'opacity', 100);
$border_radius = intval(dbdb_option('046-slider-text-transparent-background', 'border-radius', '15'));
$color = (new DBDB_color($color_code, $opacity_percentage/100));
?>

/* Set background */
.et_pb_slide_description,
.et_pb_slide_description:before,
.et_pb_slide_description:after,
#et_builder_outer_content .et_pb_slide_description,
#et_builder_outer_content .et_pb_slide_description:before,
#et_builder_outer_content .et_pb_slide_description:after {
	background-color: <?php esc_html_e($color->rgba_str()); ?>;	
}
.et_pb_slide_description,
#et_builder_outer_content .et_pb_slide_description { 
	background-clip: content-box; 
}
.et_pb_slide_description:before,
.et_pb_slide_description:after { 
	content: ''; 
	display: block; 
	width: 100%; 
	height: 15px; 
}
.et_pb_slide_description:before { 
	margin-top:-15px; 
}
.et_pb_slide_description:after {  
	margin-bottom: -15px;
}

/* Rounded borders */
.et_pb_slide_description:before { 
	border-top-left-radius: <?php esc_html_e($border_radius); ?>px; 
	border-top-right-radius: <?php esc_html_e($border_radius); ?>px; 
}
.et_pb_slide_description:after { 
	border-bottom-left-radius: <?php esc_html_e($border_radius); ?>px; 
	border-bottom-right-radius: <?php esc_html_e($border_radius); ?>px; 
}

/* Layout adjustments */
.et_pb_more_button,
#et_builder_outer_content .et_pb_more_button { 
	margin-left: 15px; 
	margin-right: 15px; 
}
.db_pb_button_2,
#et_builder_outer_content .db_pb_button_2 {
	margin-left:15px !important;
}
.et_pb_slide_description .et_pb_slide_title {
	padding: 30px 30px 0 30px;
}
.et_pb_slide_description .et_pb_slide_content {
	padding: 0 30px 30px;
}
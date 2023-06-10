<?php 
namespace DiviBooster\PLUGIN\LearndashBottomBorderFix;

if (!defined('ABSPATH')) { exit(); } // No direct access

add_filter('et_module_shortcode_output', __NAMESPACE__.'\\fix_learndash_hiding_button_bottom_border', 10, 3);

function fix_learndash_hiding_button_bottom_border($output, $render_slug, $module) {
	
	if (!is_plugin_active('sfwd-lms/sfwd_lms.php')) { return $output; } // Exit if learndash not active
	
	$affected_modules = array(
		'et_pb_rrf_survey_details'
	);
	
	if (!in_array($render_slug, $affected_modules)) { return $output; }
	
	$hasCustomButtonStyles = (!empty($module->props['custom_button']) && $module->props['custom_button'] === 'on');
	$textColor = empty($module->props['button_text_color']) ? '#2ea3f2' : $module->props['button_text_color'];
	$borderColor = (!$hasCustomButtonStyles || empty($module->props['button_border_color'])) ? $textColor : $module->props['button_border_color'];
	$borderWidth = (!$hasCustomButtonStyles || empty($module->props['button_border_width'])) ? '2px' : $module->props['button_border_width'];

	// Override LearnDash's bottom border hiding code
	if (class_exists('ET_Builder_Element') && is_callable(array('ET_Builder_Element', 'set_style'))) {
		\ET_Builder_Element::set_style(
			$render_slug,
			array(
			'selector' => 'body %%order_class%% a.et_pb_button, %%order_class%% .et_pb_button_wrapper button',
			'declaration' => "border-bottom: {$borderWidth} solid {$borderColor} !important;transition: border-bottom 300ms ease 0ms;",
			)
		);
	}

	if (isset($module->props['button_border_hover_color'])) {
		$border_hover_color = $module->props['button_border_hover_color'];
	} else if (isset($module->props['button_text_hover_color'])) {
		$border_hover_color = $module->props['button_text_hover_color'];
	} else {
		$border_hover_color = 'transparent';
	}
	if (class_exists('ET_Builder_Element') && is_callable(array('ET_Builder_Element', 'set_style'))) {
		\ET_Builder_Element::set_style(
			$render_slug,
			array(
				'selector' => 'body %%order_class%% a.et_pb_button:hover, %%order_class%% .et_pb_button_wrapper button:hover',
				'declaration' => "border-bottom: {$borderWidth} solid {$border_hover_color} !important;transition: border-bottom 300ms ease 0ms;",
			)
		);
	}
	
	return $output;
}
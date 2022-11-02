<?php
namespace DiviBooster\DiviBooster;

if (function_exists('add_filter') && function_exists('add_action')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_gallery', __NAMESPACE__.'\\add_gallery_image_count_field');
    \add_filter('et_pb_gallery_advanced_fields', __NAMESPACE__.'\\add_advanced_fields', 10, 3);
    \add_filter('et_module_shortcode_output', __NAMESPACE__.'\\add_gallery_image_count', 10, 3);
    \add_action('wp_footer', __NAMESPACE__.'\\update_gallery_image_count');
}


function add_advanced_fields($fields, $slug, $main_css_element) {
    if (!is_array($fields) || !isset($fields['fonts'])) { return $fields; }
    $fields['fonts']['dbdb_image_count'] = array(
        'label'      => esc_html__( 'Image Count', 'divi-booster' ),
        'css'        => array(
            'main'       => "{$main_css_element} .dbdb-slide-counter",
            'hover'      => "{$main_css_element} .dbdb-slide-counter:hover",
            'text_align' => "{$main_css_element} .dbdb-slide-counter",
        ),
        'text_align' => array(
            'options' => function_exists('et_builder_get_text_orientation_options')?et_builder_get_text_orientation_options(array('justified')):array(),
        )
    );
    return $fields;
}

function add_gallery_image_count_field($fields) {
    if (!is_array($fields)) { return $fields; }
    return $fields + array(
        'dbdb_image_count' => array(
            'label'             => esc_html__( 'Show Image Count', 'et_builder' ),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__( 'Yes', 'et_builder' ),
                'off' => esc_html__( 'No', 'et_builder' ),
            ),
            'default'  => 'off',
			'toggle_slug'      => 'elements',
            'description'       => esc_html__( 'Display current image number / total images below the slider.', 'divi-booster' ),
            'show_if' => array(
                'fullwidth' => 'on',
            ),
        ),
    );
}


function add_gallery_image_count($output, $render_slug, $module) {
    if (!is_string($output)) { return $output; }
    if ($render_slug !== 'et_pb_gallery') { return $output; }
    if (!isset($module->props)) { return $output; }
    $props = $module->props;
    if (empty($props['fullwidth']) || $props['fullwidth'] !== 'on') { return $output; }
    if (empty($props['dbdb_image_count']) || $props['dbdb_image_count'] !== 'on') { return $output; }
	$total = substr_count($output, 'class="et_pb_gallery_item ');
	$counter = '<div class="dbdb-slide-counter"><span class="dbdb-slide-counter-active">1</span> '.esc_html__('of', 'divi-booster').' <span class="dbdb-slide-counter-total">'.esc_html($total).'</span></div>';
	$output = preg_replace('/<\/div>$/s', $counter.'</div>', $output);
	return $output;
}


function update_gallery_image_count() { ?>
<script>
jQuery(function($){
	function update($gallery) {
		setTimeout(
			function($gallery) {
				$gallery.find('.dbdb-slide-counter-active').text($gallery.find('.et-pb-active-slide').index()+1);
			},
			50,
			$gallery
		);
	}
	update($('.et_pb_gallery'));
	$(document).on('mouseup', '.et_pb_gallery .et-pb-slider-arrows a, .et_pb_gallery .et-pb-controllers a', 
		function () {
			update($(this).closest('.et_pb_gallery'));
		}
	);
});
</script>
<style>
.dbdb-slide-counter {
	position: absolute;
    width: 100%;
}
.et_pb_gallery {
	overflow: visible !important;
}
.et_pb_gallery_items {
	overflow: hidden;
}
</style>
<?php
}

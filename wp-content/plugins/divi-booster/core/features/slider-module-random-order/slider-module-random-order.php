<?php
namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_slider', __NAMESPACE__.'\\add_slide_random_order_field');
    \add_action('wp_footer', __NAMESPACE__.'\\add_slide_random_order_js');
    \add_filter( 'et_module_shortcode_output', __NAMESPACE__.'\\add_custom_class_to_slider', 10, 3 );
}

function add_slide_random_order_field($fields) {
    if (!is_array($fields)) { return $fields; }
    return $fields + array(
        'dbdb_randomize_slides' => array(
            'label'             => esc_html__( 'Randomize Slides', 'divi-booster' ),
            'type'              => 'yes_no_button',
            'option_category'   => 'configuration',
            'options'           => array(
                'on'  => esc_html__( 'Yes', 'et_builder' ),
                'off' => esc_html__( 'No', 'et_builder' ),
            ),
            'default'  => 'off',
			'toggle_slug'      => 'elements',
            'description'       => esc_html__( 'Enable this to shuffle the slide order each time the page is loaded. Added by Divi Booster.', 'divi-booster' ),
        ),
    );
}

function add_custom_class_to_slider( $output, $render_slug, $module ) {
    if (!is_string($output)) { return $output; }
    if ($render_slug !== 'et_pb_slider') { return $output; }
    if ( isset( $module->props['dbdb_randomize_slides'] ) && 'on' === $module->props['dbdb_randomize_slides'] ) {
        $output = preg_replace( '#(\<div\s*class\=\"[^"]*et_pb_module et_pb_slider\b)#', '$1 dbdb_slider_random', $output );
    }
    return $output;
}

function add_slide_random_order_js() { ?>
<script>
jQuery(document).ready(function($){
    $('.et_pb_slider.dbdb_slider_random').each(function() {
        var slides = $(this).find('.et_pb_slides');
        slides.children().sort(function() {return Math.random()-0.5;}).detach().appendTo(slides);
    });
});
</script>
<?php
}




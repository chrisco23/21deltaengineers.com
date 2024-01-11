<?php
namespace DiviBooster\DiviBooster\EmailOptionButtonAnimation;


function db_my_customizations($fields) {
    if (!is_array($fields)) { return $fields; }
    $fields['db_button_animation'] = array(
        'label'           => esc_html__('Button Animation', 'et_builder'),
        'type'            => 'select',
        'option_category' => 'configuration',
        'options'         => array(
            'off' => esc_html__('None', 'et_builder'),
            'rocking'  => esc_html__('Rocking', 'et_builder'),
        ),
        'default' => 'off',
        'tab_slug'      => 'advanced',
        'toggle_slug'   => 'button',
        'sub_toggle'    => 'button',
        'description'   => esc_html__('Choose whether to apply a tilt effect to the button.', 'et_builder'),
    );
    return $fields;
}

if (function_exists('add_filter')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_signup', __NAMESPACE__.'\\db_my_customizations');
}

if (function_exists('add_action')) {
    \add_action('wp_footer', __NAMESPACE__.'\\db_add_button_animation_effect');
}

function db_add_button_animation_effect() {
?>
<style>
.et_pb_newsletter .et_pb_newsletter_button.et_pb_button[data-db-button-animation="rocking"] {
    animation: dbRockingEffect 2s linear infinite;
    transition: transform 0.3s ease-in-out;
}
.et_pb_newsletter .et_pb_newsletter_button.et_pb_button[data-db-button-animation="rocking"]:hover {
    animation: none;
    transform: rotate(0deg);
}
@keyframes dbRockingEffect {
    0%, 60%, 100% { transform: rotate(0deg); }
    15% { transform: rotate(1.5deg); }
    45% { transform: rotate(-1.5deg); }
}
</style>
<?php
}

function db_filter_module_shortcode_properties($output, $render_slug, $module) {
    if (!is_string($output)) return $output;
    if ($render_slug !== 'et_pb_signup') return $output;
    $animation = isset($module->props['db_button_animation']) ? esc_attr($module->props['db_button_animation']) : 'off';
    if ($animation === 'rocking') {
        if (preg_match('/<a class="([^"]*et_pb_newsletter_button[^"]*)"/', $output, $matches)) {
            $new_class_attr_value = $matches[1] . '" data-db-button-animation="rocking';
            $output = str_replace($matches[1], $new_class_attr_value, $output);
        }
    }
    return $output;
}

if (function_exists('add_filter')) {
    \add_filter('et_module_shortcode_output', __NAMESPACE__.'\\db_filter_module_shortcode_properties', 20, 3);
}



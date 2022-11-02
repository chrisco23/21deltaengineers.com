<?php
namespace DiviBooster\DiviBooster;

if (function_exists('add_filter')) {
    \add_filter('et_pb_all_fields_unprocessed_et_pb_login', __NAMESPACE__.'\\add_login_custom_redirect_field');
    \add_filter('et_module_shortcode_output', __NAMESPACE__.'\\add_custom_redirect_url', 10, 3);

}

function add_login_custom_redirect_field($fields) {
    if (!is_array($fields)) { return $fields; }
    return $fields + array(
        'dbdb_custom_redirect_url' => array(
            'label'             => esc_html__( 'Custom Redirect URL', 'divi-booster' ),
            'type'              => 'text',
            'option_category'   => 'configuration',
            'default'  => '',
			'toggle_slug'      => 'redirect',
            'description'       => esc_html__( 'Enter a URL to redirect the user to on login, or leave blank for the default behavior. Added by Divi Booster.', 'divi-booster' ),
            'show_if' => array(
                'current_page_redirect' => 'off',
            ),
        ),
    );
}


function add_custom_redirect_url($output, $render_slug, $module) {

    if (!is_string($output)) { return $output; }
    if ($render_slug !== 'et_pb_login') { return $output; }
    if (!isset($module->props)) { return $output; }
    $props = $module->props;
    if (!empty($props['current_page_redirect']) && $props['current_page_redirect'] !== 'off') { return $output; }
    if (empty($props['dbdb_custom_redirect_url'])) { return $output; }
    if (is_user_logged_in()) { return $output; }

    $redirect_to = $props['dbdb_custom_redirect_url'];
    $output = preg_replace('/<input type="hidden" name="redirect_to"[^>]*>/s', '', $output);
    $output = str_replace('</form>', '<input type="hidden" name="redirect_to" value="'.esc_attr($redirect_to).'"/></form>', $output);
    return $output;
}


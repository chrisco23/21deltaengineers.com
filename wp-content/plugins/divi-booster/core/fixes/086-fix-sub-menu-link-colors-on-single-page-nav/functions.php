<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

function db086_user_css($plugin) {
    $fixed_menu_link_color = et_get_option('fixed_menu_link', 'rgba(0,0,0,0.6)');
?>
    <style>
        @media only screen and (min-width: 981px) {
            .et-fixed-header #top-menu .sub-menu li.current-menu-item>a {
                color: <?php esc_html_e($fixed_menu_link_color); ?> !important;
            }
        }
    </style>
<?php
}
add_action('wp_footer', 'db086_user_css');

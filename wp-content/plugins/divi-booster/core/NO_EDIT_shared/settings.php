<?php 
namespace DiviBooster\DiviBooster\Settings;

if (!defined('ABSPATH')) { exit(); } // No direct access

add_action('db-settings-settings-box-before', 'submit_button');

add_action('db-settings-title-after', __NAMESPACE__.'\output_settings_nav_tabs'); // Applies to all plugins

function output_settings_nav_tabs($plugin_slug) {
    
    // Only show the tabs for the current plugin
    $split_path = explode('/', plugin_basename(__FILE__));
    $current_plugin = array_shift($split_path);
    if ($current_plugin !== $plugin_slug) {
        return;
    }
    
    ?>
    <ul id="db-settings-box-tabs">
    <?php 
    $tabs = \apply_filters("db-settings-{$plugin_slug}-tabs", array());
    foreach($tabs as $k=>$tab) {
        $active = apply_filters("db-settings-{$plugin_slug}-active-tab", '');
        printf(
            '<li class="db-settings-box-tab %s"><a href="%s">%s</a></li>', 
            (($k===$active)?'db-settings-box-tab-active':''), 
            esc_attr($tab['url']), 
            esc_html($tab['title'])
        );
    }
    ?>
    </ul>
<?php
}

add_action('admin_head', __NAMESPACE__.'\output_settings_css');

function output_settings_css() { ?>
    <style>
    #db-settings-box-title {
        background: #6c2eb9;
        padding: 20px 26px 20px;
        line-height: .8;
        position: relative;
        border-radius: 3px 3px 0 0;
        font-weight: 600;
        font-size: 18px;
        color: rgb(255, 255, 255);
        background-color: #6c2eb9;
        border-bottom: 0px;
        line-height: 18px;
        margin-bottom: 0px;
        position: relative;
        padding-left: 30px;
    }
    .db-settings-wrap {
        margin: 20px 30px 30px 20px;
    }
    .db-settings-box-tab-content {
        background-color: white;
        padding: 30px !important;
        border-collapse: initial;
        margin-top: 0;
    }
    .db-settings-box-tab-content th {
        width: 30%;
    }
    #db-settings-box-tabs {
        background-color: #7e3bd0;
        color: white;
        margin-top: 0;
        margin-bottom: 0; 
    }
    #db-settings-box-tabs .db-settings-box-tab {
        display: inline-block;
        margin-bottom:0;
    }
    #db-settings-box-tabs .db-settings-box-tab a {
        display: inline-block;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        margin-bottom: 0;
        box-sizing: border-box;
        color: white;
        padding: 13px 26px;
        transition: all 0.3s;
        outline: 0;
        font-size: 14px;
        line-height: 14px;
        text-decoration: none;
    }
    #db-settings-box-tabs .db-settings-box-tab a:active,
    #db-settings-box-tabs .db-settings-box-tab a:focus {
        outline: none;
        box-shadow: none;
    }
    .db-settings-box-tab-active a {
        background-color: #8F42ED;
    }
    #db-settings-box-tabs .db-settings-box-tab:not(.db-settings-box-tab-active) a:hover {
        background-color: #7435c1;
    }
    .db-settings-wrap #submit {
        -webkit-transition: background .5s;
        -moz-transition: background .5s;
        transition: background .5s;
        color: #FFF;
        cursor: pointer;
        background-color: #00C3AA;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: none;
        padding: 0 20px;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        font-weight: 600;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        text-decoration: none;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        position: relative;
    }
    </style>
<?php
}

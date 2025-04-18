<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

function db004_user_css($plugin) { ?>
    /* Change header to float correctly wherever it is in the page */
    @media only screen and ( min-width:981px ) {
    body:not(.et_transparent_nav.et_non_fixed_nav) #main-header { position:relative !important; top:0px !important; } /* inline */
    #main-header.et-fixed-header { position:fixed !important; margin-bottom:0px; top:0px !important; } /* floating */
    body.admin-bar #main-header.et-fixed-header { top:32px !important; } /* adjust for WP admin bar */
    #page-container { overflow:hidden; } /* prevent sub-menus from breaking scrolling */

    /* Handle top header */
    #top-header { position:relative !important; top:0px !important; } /* inline header */
    }

    /* Style the image for full screen layouts */
    @media only screen and ( min-width:981px ) {

    #wtfdivi004-page-start-img { margin-bottom:0px; width:100%; }

    /* Override Divi JS padding adjustment */
    div#page-container[style],
    .et_fixed_nav.et_show_nav div#page-container {
    padding-top:0 !important;
    }

    /* Remove gap between heading and menu caused by line height */
    html body {
    line-height: 0;
    }
    html body * {
    line-height: 1.7em
    }
    }

    /* Style the image for box layout */
    @media only screen and ( min-width:981px ) {
    .et_boxed_layout #wtfdivi004-page-start-img {
    width: 90% !important;
    max-width: 1200px;
    margin: auto;
    -moz-box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display:block;
    }
    .et_boxed_layout #top-header,
    .et_boxed_layout #main-header {
    width: 100% !important;
    }
    }

    /* Hide the image on smaller screens */
    @media only screen and ( max-width:980px ) {
    #wtfdivi004-page-start-img { display:none !important; }
    }

    body:not(.dbdb_divi_2_4_up) .et_boxed_layout #wtfdivi004-page-start-img {
    width: 100% !important;
    }

    /* Divi 3.0 visual editor compatibility */
    .et-fb #page-container { overflow: visible; }

    /* Don't show on standard builder preview */
    .et-pb-preview #wtfdivi004-page-start-img { display: none !important; }

<?php
}
add_action('wp_head.css', 'db004_user_css');

function db004_user_js($plugin) { ?>
    jQuery(function($){
    $("#wtfdivi004-page-start-img").prependTo($("body")).show();
    $(".et_transparent_nav.et_non_fixed_nav #main-header").css('margin-top', (100*($("#wtfdivi004-page-start-img").height())/$("#wtfdivi004-page-start-img").width())+'%');
    });
<?php
}
add_action('wp_footer.js', 'db004_user_js');


function db004_user_footer($plugin) {
    list($name, $option) = $plugin->get_setting_bases(__FILE__); ?>
    <div style="display:none"><img id="wtfdivi004-page-start-img" src="<?php esc_attr_e(@$option['url']); ?>" onerror="this.style.display='none'" /></div>
<?php
}
add_action('wp_footer.txt', 'db004_user_footer');

// === Handle image link ===

function db004_add_link_to_img($plugin) {

    list($name, $option) = $plugin->get_setting_bases(__FILE__);

    if (empty($option['linkurl'])) {
        return;
    }

    $url = $option['linkurl'];

    // Append protocol if missing
    if (!preg_match('#^(http:|https:|tel:|skype:|/)#', $url)) {
        $url = "http://$url";
    }

    // Apply the link
?>
    jQuery(function($){
    $("#wtfdivi004-page-start-img").click(function(){
    window.location.href = "<?php esc_attr_e($url); ?>";
    });
    });
<?php
}
add_action('wp_footer.js', 'db004_add_link_to_img');

function db004_apply_link_css($plugin) {
    list($name, $option) = $plugin->get_setting_bases(__FILE__);
    if (empty($option['linkurl'])) {
        return;
    }

?>
    #wtfdivi004-page-start-img:hover { cursor: pointer; }
<?php
}
add_action('wp_head.css', 'db004_apply_link_css');

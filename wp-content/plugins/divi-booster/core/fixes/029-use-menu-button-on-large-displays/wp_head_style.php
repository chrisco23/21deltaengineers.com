<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access

?>
@media only screen and ( min-width:980px ) {
#et_mobile_nav_menu {
display:block !important;
}

body:not(.dbdb_divi_2_4_up) #et_mobile_nav_menu {
margin-bottom:20px;
margin-top:6px;
}

body.dbdb_divi_2_4_up .mobile_menu_bar {
margin-top:-6px;
margin-bottom:-3px;
}

#top-menu-nav { display:none; }
.et-fixed-header #et_mobile_nav_menu { margin-bottom:0; }

/* set the width, and right align */
#mobile_menu { max-width: 400px; right: 0; left:auto; }
}

<?php
// Set the menu button color
list($name, $option) = $this->get_setting_bases(__FILE__);
if (!empty($option['color'])) {
?>
    @media only screen and (min-width: 981px) {
    #et_mobile_nav_menu .mobile_menu_bar:before {
    color: <?php esc_html_e($option['color']); ?>;
    }
    }
<?php
}
?>

/* === Centered menu === */

@media only screen and (min-width: 981px) {
body.et_header_style_centered #et-top-navigation {
display: flex;
flex-direction: row-reverse;
justify-content: center;
}

body.et_header_style_centered #et_mobile_nav_menu {
float:none;
display: inline-block !important;
margin-bottom: 20px !important;
}

body.et_header_style_centered #et_top_search {
display: inline-block !important;
}

body.et_header_style_centered #et_search_icon:before {
top: -3px;
}

body.et_header_style_centered #main-header .et_search_form_container {
min-width: 400px;
}

body.et_header_style_centered #mobile_menu {
left: calc(50% - 200px);
right: auto;
top: 40px;
}

body.et_header_style_centered #top-menu-nav {
display: none !important;
}

}
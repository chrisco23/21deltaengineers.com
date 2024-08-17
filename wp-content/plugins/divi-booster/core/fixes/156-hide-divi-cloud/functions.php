<?php 
if (!defined('ABSPATH')) { exit(); } // No direct access

function dbdb156_remove_divi_cloud_css() {

	if (is_admin() || (isset($_GET['et_fb']) && $_GET['et_fb'] === '1')) {
?>
<style>
/* === Hide Divi Cloud === */

/* Remove "Sign In To Divi Cloud" button on Load from Library modal */
.et-cloud-toggle {
    display: none !important;
}
.et-cloud-app-sort-menu {
    margin-right: 0 !important;
}

/* Remove Divi Cloud upsells */
.et-cloud-app__upsell {
    display: none !important;
}

/* Hide Divi Cloud in "Add To Module Library" modal */
.et_fb_save_module_modal .et-fb-settings-options > .et-fb-settings-option:nth-of-type(2) {
    display: none !important;
}

/* Hide Divi Cloud in "Save Theme Builder Template */
.et-tb-library-save-modal .et-tb-library-save-modal-options > .et-tb-library-save-option:nth-last-of-type(4) {
	display: none !important;
}

/* Hide Divi Cloud in "Save HTML/JS Snippet" modal */
.et-save-to-library-modal .et-common-prompt__content > .et-save-to-library-option:nth-of-type(2) {
	display: none !important;
}

/* Remove Divi Cloud from module right-click menu */
.et-fb-right-click-menu__item--saveCloud {
	display: none !important;
}

/* === End: Hide Divi Cloud === */	
</style>
<?php
    }
}
add_action('admin_footer', 'dbdb156_remove_divi_cloud_css');
add_action('wp_footer', 'dbdb156_remove_divi_cloud_css');
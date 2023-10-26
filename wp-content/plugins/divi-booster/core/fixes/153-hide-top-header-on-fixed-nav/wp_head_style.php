<?php
if (!defined('ABSPATH')) { exit(); } // No direct access
?>
@media only screen and (min-width: 981px) {
	.et_fixed_nav #top-header.et-fixed-header {
		transform: translateY(-100%) !important;
	}
	.et_fixed_nav #top-header.et-fixed-header * {
		opacity: 0;
	}
	.et_fixed_nav #main-header.et-fixed-header {
		top: 0 !important;
	}
	.et_fixed_nav.admin-bar #main-header.et-fixed-header {
		top: 32px !important;
	}
	.et_fixed_nav #top-header, 
	.et_fixed_nav #main-header, 
	.et_fixed_nav #top-header * {
		transition: all 0.4s !important;
	}
}

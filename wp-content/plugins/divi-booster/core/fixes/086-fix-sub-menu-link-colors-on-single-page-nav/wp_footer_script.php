<?php
if (!defined('ABSPATH')) {
    exit();
} // No direct access
?>
jQuery(document).ready(function($) {
function updateMenuClasses() {
const currentUrl = window.location.href;

// Remove 'current-menu-item' and 'current-menu-ancestor' classes first
$('#top-menu li').removeClass('current-menu-item current-menu-ancestor');

// Add 'current-menu-item' to matching links
$('#top-menu li').each(function() {
const link = $(this).find('a').attr('href');
if (link === currentUrl) {
$(this).addClass('current-menu-item');
}
});

// Add 'current-menu-ancestor' class to parents of items with 'current-menu-item'
$('#top-menu li').each(function() {
if ($(this).find('.current-menu-item').length > 0) {
$(this).addClass('current-menu-ancestor');
}
});
}

updateMenuClasses();

// Update classes and address bar when a menu item is clicked
$('#top-menu li a').on('click', function(e) {
const newUrl = $(this).attr('href');

// Update the address bar
history.pushState(null, '', newUrl);

// Update classes with the new URL
updateMenuClasses();
});
});
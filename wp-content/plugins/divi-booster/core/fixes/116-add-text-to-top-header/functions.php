<?php

add_action('wp_footer', 'db116_add_top_header_text_by_jquery');
add_action('wp_head.css', 'db116_add_top_header_text_css');

add_filter('dbdb-load-secondary-nav-assets', '__return_true');
add_filter('body_class', 'db116_top_header_enabled_body_class');

function db116_top_header_enabled_body_class($classes) {
    if (is_array($classes)) {
        $classes[] = 'et_secondary_nav_enabled';
    }
    return $classes;
}

function db116_add_top_header_text_by_jquery() { ?>
    <script>
        // Divi Booster: Add top header text
        jQuery(function($) {
            if (!$('#et-info').length) {
                if (!($('#top-header').length)) {
                    $('#page-container').prepend('<div id="top-header"><div class="container clearfix"></div></div>');
                }
                $('#top-header .container').prepend('<div id="et-info"></div>');
            }
            if (!$('#db-info-text').length) {
                $('#et-info').prepend('<span id="db-info-text">' + <?php echo json_encode(db116_header_text()); ?> + '</span>');
            }
        });
    </script>
<?php
}

function db116_header_text() {
    $text = dbdb_option('116-add-text-to-top-header', 'topheadertext', '');
    $text = apply_filters('dbdb_option_value', $text, '116-add-text-to-top-header', 'topheadertext'); // allow for WPML translation
    return do_shortcode($text);
}

function db116_add_top_header_text_css() {
?>
    #db-info-text { margin:0 10px; }
    #et-info-phone {
    white-space: nowrap !important;
    }
<?php
}

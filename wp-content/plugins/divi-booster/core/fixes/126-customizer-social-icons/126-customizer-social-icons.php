<?php

namespace DiviBooster\DiviBooster\Fixes\CustomizerSocialIcons;

// === Enable the fix by default as exists outside of the main settings ===

add_filter('dbdb_enabled_by_default', __NAMESPACE__ . '\\enable_by_default');

function enable_by_default($fix_slugs) {
    if (is_array($fix_slugs)) {
        $fix_slugs[] = '126-customizer-social-icons';
    }
    return $fix_slugs;
}

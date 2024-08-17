<?php

namespace DiviBooster\GalleryBooster\GridImageSizes;

use \DiviBooster\GalleryBooster as Gallery;

if (function_exists('add_filter')) {
    \add_filter('divi_booster/gallery_booster/gallery_module_fields', __NAMESPACE__ . '\\dbmo_et_pb_gallery_add_fields');
    \add_filter('divi_booster/gallery_booster/gallery_output', array((new DBDBGallery()), 'db_pb_gallery_filter_content'), 10, 3);
}

function divibooster_clear_module_local_storage() {
    add_action('admin_head', 'divibooster_remove_from_local_storage');
}
function divibooster_remove_from_local_storage() {

    global $divibooster_module_shortcodes;

    foreach ($divibooster_module_shortcodes as $etsc => $dbsc) {
        echo "<script>localStorage.removeItem('et_pb_templates_" . esc_attr($etsc) . "');</script>";
    }
}

function dbmo_et_pb_gallery_register_fields($fields) {
    $fields[] = 'db_images_per_row';
    $fields[] = 'db_images_per_row_tablet';
    $fields[] = 'db_images_per_row_phone';
    $fields[] = 'db_image_max_width';
    $fields[] = 'db_image_max_width_tablet';
    $fields[] = 'db_image_max_width_phone';
    $fields[] = 'db_image_max_height';
    $fields[] = 'db_image_max_height_tablet';
    $fields[] = 'db_image_max_height_phone';
    $fields[] = 'db_image_row_spacing';
    $fields[] = 'db_image_row_spacing_tablet';
    $fields[] = 'db_image_row_spacing_phone';
    $fields[] = 'db_image_center_titles';
    $fields[] = 'db_image_object_fit';
    $fields[] = 'dbdb_version';
    return $fields;
}

function dbmo_et_pb_gallery_add_fields($fields) {
    if (!is_array($fields)) {
        return $fields;
    }
    $new_fields = array();
    foreach ($fields as $k => $v) {
        $new_fields[$k] = $v;
        if ($k === 'posts_number') { // Add after post number option

            // Images per row
            $new_fields['db_images_per_row'] = array(
                'label' => 'Images Per Row',
                'type' => 'text',
                'option_category' => 'layout',
                'description' => 'Define the number of images to show per row. ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '',
                'mobile_options'  => true,
                'tab_slug'        => 'advanced',
                'toggle_slug'        => 'layout',
                'show_if' => array(
                    'fullwidth' => 'off'
                )

            );
            $new_fields['db_images_per_row_tablet'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );
            $new_fields['db_images_per_row_phone'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );

            // Max width
            $new_fields['db_image_max_width'] = array(
                'label' => 'Image Area Width',
                'type' => 'range',
                'range_settings'  => array(
                    'min'  => '1',
                    'max'  => '100',
                    'step' => '1',
                ),
                'option_category' => 'layout',
                'description' => 'Define the width of the area of the box containing the image (as % of available width). ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '83.5',
                'default_unit' => '%',
                'mobile_options'  => true,
                'tab_slug' => 'advanced',
                'toggle_slug' => 'layout',
                'show_if' => array(
                    'fullwidth' => 'off'
                )

            );
            $new_fields['db_image_max_width_tablet'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );
            $new_fields['db_image_max_width_phone'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );


            // Max height
            $new_fields['db_image_max_height'] = array(
                'label' => 'Image Area Height',
                'type' => 'range',
                'range_settings'  => array(
                    'min'  => '1',
                    'max'  => '1000',
                    'step' => '1',
                ),
                'option_category' => 'layout',
                'description' => 'Define the height of the area of the box containing the image (as % of box width). ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '',
                'default_unit' => '%',
                'mobile_options'  => true,
                'tab_slug'        => 'advanced',
                'toggle_slug'        => 'layout',
                'show_if' => array(
                    'fullwidth' => 'off'
                )

            );
            $new_fields['db_image_max_height_tablet'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );
            $new_fields['db_image_max_height_phone'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );


            // Row spacing
            $new_fields['db_image_row_spacing'] = array(
                'label' => 'Image Row Spacing',
                'type' => 'range',
                'range_settings'  => array(
                    'min'  => '0',
                    'max'  => '100',
                    'step' => '1',
                ),
                'option_category' => 'layout',
                'description' => 'Define the space between rows (as % of content width). ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '5.5',
                'default_unit' => '%',
                'mobile_options'  => true,
                'tab_slug'        => 'advanced',
                'toggle_slug'        => 'layout',
                'show_if' => array(
                    'fullwidth' => 'off'
                )

            );
            $new_fields['db_image_row_spacing_tablet'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );
            $new_fields['db_image_row_spacing_phone'] = array(
                'type' => 'skip',
                'tab_slug' => 'advanced',
                'default' => '',
            );

            // Center titles
            $new_fields['db_image_center_titles'] = array(
                'label' => 'Title Alignment',
                'type'            => 'select',
                'option_category' => 'layout',
                'options' => array(
                    'left'   => esc_html__('Left', 'et_builder'),
                    'center' => esc_html__('Center', 'et_builder'),
                    'right'  => esc_html__('Right', 'et_builder'),
                ),
                'default'           => 'off',
                'description' => 'Adjust the image title text alignment. ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '',
                'tab_slug' => 'advanced',
                'toggle_slug'        => 'title'
            );

            // Object fit
            $new_fields['db_image_object_fit'] = array(
                'label' => 'Image Scaling',
                'type' => 'select',
                'options'         => array(
                    'initial' => esc_html__('Fill', 'et_builder'),
                    'cover'   => esc_html__('Cover', 'et_builder'),
                    'contain' => esc_html__('Fit', 'et_builder'),
                    'none' => esc_html__('Actual Size', 'et_builder'),
                ),
                'default'         => 'initial',
                'option_category' => 'layout',
                'description' => 'Choose how the image fills its bounding box. ' . Gallery\dbgb_added_by_gallery_booster(),
                'default' => '',
                'tab_slug' => 'advanced',
                'toggle_slug'        => 'layout',
                'show_if' => array(
                    'fullwidth' => 'off'
                )
            );

            $new_fields['dbdb_version'] = array(
                'label' => 'Divi Booster Version',
                'type' => 'hidden',
                'default' => ''
            );
        }
    }
    return $new_fields;
}

// Add "edited with" booster version attribute
if (function_exists('add_filter')) {
    add_filter('dbdb_et_pb_module_shortcode_attributes', __NAMESPACE__ . '\\db_pb_gallery_add_booster_version', 10, 3);
}

function db_pb_gallery_add_booster_version($props, $attrs, $render_slug) {
    if ($render_slug === 'et_pb_gallery' && is_array($props) && isset($_GET['et_fb']) && $_GET['et_fb'] === '1') {
        $props['dbdb_version'] = (defined('BOOSTER_VERSION') ? BOOSTER_VERSION : '4.6.0'); // If not defined (e.g. using gallery booster), then set a fixed version that will trigger the new defaults
    }
    return $props;
}


class DBDBGallery {

    private $gridItem = '.et_pb_gallery_item.et_pb_grid_item';

    // Apply gallery options
    function db_pb_gallery_filter_content($content, $render_slug, $module) {
        if (!is_string($content)) {
            return $content;
        }
        if (!isset($module->props) || !is_array($module->props)) {
            return $content;
        }
        $args = $module->props;

        // Handle presets
        if (class_exists('ET_Builder_Global_Presets_Settings') && is_callable('ET_Builder_Global_Presets_Settings::instance')) {
            $preset = \ET_Builder_Global_Presets_Settings::instance();
            if (is_callable(array($preset, 'get_module_presets_settings'))) {
                $defaults = $preset->get_module_presets_settings('et_pb_gallery', $args);
                $args = wp_parse_args($args, $defaults);
            }
        }

        // Images per row
        if (!empty($args['db_images_per_row'])) {
            $media_queries = array(
                'db_images_per_row' => '(min-width: 981px)',
                'db_images_per_row_tablet' => '(min-width: 768px) and (max-width: 980px)',
                'db_images_per_row_phone' => '(max-width: 767px)'
            );

            foreach ($media_queries as $k => $media_query) {
                if (!empty($args[$k]) && ($num = abs(intval($args[$k])))) {

                    $width = 100 / $num;

                    $this->set_module_style('et_pb_gallery', array(
                        'selector'    => ".et_pb_column %%order_class%% {$this->gridItem}",
                        'declaration' => 'margin-right: 0 !important; width: ' . $width . '% !important; clear: none !important;',
                        'media_query' => '@media only screen and ' . $media_query
                    ));
                    $this->set_module_style('et_pb_gallery', array(
                        'selector'    => ".et_pb_column %%order_class%% {$this->gridItem}:nth-of-type({$num}n+1)",
                        'declaration' => 'clear: both !important;',
                        'media_query' => '@media only screen and ' . $media_query
                    ));
                }
            }
        }

        // Get the order class
        $class = $this->get_order_class_from_content('et_pb_gallery', $content);

        if (!$class) {
            return $content;
        }

        $css = '';
        $galleryItem = ".{$class} {$this->gridItem}";

        // Set defaults
        $useNewDefaults = (!empty($args['dbdb_version']) && version_compare($args['dbdb_version'], '3.2.6', '>='));
        if (!empty($args['db_images_per_row']) && (!isset($args['db_image_max_width']) || $args['db_image_max_width'] === '83.5')) {
            $args['db_image_max_width'] = $useNewDefaults ? '83.5%' : '100%';
        }
        if (!empty($args['db_images_per_row']) && (!isset($args['db_image_row_spacing']) || $args['db_image_row_spacing'] === '5.5')) {
            $args['db_image_row_spacing'] = $useNewDefaults ? '5.5%' : '0%';
        }

        // Max width
        if (!empty($args['db_image_max_width'])) {
            $media_queries = array(
                'db_image_max_width' => '(min-width: 981px)',
                'db_image_max_width_tablet' => '(min-width: 768px) and (max-width: 980px)',
                'db_image_max_width_phone' => '(max-width: 767px)'
            );
            foreach ($media_queries as $k => $mq) {
                if (isset($args[$k])) {
                    $num = esc_html($args[$k]);

                    // If $num is just a number (no unit), add "%"
                    if (is_numeric($num)) {
                        $num .= '%';
                    }

                    $css .= "
                        @media only screen and {$mq} {
                            .et_pb_column {$galleryItem} .et_pb_gallery_title, 
                            .et_pb_column {$galleryItem} .et_pb_gallery_image { 
                                max-width: {$num}; 
                                margin-left: auto !important; 
                                margin-right: auto !important; 
                            }
                            .et_pb_column {$galleryItem} .et_pb_gallery_image img {
                                width: 100%; 
                            }
                        }
                    ";
                }
            }
        }

        // Max Height
        if (!empty($args['db_image_max_height'])) {

            $media_queries = array(
                'db_image_max_height' => '(min-width: 981px)',
                'db_image_max_height_tablet' => '(min-width: 768px) and (max-width: 980px)',
                'db_image_max_height_phone' => '(max-width: 767px)'
            );
            foreach ($media_queries as $k => $mq) {
                if (!empty($args[$k]) && ($num = abs(intval($args[$k])))) {

                    $css .= "
                        @media only screen and {$mq} {
                            .et_pb_column {$galleryItem} .et_pb_gallery_image { 
                                position: relative;
                                padding-bottom: {$num}%;
                                height: 0;
                                overflow: hidden;
                            }
                            .et_pb_column {$galleryItem} .et_pb_gallery_image img { 
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    ";
                }
            }
        }

        // Row spacing
        if (isset($args['db_image_row_spacing'])) {
            $media_queries = array(
                'db_image_row_spacing' => '(min-width: 981px)',
                'db_image_row_spacing_tablet' => '(min-width: 768px) and (max-width: 980px)',
                'db_image_row_spacing_phone' => '(max-width: 767px)'
            );
            foreach ($media_queries as $k => $mq) {
                if (isset($args[$k])) {
                    $num = esc_html($args[$k]);
                    $css .= "
                        @media only screen and {$mq} {
                            .et_pb_column {$galleryItem} { 
                                margin-bottom: {$num} !important; 
                            }
                        }
                    ";
                }
            }
        }

        // Center image titles
        if (!empty($args['db_image_center_titles'])) {

            $align = $args['db_image_center_titles'];

            $css .= "
                /* Center titles */
                .et_pb_column {$galleryItem} .et_pb_gallery_title {
                    text-align: {$align};
                }
            ";
        }

        // Object fit
        if (!empty($args['db_image_object_fit'])) {

            $object_fit = $args['db_image_object_fit'];

            $css .= $this->dbdbGallery_objectFitCss($galleryItem, $object_fit);
        }

        if (!empty($css)) {
            $content .= "<style>$css</style>";
        }

        // Disable image cropping when image area / scaling modified
        if (!empty($args['db_image_max_height'])) {
            $content .= <<<END
            <script>jQuery(function($){
                var items = $("{$galleryItem}");
                items.each(function() {
                    var href = $(this).find('a').attr('href');
                    $(this).find('a > img').attr('src', href).attr('srcset', '').attr('sizes', '');
                });
                
            });
            </script>
END;
        }

        return $content;
    }

    function set_module_style($module_slug, $style) {
        if (is_callable('ET_Builder_Module::set_style')) {
            \ET_Builder_Module::set_style($module_slug, $style);
        }
    }

    // Get the order class from a list of module classes
    // Return false if no order class found
    function get_order_class_from_content($module_slug, $content) {
        $classes = $this->get_classes_from_content($content);
        foreach ($classes as $class) {
            if (preg_match("#^{$module_slug}_\d+$#", $class)) {
                return $class;
            }
            if (preg_match("#^{$module_slug}_\d_tb_header$#", $class)) {
                return $class;
            }
            if (preg_match("#^{$module_slug}_\d_tb_footer$#", $class)) {
                return $class;
            }
        }
        return false;
    }

    // get the classes assigned to the module
    function get_classes_from_content($content) {
        preg_match('#<div [^>]*class="([^"]*?et_pb_module [^"]*?)">#', $content, $m);
        $classes = empty($m[1]) ? array() : explode(' ', $m[1]);
        return $classes;
    }

    function dbdbGallery_objectFitCss($galleryItemSelector, $objectFit) {
        return "{$galleryItemSelector} .et_pb_gallery_image img { object-fit: {$objectFit} !important; }";
    }
}

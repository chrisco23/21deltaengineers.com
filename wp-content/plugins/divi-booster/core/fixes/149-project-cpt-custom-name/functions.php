<?php

function db149_projects_custom_slug($args) {
    $slug = dbdb_option('149-project-cpt-custom-name', 'slug', 'project');
    $slug = sanitize_title($slug, 'project');
    if (is_array($args) && !empty($slug)) {
        $args['slug'] = $slug;
    }
    return $args;
}
add_filter('et_project_posttype_rewrite_args', 'db149_projects_custom_slug');

function db149_projects_custom_name($args) {
    $name_singular = dbdb_option('149-project-cpt-custom-name', 'name', 'Project');
    $name_plural = dbdb_option('149-project-cpt-custom-name', 'name_plural', 'Projects');
    if (isset($args['labels']) && is_array($args['labels'])) {
        if (!empty($name_plural) && $name_plural !== 'Projects') {
            $args['labels']['name'] = esc_html__($name_plural, 'et_builder');
            $args['labels']['search_items'] = esc_html__("Search {$name_plural}", 'et_builder');
            $args['labels']['all_items'] = esc_html__("All {$name_plural}", 'et_builder');
        }
        if (!empty($name_singular) && $name_singular !== 'Project') {
            $args['labels']['singular_name'] = esc_html__($name_singular, 'et_builder');
            $args['labels']['add_new_item'] = esc_html__("Add New {$name_singular}", 'et_builder');
            $args['labels']['edit_item'] = esc_html__("Edit {$name_singular}", 'et_builder');
            $args['labels']['new_item'] = esc_html__("New {$name_singular}", 'et_builder');
            $args['labels']['view_item'] = esc_html__("View {$name_singular}", 'et_builder');
        }
    }
    return $args;
}
add_filter('et_project_posttype_args', 'db149_projects_custom_name');

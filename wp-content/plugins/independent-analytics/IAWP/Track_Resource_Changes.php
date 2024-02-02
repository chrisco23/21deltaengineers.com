<?php

namespace IAWP_SCOPED\IAWP;

use IAWP_SCOPED\IAWP\Models\Page_Author_Archive;
use IAWP_SCOPED\IAWP\Models\Page_Post_Type_Archive;
use IAWP_SCOPED\IAWP\Models\Page_Singular;
use IAWP_SCOPED\IAWP\Models\Page_Term_Archive;
use IAWP_SCOPED\Proper\Periodic;
/** @internal */
class Track_Resource_Changes
{
    public function __construct()
    {
        \add_action('wp_after_insert_post', [$this, 'handle_updated_post'], 10, 1);
        \add_action('profile_update', [$this, 'handle_updated_author']);
        \add_action('edit_term', [$this, 'handle_updated_term']);
        if (Periodic::check('iawp_last_updated_post_type_cache', 'PT1M')) {
            \add_action('registered_post_type', [$this, 'handle_registered_post_type']);
        }
    }
    public function handle_updated_post($post_id)
    {
        $post = \get_post($post_id);
        if (\is_null($post) || $post->post_status === 'trash') {
            return;
        }
        $row = (object) ['resource' => 'singular', 'singular_id' => $post_id];
        $page = new Page_Singular($row);
        $page->update_cache();
        global $wpdb;
        $campaigns_table = Query::get_table_name(Query::CAMPAIGNS);
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $views_table = Query::get_table_name(Query::VIEWS);
        $resources_table = Query::get_table_name(Query::RESOURCES);
        $wpdb->query($wpdb->prepare("\n                UPDATE {$campaigns_table} AS campaigns\n                JOIN {$sessions_table} AS sessions ON campaigns.campaign_id = sessions.campaign_id\n                JOIN {$views_table} AS views ON sessions.session_id = views.session_id\n                JOIN {$resources_table} AS resources ON views.resource_id = resources.id\n                SET campaigns.landing_page_title = resources.cached_title\n                WHERE resources.singular_id = %d \n            ", $post_id));
    }
    public function handle_updated_author($user_id)
    {
        $row = (object) ['resource' => 'author', 'author_id' => $user_id];
        $page = new Page_Author_Archive($row);
        $page->update_cache();
    }
    public function handle_registered_post_type($post_type)
    {
        $post_type_object = \get_post_type_object($post_type);
        if ($post_type_object->_builtin == \false) {
            $row = (object) ['resource' => 'post_type_archive', 'post_type' => $post_type];
            $page = new Page_Post_Type_Archive($row);
            $page->update_cache();
        }
    }
    // Works for tag, categories, and custom taxonomies. Keep in mind that terms for custom taxonomies might just
    //   disappear if the custom taxonomy is not registered the next time around.
    public function handle_updated_term($term_id)
    {
        // Term must be cleared from the cache in order to use the new term data
        \clean_term_cache($term_id);
        $row = (object) ['term_id' => $term_id];
        $page = new Page_Term_Archive($row);
        $page->update_cache();
        $posts = \get_posts(['post_type' => \get_post_types(), 'category' => $term_id, 'numberposts' => -1]);
        // Update cache for all singulars associated with a given term
        foreach ($posts as $post) {
            $row = (object) ['resource' => 'singular', 'singular_id' => $post->ID];
            $page = new Page_Singular($row);
            $page->update_cache();
        }
    }
}

<?php

namespace IAWP_SCOPED\IAWP;

use IAWP_SCOPED\IAWP\Models\Page;
use IAWP_SCOPED\IAWP\Models\Visitor;
use IAWP_SCOPED\IAWP\Utils\Device;
use IAWP_SCOPED\IAWP\Utils\String_Util;
use IAWP_SCOPED\IAWP\Utils\URL;
/** @internal */
class View
{
    private $payload;
    private $referrer_url;
    private $visitor;
    private $campaign_fields;
    private $viewed_at;
    private $resource;
    private $session;
    /**
     * @param array $payload
     * @param string|null $referrer_url
     * @param Visitor $visitor
     * @param array $campaign_fields
     * @param \DateTime|null $viewed_at
     */
    public function __construct(array $payload, ?string $referrer_url, Visitor $visitor, array $campaign_fields, ?\DateTime $viewed_at = null)
    {
        $this->payload = $payload;
        $this->referrer_url = \is_null($referrer_url) ? '' : \trim($referrer_url);
        $this->visitor = $visitor;
        $this->campaign_fields = $campaign_fields;
        $this->viewed_at = $viewed_at instanceof \DateTime ? $viewed_at : new \DateTime();
        $this->resource = $this->fetch_or_create_resource();
        $this->session = $this->fetch_or_create_session();
        $view_id = $this->create_view();
        $this->link_with_previous_view($view_id);
        $this->set_session_total_views();
        $this->set_sessions_initial_view($view_id);
        $this->set_sessions_final_view($view_id);
    }
    /**
     * @return int ID of newly created session
     */
    public function create_session() : int
    {
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        return Illuminate_Builder::get_builder()->from($sessions_table)->insertGetId(['visitor_id' => $this->visitor->id(), 'referrer_id' => $this->fetch_or_create_referrer(), 'country_id' => $this->fetch_or_create_country(), 'city_id' => $this->fetch_or_create_city(), 'campaign_id' => $this->get_campaign(), 'device_type_id' => Device::getInstance()->type_id(), 'device_os_id' => Device::getInstance()->os_id(), 'device_browser_id' => Device::getInstance()->browser_id(), 'created_at' => $this->viewed_at()]);
    }
    /**
     * Fetch the last view, if any.
     *
     * @return int|null
     */
    public function fetch_last_viewed_resource() : ?int
    {
        global $wpdb;
        $views_table = Query::get_table_name(Query::VIEWS);
        $session = Query::query('sessions/get_current_session', ['visitor_id' => $this->visitor->id()])->row();
        if (\is_null($session)) {
            return null;
        }
        $view = $wpdb->get_row($wpdb->prepare("\n                SELECT * FROM {$views_table} WHERE session_id = %d ORDER BY viewed_at DESC LIMIT 1\n            ", $session->session_id));
        if (\is_null($view)) {
            return null;
        }
        return $view->resource_id;
    }
    public function fetch_or_create_country() : ?int
    {
        if (!$this->visitor->geoposition()->valid_location()) {
            return null;
        }
        Query::query('create_country', ['country_code' => $this->visitor->geoposition()->country_code(), 'country' => $this->visitor->geoposition()->country(), 'continent' => $this->visitor->geoposition()->continent()]);
        $country = Query::query('get_country', ['country_code' => $this->visitor->geoposition()->country_code(), 'country' => $this->visitor->geoposition()->country(), 'continent' => $this->visitor->geoposition()->continent()])->row();
        if (\is_null($country)) {
            return null;
        }
        return $country->country_id;
    }
    public function fetch_or_create_city() : ?int
    {
        if (!$this->visitor->geoposition()->valid_location()) {
            return null;
        }
        $country_id = $this->fetch_or_create_country();
        $cities_table = Query::get_table_name(Query::CITIES);
        $city_id = Illuminate_Builder::get_builder()->from($cities_table)->where('country_id', $country_id)->where('subdivision', $this->visitor->geoposition()->subdivision())->where('city', $this->visitor->geoposition()->city())->value('city_id');
        if (!\is_null($city_id)) {
            return $city_id;
        }
        Illuminate_Builder::get_builder()->from($cities_table)->insertOrIgnore(['country_id' => $country_id, 'subdivision' => $this->visitor->geoposition()->subdivision(), 'city' => $this->visitor->geoposition()->city()]);
        return Illuminate_Builder::get_builder()->from($cities_table)->where('country_id', $country_id)->where('subdivision', $this->visitor->geoposition()->subdivision())->where('city', $this->visitor->geoposition()->city())->value('city_id');
    }
    private function viewed_at() : string
    {
        return $this->viewed_at->format('Y-m-d\\TH:i:s');
    }
    private function link_with_previous_view($view_id) : void
    {
        global $wpdb;
        $views_tables = Query::get_table_name(Query::VIEWS);
        $session = Query::query('sessions/get_session', ['session_id' => $this->session])->row();
        if (\is_null($session)) {
            return;
        }
        $final_view_id = $session->final_view_id;
        $initial_view_id = $session->initial_view_id;
        if (!\is_null($final_view_id)) {
            $wpdb->update($views_tables, ['next_view_id' => $view_id, 'next_viewed_at' => $this->viewed_at()], ['id' => $final_view_id]);
        } elseif (!\is_null($initial_view_id)) {
            $wpdb->update($views_tables, ['next_view_id' => $view_id, 'next_viewed_at' => $this->viewed_at()], ['id' => $initial_view_id]);
        }
    }
    private function set_session_total_views()
    {
        global $wpdb;
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $views_table = Query::get_table_name(Query::VIEWS);
        $wpdb->query($wpdb->prepare("\n                    UPDATE {$sessions_table} AS sessions\n                    LEFT JOIN (\n                        SELECT\n                            session_id,\n                            COUNT(*) AS view_count\n                        FROM\n                            {$views_table} AS views\n                        WHERE\n                            views.session_id = %d\n                        GROUP BY\n                            session_id) AS view_counts ON sessions.session_id = view_counts.session_id\n                    SET\n                        sessions.total_views = COALESCE(view_counts.view_count, 0)\n                    WHERE sessions.session_id = %d\n                ", $this->session, $this->session));
    }
    private function set_sessions_initial_view(int $view_id)
    {
        global $wpdb;
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $wpdb->query($wpdb->prepare("UPDATE {$sessions_table} SET initial_view_id = %d WHERE session_id = %d AND initial_view_id IS NULL", $view_id, $this->session));
    }
    private function set_sessions_final_view(int $view_id)
    {
        global $wpdb;
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $wpdb->query($wpdb->prepare("\n                    UPDATE {$sessions_table} AS sessions\n                    SET\n                        sessions.final_view_id = %d,\n                        sessions.ended_at = %s\n                    WHERE sessions.session_id = %d AND sessions.initial_view_id IS NOT NULL AND sessions.initial_view_id != %d\n                ", $view_id, $this->viewed_at(), $this->session, $view_id));
    }
    private function create_view() : ?int
    {
        return Query::query('create_view', ['resource_id' => $this->resource->id(), 'viewed_at' => $this->viewed_at(), 'page' => $this->payload['page'], 'session_id' => $this->session])->last_inserted_id();
    }
    private function fetch_resource()
    {
        global $wpdb;
        $resources_table = Query::get_table_name(Query::RESOURCES);
        $query = '';
        $payload_copy = \array_merge($this->payload);
        unset($payload_copy['page']);
        switch ($payload_copy['resource']) {
            case 'singular':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND singular_id = %d", $payload_copy['resource'], $payload_copy['singular_id']);
                break;
            case 'author_archive':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND author_id = %d", $payload_copy['resource'], $payload_copy['author_id']);
                break;
            case 'date_archive':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND date_archive = %s", $payload_copy['resource'], $payload_copy['date_archive']);
                break;
            case 'post_type_archive':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND post_type = %s", $payload_copy['resource'], $payload_copy['post_type']);
                break;
            case 'term_archive':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND term_id = %s", $payload_copy['resource'], $payload_copy['term_id']);
                break;
            case 'search':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND search_query = %s", $payload_copy['resource'], $payload_copy['search_query']);
                break;
            case 'home':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s ", $payload_copy['resource']);
                break;
            case '404':
                $query = $wpdb->prepare("SELECT * FROM {$resources_table} WHERE resource = %s AND not_found_url = %s", $payload_copy['resource'], $payload_copy['not_found_url']);
                break;
        }
        $resource = $wpdb->get_row($query);
        if (\is_null($resource)) {
            return null;
        }
        return $resource;
    }
    private function fetch_or_create_resource() : Page
    {
        global $wpdb;
        $resources_table = Query::get_table_name(Query::RESOURCES);
        $resource = $this->fetch_resource();
        if (\is_null($resource)) {
            $payload_copy = \array_merge($this->payload);
            unset($payload_copy['page']);
            $wpdb->insert($resources_table, $payload_copy);
            $resource = $this->fetch_resource();
        }
        $page = Page::from_row($resource);
        $page->update_cache();
        return $page;
    }
    /**
     * @return int|null ID of the session that should be used for this view
     */
    private function fetch_or_create_session() : ?int
    {
        $session = Query::query('sessions/get_current_session', ['visitor_id' => $this->visitor->id()])->row();
        if (\is_null($session)) {
            return $this->create_session();
        }
        $same_referrer = $this->fetch_or_create_referrer() === $session->referrer_id;
        $same_resource = \intval($this->fetch_resource()->id) === $this->fetch_last_viewed_resource();
        $same_as_previous_view = $same_referrer && $same_resource;
        // The goal here is to prevent a page refresh from creating another session
        if (!$this->is_internal_referrer($this->referrer_url) && !$same_as_previous_view) {
            return $this->create_session();
        }
        return $session->session_id;
    }
    /**
     * @param string|null $referrer_url
     *
     * @return bool
     */
    private function is_internal_referrer(?string $referrer_url) : bool
    {
        return !empty($referrer_url) && String_Util::str_starts_with(\strtolower($referrer_url), \strtolower(\site_url()));
    }
    private function fetch_referrer(array $referrer) : int
    {
        $referrers_table = Query::get_table_name(Query::REFERRERS);
        $id = Illuminate_Builder::get_builder()->select('id')->from($referrers_table)->where('domain', '=', $referrer['domain'])->value('id');
        if (\is_null($id)) {
            $id = Illuminate_Builder::get_builder()->from($referrers_table)->insertGetId(['domain' => $referrer['domain'], 'type' => $referrer['type'], 'referrer' => $referrer['referrer']]);
        }
        return $id;
    }
    private function fetch_or_create_referrer() : int
    {
        $url = new URL($this->referrer_url);
        if (!$url->is_valid_url() || $this->is_internal_referrer($this->referrer_url)) {
            return $this->fetch_referrer(['domain' => '', 'type' => 'Direct', 'referrer' => 'Direct']);
        } elseif (!\is_null(Known_Referrers::get_group_for($url->get_domain()))) {
            $group = Known_Referrers::get_group_for($url->get_domain());
            return $this->fetch_referrer(['domain' => $group['domain'], 'type' => $group['type'], 'referrer' => $group['name']]);
        } else {
            return $this->fetch_referrer(['domain' => $url->get_domain(), 'type' => 'Referrer', 'referrer' => $this->strip_www($url->get_domain())]);
        }
    }
    private function strip_www(string $string) : string
    {
        if (\strpos($string, "www.") !== 0) {
            return $string;
        }
        return \substr($string, 4);
    }
    private function get_campaign() : ?int
    {
        global $wpdb;
        $required_fields = ['utm_source', 'utm_medium', 'utm_campaign'];
        $valid = \true;
        foreach ($required_fields as $field) {
            if (!isset($this->campaign_fields[$field])) {
                $valid = \false;
            }
        }
        if (!$valid) {
            return null;
        }
        $campaigns_table = Query::get_table_name(Query::CAMPAIGNS);
        $campaign = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$campaigns_table} WHERE landing_page_title = %s AND utm_source = %s AND utm_medium = %s AND utm_campaign = %s AND (utm_term = %s OR (%d = 0 AND utm_term IS NULL)) AND (utm_content = %s OR (%d = 0 AND utm_content IS NULL))", $this->resource->title(), $this->campaign_fields['utm_source'], $this->campaign_fields['utm_medium'], $this->campaign_fields['utm_campaign'], $this->campaign_fields['utm_term'], isset($this->campaign_fields['utm_term']) ? 1 : 0, $this->campaign_fields['utm_content'], isset($this->campaign_fields['utm_content']) ? 1 : 0));
        if (!\is_null($campaign)) {
            return $campaign->campaign_id;
        }
        $wpdb->insert($campaigns_table, ['landing_page_title' => $this->resource->title(), 'utm_source' => $this->campaign_fields['utm_source'], 'utm_medium' => $this->campaign_fields['utm_medium'], 'utm_campaign' => $this->campaign_fields['utm_campaign'], 'utm_term' => $this->campaign_fields['utm_term'], 'utm_content' => $this->campaign_fields['utm_content']]);
        $campaign = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$campaigns_table} WHERE landing_page_title = %s AND utm_source = %s AND utm_medium = %s AND utm_campaign = %s AND (utm_term = %s OR (%d = 0 AND utm_term IS NULL)) AND (utm_content = %s OR (%d = 0 AND utm_content IS NULL))", $this->resource->title(), $this->campaign_fields['utm_source'], $this->campaign_fields['utm_medium'], $this->campaign_fields['utm_campaign'], $this->campaign_fields['utm_term'], isset($this->campaign_fields['utm_term']) ? 1 : 0, $this->campaign_fields['utm_content'], isset($this->campaign_fields['utm_content']) ? 1 : 0));
        if (!\is_null($campaign)) {
            return $campaign->campaign_id;
        }
        return null;
    }
}

<?php

namespace IAWP_SCOPED\IAWP;

/** @internal */
class Report_Finder
{
    public function __construct()
    {
    }
    public function fetch_reports_by_type() : array
    {
        return [['name' => \__('Pages', 'independent-analytics'), 'reports' => $this->fetch_page_reports()], ['name' => \__('Referrers', 'independent-analytics'), 'reports' => $this->fetch_referrer_reports()], ['name' => \__('Geographic', 'independent-analytics'), 'reports' => $this->fetch_geographic_reports()], ['name' => \__('Devices', 'independent-analytics'), 'reports' => $this->fetch_device_reports()], ['name' => \__('Campaigns', 'independent-analytics'), 'reports' => $this->fetch_campaign_reports()]];
    }
    /**
     * @return Report[]
     */
    public function fetch_page_reports() : array
    {
        return $this->by_type('views');
    }
    /**
     * @return Report[]
     */
    public function fetch_referrer_reports() : array
    {
        return $this->by_type('referrers');
    }
    /**
     * @return Report[]
     */
    public function fetch_geographic_reports() : array
    {
        return $this->by_type('geo');
    }
    /**
     * @return Report[]
     */
    public function fetch_device_reports() : array
    {
        return $this->by_type('devices');
    }
    /**
     * @return Report[]
     */
    public function fetch_campaign_reports() : array
    {
        return $this->by_type('campaigns');
    }
    public function is_real_time() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'real-time';
    }
    public function is_settings_page() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'settings';
    }
    public function is_campaign_builder_page() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'campaign-builder';
    }
    public function is_page_report() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'views';
    }
    public function is_referrer_report() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'referrers';
    }
    public function is_geographic_report() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'geo';
    }
    public function is_device_report() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'devices';
    }
    public function is_campaign_report() : bool
    {
        return \IAWP_SCOPED\iawp()->get_current_tab() === 'campaigns';
    }
    public function is_saved_report() : bool
    {
        $report = $this->current();
        if (\is_null($report)) {
            return \false;
        }
        return $report->is_saved_report();
    }
    public function current() : ?Report
    {
        $report_id = \array_key_exists('report', $_GET) ? \sanitize_text_field($_GET['report']) : null;
        if (\is_null($report_id)) {
            return self::get_base_report_for_current_tab();
        }
        $report = self::by_id($report_id);
        if (\is_null($report)) {
            return self::get_base_report_for_current_tab();
        }
        return $report;
    }
    /**
     * @param array $ids
     *
     * @return array|Report[]|null
     */
    public function by_ids(array $ids) : ?array
    {
        $reports_table = Query::get_table_name(Query::REPORTS);
        $rows = Illuminate_Builder::get_builder()->from($reports_table)->whereIn('report_id', $ids)->get()->toArray();
        return \array_map(function ($row) {
            return new Report($row);
        }, $rows);
    }
    /**
     * @param string $type
     *
     * @return Report[]
     */
    public function by_type(string $type) : array
    {
        $reports_table = Query::get_table_name(Query::REPORTS);
        $builder = Illuminate_Builder::get_builder()->from($reports_table)->where('type', '=', $type)->orderByRaw('position IS NULL')->orderBy('position')->orderBy('report_id')->get()->escapeWhenCastingToString();
        $rows = $builder->toArray();
        return \array_map(function ($row) {
            return new Report($row);
        }, $rows);
    }
    public static function get_base_report_for_current_tab() : ?Report
    {
        return self::get_base_report_for_type(\IAWP_SCOPED\iawp()->get_current_tab());
    }
    public static function get_favorite() : ?Report
    {
        $raw_id = \get_user_meta(\get_current_user_id(), 'iawp_favorite_report_id', \true);
        $id = \filter_var($raw_id, \FILTER_VALIDATE_INT);
        if ($id !== \false) {
            return self::by_id($id);
        }
        $raw_type = \get_user_meta(\get_current_user_id(), 'iawp_favorite_report_type', \true);
        $type = \filter_var($raw_type, \FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        return self::get_base_report_for_type($type);
    }
    /**
     * @param string|int $id
     *
     * @return Report|null
     */
    public static function by_id($id) : ?Report
    {
        $id = (string) $id;
        $reports_table = Query::get_table_name(Query::REPORTS);
        if (!\ctype_digit($id)) {
            return null;
        }
        $row = Illuminate_Builder::get_builder()->from($reports_table)->where('report_id', '=', $id)->first();
        if (\is_null($row)) {
            return null;
        }
        return new Report($row);
    }
    public static function create_report(array $attributes) : Report
    {
        $reports_table = Query::get_table_name(Query::REPORTS);
        if (\array_key_exists('columns', $attributes) && \is_array($attributes['columns'])) {
            $attributes['columns'] = \json_encode($attributes['columns']);
        }
        if (\array_key_exists('filters', $attributes) && \is_array($attributes['filters'])) {
            $attributes['filters'] = \json_encode($attributes['filters']);
        }
        if (\array_key_exists('visible_datasets', $attributes) && \is_array($attributes['visible_datasets'])) {
            $attributes['visible_datasets'] = \json_encode($attributes['visible_datasets']);
        }
        $report_id = Illuminate_Builder::get_builder()->from($reports_table)->insertGetId($attributes);
        return self::by_id($report_id);
    }
    private static function get_base_report_for_type(string $type) : ?Report
    {
        switch ($type) {
            case 'views':
                return new Report((object) ['name' => 'Pages', 'type' => 'views']);
            case 'referrers':
                return new Report((object) ['name' => 'Referrers', 'type' => 'referrers']);
            case 'geo':
                return new Report((object) ['name' => 'Geographic', 'type' => 'geo']);
            case 'devices':
                return new Report((object) ['name' => 'Devices', 'type' => 'devices']);
            case 'campaigns':
                return new Report((object) ['name' => 'Campaigns', 'type' => 'campaigns']);
            default:
                return null;
        }
    }
}

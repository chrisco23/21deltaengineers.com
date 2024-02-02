<?php

namespace IAWP_SCOPED\IAWP;

use DateTime;
use IAWP_SCOPED\IAWP\Date_Range\Date_Range;
use IAWP_SCOPED\IAWP\Date_Range\Exact_Date_Range;
use IAWP_SCOPED\IAWP\Date_Range\Relative_Date_Range;
use IAWP_SCOPED\IAWP\Statistics\Intervals\Interval;
use IAWP_SCOPED\IAWP\Statistics\Intervals\Intervals;
use IAWP_SCOPED\Proper\Timezone;
use Throwable;
/**
 * Dashboards support various options via the search query string portion of the URL.
 *
 * The Dashboard_Options class give you an interface for fetching any set values or falling back
 * to a default value as needed.
 * @internal
 */
class Dashboard_Options
{
    private $report_id;
    private $report;
    public function __construct()
    {
        $this->report_id = \array_key_exists('report', $_GET) ? \sanitize_text_field($_GET['report']) : null;
        $this->report = $this->fetch_report_by_id($this->report_id);
    }
    public function columns() : ?array
    {
        if (\is_null($this->report->columns ?? null)) {
            return null;
        }
        return \json_decode($this->report->columns, \true);
    }
    public function visible_datasets() : array
    {
        if (\is_null($this->report->visible_datasets ?? null)) {
            return ['visitors', 'views'];
        }
        return \json_decode($this->report->visible_datasets, \true);
    }
    public function filters() : array
    {
        if (\is_null($this->report->filters ?? null)) {
            return [];
        }
        return \json_decode($this->report->filters, \true);
    }
    public function sort_column() : string
    {
        return $this->report->sort_column ?? 'visitors';
    }
    public function sort_direction() : string
    {
        return $this->report->sort_direction ?? 'desc';
    }
    public function group() : ?string
    {
        return $this->report->group_name ?? null;
    }
    public function chart_interval() : ?Interval
    {
        if (\is_null($this->report->chart_interval ?? null)) {
            return Intervals::default_for($this->get_date_range()->number_of_days());
        }
        return Intervals::find_by_id($this->report->chart_interval);
    }
    /**
     * @return Date_Range
     */
    public function get_date_range() : Date_Range
    {
        if ($this->has_exact_range()) {
            try {
                $start = new DateTime($this->start(), Timezone::site_timezone());
                $end = new DateTime($this->end(), Timezone::site_timezone());
                return new Exact_Date_Range($start, $end);
            } catch (Throwable $e) {
                // Do nothing and fall back to default relative date range
            }
        }
        return new Relative_Date_Range($this->relative_range_id());
    }
    public function start() : ?string
    {
        if (!$this->has_exact_range()) {
            return null;
        }
        return $this->report->exact_start;
    }
    public function end() : ?string
    {
        if (!$this->has_exact_range()) {
            return null;
        }
        return $this->report->exact_end;
    }
    /**
     * Prefer exact range to relative range if both are provided
     */
    public function relative_range_id() : ?string
    {
        $relative_range_id = $this->report->relative_range_id ?? null;
        if (!$this->has_exact_range() && $relative_range_id === null) {
            return 'LAST_THIRTY';
        } elseif ($this->has_exact_range()) {
            return null;
        } elseif (Relative_Date_Range::is_valid_range($relative_range_id) === \false) {
            return 'LAST_THIRTY';
        }
        return $relative_range_id;
    }
    public function maybe_redirect() : void
    {
        $page = $_GET['page'] ?? null;
        if (\is_admin() && $page === 'independent-analytics' && empty($_GET['report']) && empty($_GET['tab'])) {
            $favorite_report = Report_Finder::get_favorite();
            if (!\is_null($favorite_report)) {
                \wp_safe_redirect($favorite_report->url());
                exit;
            }
        }
        $is_invalid_report_id = !\is_null($this->report_id) && \is_null($this->report);
        if (\is_admin() && $page === 'independent-analytics' && $is_invalid_report_id) {
            \wp_safe_redirect(\IAWP_SCOPED\iawp_dashboard_url(['tab' => \IAWP_SCOPED\iawp()->get_current_tab()]));
            exit;
        }
        $is_incorrect_tab = !\is_null($this->report) && \IAWP_SCOPED\iawp()->get_current_tab() !== $this->report->type;
        if (\is_admin() && $page === 'independent-analytics' && $is_incorrect_tab) {
            \wp_safe_redirect(\IAWP_SCOPED\iawp_dashboard_url(['tab' => $this->report->type, 'report' => $this->report->report_id]));
            exit;
        }
    }
    public function is_sidebar_collapsed() : bool
    {
        $is_sidebar_collapsed = \get_user_meta(\get_current_user_id(), 'iawp_is_sidebar_collapsed', \true) === '1';
        return $is_sidebar_collapsed;
    }
    private function fetch_report_by_id($report_id) : ?object
    {
        $reports_table = Query::get_table_name(Query::REPORTS);
        if (\is_null($report_id)) {
            return null;
        }
        return Illuminate_Builder::get_builder()->from($reports_table)->where('report_id', '=', $report_id)->first();
    }
    private function has_exact_range() : bool
    {
        return !\is_null($this->report->exact_start ?? null) && !\is_null($this->report->exact_end ?? null);
    }
}

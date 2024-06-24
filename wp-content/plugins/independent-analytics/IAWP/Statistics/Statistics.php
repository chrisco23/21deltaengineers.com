<?php

namespace IAWP\Statistics;

use DatePeriod;
use DateTime;
use IAWP\Date_Range\Date_Range;
use IAWP\Form;
use IAWP\Illuminate_Builder;
use IAWP\Query;
use IAWP\Rows\Rows;
use IAWP\Statistics\Intervals\Daily;
use IAWP\Statistics\Intervals\Interval;
use IAWP\WooCommerce_Order;
use IAWPSCOPED\Illuminate\Database\Query\Builder;
use IAWPSCOPED\Illuminate\Database\Query\JoinClause;
use IAWPSCOPED\Illuminate\Support\Str;
use IAWPSCOPED\Proper\Timezone;
/** @internal */
abstract class Statistics
{
    protected $date_range;
    protected $rows;
    protected $chart_interval;
    private $views;
    private $visitors;
    private $sessions;
    private $average_session_duration;
    private $views_per_session;
    private $bounce_rate;
    private $woocommerce_orders;
    private $woocommerce_gross_sales;
    private $woocommerce_refunds;
    private $woocommerce_refunded_amount;
    private $woocommerce_net_sales;
    private $woocommerce_conversion_rate;
    private $woocommerce_earnings_per_visitor;
    private $woocommerce_average_order_volume;
    private $form_submissions;
    private $form_conversion_rate;
    private $statistics_by_day;
    private $statistics;
    private $previous_period_statistics;
    private $form_statistics = [];
    // The biggest flaw here is that it requires two queries for the stats (current and previous) when
    // that could be one. I think it would also be possible to reuse the rows query and not limit
    // by 50 and just SUM() up all the stats columns for the quick stats. Maybe that would be faster
    // even if two queries were still used. Needs testing.
    public function __construct(Date_Range $date_range, ?Rows $rows = null, ?Interval $chart_interval = null)
    {
        $this->date_range = $date_range;
        $this->rows = $rows;
        $this->chart_interval = $chart_interval ?? new Daily();
        $this->statistics_by_day = $this->query($this->date_range, \true);
        $this->statistics = $this->query($this->date_range, \false);
        $this->previous_period_statistics = $this->query($this->date_range->previous_period(), \false);
        $this->views = $this->get_statistic('views');
        $this->visitors = $this->get_statistic('visitors');
        $this->sessions = $this->get_statistic('sessions');
        $this->woocommerce_orders = $this->get_statistic('wc_orders');
        $this->woocommerce_gross_sales = $this->get_statistic('wc_gross_sales');
        $this->woocommerce_refunds = $this->get_statistic('wc_refunds');
        $this->woocommerce_refunded_amount = $this->get_statistic('wc_refunded_amount');
        $this->woocommerce_net_sales = $this->get_statistic('wc_net_sales');
        $this->woocommerce_conversion_rate = $this->get_statistic('wc_conversion_rate');
        $this->woocommerce_earnings_per_visitor = $this->get_statistic('wc_earnings_per_visitor');
        $this->woocommerce_average_order_volume = $this->get_statistic('wc_average_order_volume');
        $this->average_session_duration = $this->get_statistic('average_session_duration');
        $this->form_submissions = $this->get_statistic('form_submissions');
        $this->form_conversion_rate = new \IAWP\Statistics\Statistic($this->calculate_percent($this->statistics->form_submissions, $this->statistics->visitors, 2), $this->calculate_percent($this->previous_period_statistics->form_submissions, $this->previous_period_statistics->visitors, 2));
        foreach (Form::get_forms() as $form) {
            $this->form_statistics[$form->submissions_column()] = $this->get_statistic($form->submissions_column());
            $this->form_statistics[$form->conversion_rate_column()] = new \IAWP\Statistics\Statistic($this->calculate_percent($this->statistics->{$form->submissions_column()}, $this->statistics->visitors, 2), $this->calculate_percent($this->previous_period_statistics->{$form->submissions_column()}, $this->previous_period_statistics->visitors, 2));
        }
        $this->bounce_rate = new \IAWP\Statistics\Statistic($this->calculate_percent($this->statistics->bounces, $this->statistics->sessions), $this->calculate_percent($this->previous_period_statistics->bounces, $this->previous_period_statistics->sessions));
        $this->views_per_session = new \IAWP\Statistics\Statistic($this->divide($this->statistics->total_views, $this->statistics->sessions, 2), $this->divide($this->previous_period_statistics->total_views, $this->previous_period_statistics->sessions, 2));
    }
    public function views() : \IAWP\Statistics\Statistic
    {
        return $this->views;
    }
    public function visitors() : \IAWP\Statistics\Statistic
    {
        return $this->visitors;
    }
    public function sessions() : \IAWP\Statistics\Statistic
    {
        return $this->sessions;
    }
    public function average_session_duration() : \IAWP\Statistics\Statistic
    {
        return $this->average_session_duration;
    }
    public function form_submissions() : \IAWP\Statistics\Statistic
    {
        return $this->form_submissions;
    }
    public function form_conversion_rate() : \IAWP\Statistics\Statistic
    {
        return $this->form_conversion_rate;
    }
    public function form_submissions_for(Form $form) : \IAWP\Statistics\Statistic
    {
        return $this->form_statistics[$form->submissions_column()];
    }
    public function form_conversion_rate_for(Form $form) : \IAWP\Statistics\Statistic
    {
        return $this->form_statistics[$form->conversion_rate_column()];
    }
    public function wc_orders() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_orders;
    }
    public function wc_gross_sales() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_gross_sales;
    }
    public function wc_refunds() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_refunds;
    }
    public function wc_refunded_amount() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_refunded_amount;
    }
    public function wc_net_sales() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_net_sales;
    }
    public function wc_conversion_rate() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_conversion_rate;
    }
    public function wc_earnings_per_visitor() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_earnings_per_visitor;
    }
    public function wc_average_order_volume() : \IAWP\Statistics\Statistic
    {
        return $this->woocommerce_average_order_volume;
    }
    public function bounce_rate() : \IAWP\Statistics\Statistic
    {
        return $this->bounce_rate;
    }
    public function views_per_session() : \IAWP\Statistics\Statistic
    {
        return $this->views_per_session;
    }
    public function chart_interval() : Interval
    {
        return $this->chart_interval;
    }
    /**
     * I'm sure there's more we could do here. If you get a result back where there isn't a full
     * page of results or where you're not paginating, then you can just count up the rows...
     *
     * @return int|null
     */
    public function total_number_of_rows() : ?int
    {
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $views_table = Query::get_table_name(Query::VIEWS);
        $column = $this->total_table_rows_column() ?? $this->required_column();
        $query = Illuminate_Builder::get_builder()->selectRaw("COUNT(DISTINCT {$column}) AS total_table_rows")->from("{$sessions_table} AS sessions")->join("{$views_table} AS views", function (JoinClause $join) {
            $join->on('sessions.session_id', '=', 'views.session_id');
        })->when(!\is_null($this->rows), function (Builder $query) {
            $this->rows->attach_filters($query);
        })->whereBetween('sessions.created_at', [$this->date_range->iso_start(), $this->date_range->iso_end()])->whereBetween('views.viewed_at', [$this->date_range->iso_start(), $this->date_range->iso_end()]);
        return $query->value('total_table_rows');
    }
    /**
     * Define which id column to use to count up the total table rows. This is only required
     * for classes that don't have a required column and don't override required_column
     *
     * @return string|null
     */
    protected function total_table_rows_column() : ?string
    {
        return null;
    }
    /**
     * Statistics can require that a column exists in order to be included. As an example, geos
     * requires visitors.country_code and campaigns requires sessions.campaign_id
     *
     * @return string|null
     */
    protected function required_column() : ?string
    {
        return null;
    }
    private function get_statistic(string $name) : \IAWP\Statistics\Statistic
    {
        return new \IAWP\Statistics\Statistic($this->statistics->{$name}, $this->previous_period_statistics->{$name}, $this->fill_in_partial_day_range($this->statistics_by_day, $name));
    }
    private function query(Date_Range $range, bool $as_daily_statistics)
    {
        $utc_offset = Timezone::utc_offset();
        $site_offset = Timezone::site_offset();
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $views_table = Query::get_table_name(Query::VIEWS);
        $wc_orders_table = Query::get_table_name(Query::WC_ORDERS);
        $form_submissions_table = Query::get_table_name(Query::FORM_SUBMISSIONS);
        $form_submissions_query = Illuminate_Builder::get_builder()->select(['form_id', 'session_id'])->selectRaw('COUNT(*) AS form_submissions')->from($form_submissions_table, 'form_submissions')->whereBetween('created_at', [$range->iso_start(), $range->iso_end()])->groupBy(['form_id', 'session_id']);
        $session_statistics = Illuminate_Builder::get_builder();
        $session_statistics->select('sessions.session_id')->selectRaw('COUNT(DISTINCT views.id) AS views')->selectRaw('COUNT(DISTINCT wc_orders.order_id) AS orders')->selectRaw('IFNULL(CAST(SUM(wc_orders.total) AS DECIMAL(10, 2)), 0) AS gross_sales')->selectRaw('IFNULL(CAST(SUM(wc_orders.total_refunded) AS DECIMAL(10, 2)), 0) AS total_refunded')->selectRaw('IFNULL(CAST(SUM(wc_orders.total_refunds) AS UNSIGNED), 0) AS total_refunds')->selectRaw('IFNULL(CAST(SUM(wc_orders.total - wc_orders.total_refunded) AS DECIMAL(10, 2)), 0) AS net_sales')->from("{$sessions_table} AS sessions")->join("{$views_table} AS views", function (JoinClause $join) {
            $join->on('sessions.session_id', '=', 'views.session_id');
        })->leftJoin("{$wc_orders_table} AS wc_orders", function (JoinClause $join) {
            $join->on('views.id', '=', 'wc_orders.initial_view_id')->whereIn('wc_orders.status', WooCommerce_Order::tracked_order_statuses());
        })->when(!\is_null($this->rows), function (Builder $query) {
            $this->rows->attach_filters($query);
        })->whereBetween('sessions.created_at', [$range->iso_start(), $range->iso_end()])->whereBetween('views.viewed_at', [$range->iso_start(), $range->iso_end()])->groupBy('sessions.session_id')->when(!\is_null($this->required_column()), function (Builder $query) {
            $query->whereNotNull($this->required_column());
        });
        $statistics = Illuminate_Builder::get_builder();
        $statistics->selectRaw('IFNULL(CAST(SUM(sessions.total_views) AS UNSIGNED), 0) AS total_views')->selectRaw('IFNULL(CAST(SUM(session_statistics.views) AS UNSIGNED), 0) AS views')->selectRaw('COUNT(DISTINCT sessions.visitor_id) AS visitors')->selectRaw('COUNT(DISTINCT sessions.session_id) AS sessions')->selectRaw('IFNULL(CAST(AVG(TIMESTAMPDIFF(SECOND, sessions.created_at, sessions.ended_at)) AS UNSIGNED), 0) AS average_session_duration')->selectRaw('COUNT(DISTINCT IF(sessions.final_view_id IS NULL, sessions.session_id, NULL)) AS bounces')->selectRaw('IFNULL(CAST(SUM(session_statistics.orders) AS UNSIGNED), 0) AS wc_orders')->selectRaw('IFNULL(CAST(SUM(session_statistics.gross_sales) AS DECIMAL(10, 2)), 0) AS wc_gross_sales')->selectRaw('IFNULL(CAST(SUM(session_statistics.total_refunds) AS UNSIGNED), 0) AS wc_refunds')->selectRaw('IFNULL(CAST(SUM(session_statistics.total_refunded) AS DECIMAL(10, 2)), 0) AS wc_refunded_amount')->selectRaw('IFNULL(CAST(SUM(session_statistics.net_sales) AS DECIMAL(10, 2)), 0) AS wc_net_sales')->selectRaw('IFNULL(SUM(form_submissions.form_submissions), 0) AS form_submissions')->tap(function (Builder $query) {
            foreach (Form::get_forms() as $form) {
                $query->selectRaw('IFNULL(SUM(IF(form_submissions.form_id = ?, form_submissions.form_submissions, 0)), 0) AS ' . $form->submissions_column(), [$form->id()]);
            }
        })->from("{$sessions_table} AS sessions")->joinSub($session_statistics, 'session_statistics', function (JoinClause $join) {
            $join->on('sessions.session_id', '=', 'session_statistics.session_id');
        })->leftJoinSub($form_submissions_query, 'form_submissions', 'sessions.session_id', '=', 'form_submissions.session_id')->whereBetween('sessions.created_at', [$range->iso_start(), $range->iso_end()])->when($as_daily_statistics, function (Builder $query) use($utc_offset, $site_offset) {
            if ($this->chart_interval->id() === 'daily') {
                $query->selectRaw("DATE(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}')) AS date");
            } elseif ($this->chart_interval->id() === 'monthly') {
                $query->selectRaw("DATE_FORMAT(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}'), '%Y-%m-01 00:00:00') AS date");
            } elseif ($this->chart_interval->id() === 'weekly') {
                $day_of_week = \IAWPSCOPED\iawp()->get_option('iawp_dow', 0) + 1;
                $query->selectRaw("\n                               IF (\n                                  DAYOFWEEK(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}')) - {$day_of_week} < 0,\n                                  DATE_FORMAT(SUBDATE(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}'), DAYOFWEEK(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}')) - {$day_of_week} + 7), '%Y-%m-%d 00:00:00'),\n                                  DATE_FORMAT(SUBDATE(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}'), DAYOFWEEK(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}')) - {$day_of_week}), '%Y-%m-%d 00:00:00')\n                               ) AS date\n                           ");
            } else {
                $query->selectRaw("DATE_FORMAT(CONVERT_TZ(sessions.created_at, '{$utc_offset}', '{$site_offset}'), '%Y-%m-%d %H:00:00') AS date");
            }
            $query->groupByRaw("date");
        });
        $outer_query = Illuminate_Builder::get_builder()->selectRaw('statistics.*')->selectRaw('IF(statistics.visitors = 0, 0, (statistics.wc_orders / statistics.visitors) * 100) AS wc_conversion_rate')->selectRaw('IF(statistics.visitors = 0, 0, (statistics.wc_gross_sales - statistics.wc_refunded_amount) / visitors) AS wc_earnings_per_visitor')->selectRaw('IF(statistics.wc_orders = 0, 0, ROUND(CAST(statistics.wc_gross_sales / statistics.wc_orders AS DECIMAL(10, 2)))) AS wc_average_order_volume')->fromSub($statistics, 'statistics');
        $results = \array_map(function (object $statistic) : object {
            return $this->parse_statistic($statistic);
        }, $outer_query->get()->all());
        if (!$as_daily_statistics) {
            return $results[0];
        }
        return $results;
    }
    private function parse_statistic(object $statistic) : object
    {
        $statistic->wc_gross_sales = \floatval($statistic->wc_gross_sales);
        $statistic->wc_refunded_amount = \floatval($statistic->wc_refunded_amount);
        $statistic->wc_net_sales = \floatval($statistic->wc_net_sales);
        foreach ($statistic as $key => $value) {
            if (Str::startsWith($key, 'form_submissions')) {
                $statistic->{$key} = \intval($value);
            }
        }
        return $statistic;
    }
    private function calculate_percent(float $top, float $bottom, int $precision = 0) : float
    {
        if ($bottom === 0.0 && $top > 0) {
            return 100;
        } elseif ($bottom === 0.0) {
            return 0;
        }
        return \round($top / $bottom * 100, $precision);
    }
    private function divide(float $top, float $bottom, int $precision = 0) : float
    {
        if ($bottom === 0.0 && $top > 0) {
            return 100;
        } elseif ($bottom === 0.0) {
            return 0;
        }
        return \round($top / $bottom, $precision);
    }
    /**
     * @param array $partial_day_range
     * @param string $field
     *
     * @return array
     */
    private function fill_in_partial_day_range(array $partial_day_range, string $field) : array
    {
        $original_start = (clone $this->date_range->start())->setTimezone(Timezone::site_timezone());
        $start = $this->chart_interval->calculate_start_of_interval_for($original_start);
        $original_end = (clone $this->date_range->end())->setTimezone(Timezone::site_timezone());
        $end = $this->chart_interval->calculate_start_of_interval_for($original_end);
        $end->add(new \DateInterval('PT1S'));
        $date_range = new DatePeriod($start, $this->chart_interval->date_interval(), $end);
        $filled_in_data = [];
        foreach ($date_range as $date) {
            // One day, it would be nice to remove this entire if block. For now, it's necessary to
            // fix an issue when a date range spans March 31st 2024.
            // https://www.aljazeera.com/news/2023/3/27/lebanon-reverts-to-daylight-saving-time-after-confusion-furor
            if (Timezone::site_timezone()->getName() === 'Asia/Beirut' && $date->format('H:i:s') === "01:00:00") {
                $date->setTime(0, 0, 0);
            }
            $stat = $this->get_statistic_for_date($partial_day_range, $date, $field);
            $filled_in_data[] = [$date, $stat];
        }
        return $filled_in_data;
    }
    private function get_statistic_for_date(array $partial_day_range, DateTime $datetime_to_match, string $field) : int
    {
        foreach ($partial_day_range as $day) {
            $date = $day->date;
            $stat = $day->{$field};
            try {
                $datetime = new DateTime($date, Timezone::site_timezone());
            } catch (\Throwable $e) {
                return 0;
            }
            // Intentionally using non-strict equality to see if two distinct DateTime objects represent the same time
            if ($datetime == $datetime_to_match) {
                return \intval($stat);
            }
        }
        return 0;
    }
}

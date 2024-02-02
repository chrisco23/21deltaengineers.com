<?php

namespace IAWP_SCOPED\IAWP\Rows;

use IAWP_SCOPED\IAWP\Illuminate_Builder;
use IAWP_SCOPED\IAWP\Models\Page;
use IAWP_SCOPED\IAWP\Query;
use IAWP_SCOPED\Illuminate\Database\Query\Builder;
use IAWP_SCOPED\Illuminate\Database\Query\JoinClause;
/** @internal */
class Pages extends Rows
{
    public function attach_filters(Builder $query) : void
    {
        $query->joinSub($this->query(\true), 'page_rows', function (JoinClause $join) {
            $join->on('page_rows.id', '=', 'views.resource_id');
        });
    }
    protected function fetch_rows() : array
    {
        $rows = $this->query()->get()->all();
        return \array_map(function (object $row) {
            return Page::from_row($row);
        }, $rows);
    }
    private function query(?bool $skip_pagination = \false) : Builder
    {
        global $wpdb;
        if ($skip_pagination) {
            $this->number_of_rows = null;
        }
        $views_table = Query::get_table_name(Query::VIEWS);
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        $resources_table = Query::get_table_name(Query::RESOURCES);
        $comments_table = $wpdb->prefix . 'comments';
        $current_period_array = [$this->date_range->iso_start(), $this->date_range->iso_end()];
        $previous_period_array = [$this->date_range->previous_period()->iso_start(), $this->date_range->previous_period()->iso_end()];
        $total_period_array = [$this->date_range->previous_period()->iso_start(), $this->date_range->iso_end()];
        $calculated_columns = ['views_growth', 'visitors_growth', 'bounce_rate', 'exit_percent'];
        $has_calculate_column_filter = !empty(\array_filter($this->filters, function ($filter) use($calculated_columns) {
            return \in_array($filter['column'], $calculated_columns);
        }));
        if (\in_array($this->sort_configuration->column(), $calculated_columns)) {
            $has_calculate_column_filter = \true;
        }
        $database_sort_columns = ['title' => 'cached_title', 'url' => 'cached_url', 'author' => 'cached_author', 'type' => 'cached_type_label', 'date' => 'cached_date', 'category' => 'cached_category'];
        $sort_column = $this->sort_configuration->column();
        foreach ($database_sort_columns as $key => $value) {
            if ($sort_column === $key) {
                $sort_column = $value;
            }
        }
        $pages_query = Illuminate_Builder::get_builder();
        $pages_query->select('resources.*')->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ?, views.id, NULL))  AS views', $current_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ?, views.id, NULL))  AS previous_period_views', $previous_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ?, sessions.visitor_id, NULL))  AS visitors', $current_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ?, sessions.visitor_id, NULL))  AS previous_period_visitors', $previous_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ?, sessions.session_id, NULL))  AS sessions', $current_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ? AND sessions.final_view_id IS NULL, sessions.session_id, NULL))  AS bounces', $current_period_array)->selectRaw('IF(resources.singular_id IS NOT NULL, COUNT(DISTINCT IF(comments.comment_date_gmt BETWEEN ? AND ? AND comment_approved = "1", comments.comment_ID, null)), NULL) as comments', $current_period_array)->selectRaw('AVG(IF(views.viewed_at BETWEEN ? AND ?, TIMESTAMPDIFF(SECOND, views.viewed_at, views.next_viewed_at), NULL))  AS average_view_duration', $current_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ? AND resources.id = initial_view.resource_id, sessions.session_id, NULL))  AS entrances', $current_period_array)->selectRaw('COUNT(DISTINCT IF(views.viewed_at BETWEEN ? AND ? AND (resources.id = final_view.resource_id OR (resources.id = initial_view.resource_id AND sessions.final_view_id IS NULL)), sessions.session_id, NULL))  AS exits', $current_period_array)->from($views_table, 'views')->leftJoin($pages_query->raw($sessions_table . ' AS sessions'), function (JoinClause $join) {
            $join->on('views.session_id', '=', 'sessions.session_id');
        })->leftJoin($pages_query->raw($resources_table . ' AS resources'), function (JoinClause $join) {
            $join->on('views.resource_id', '=', 'resources.id');
        })->leftJoin($pages_query->raw($views_table . ' AS initial_view'), function (JoinClause $join) {
            $join->on('sessions.initial_view_id', '=', 'initial_view.id');
        })->leftJoin($pages_query->raw($views_table . ' AS final_view'), function (JoinClause $join) {
            $join->on('sessions.final_view_id', '=', 'final_view.id');
        })->leftJoin($pages_query->raw($comments_table . ' AS comments'), function (JoinClause $join) {
            $join->on('resources.singular_id', '=', 'comments.comment_post_ID');
        })->whereBetween('views.viewed_at', $total_period_array)->whereBetween('sessions.created_at', $total_period_array)->where(function (Builder $query) use($total_period_array) {
            $query->whereNull('sessions.ended_at')->orWhereBetween('sessions.ended_at', $total_period_array);
        })->where(function (Builder $query) use($total_period_array) {
            $query->whereNull('initial_view.viewed_at')->orWhereBetween('initial_view.viewed_at', $total_period_array);
        })->where(function (Builder $query) use($total_period_array) {
            $query->whereNull('final_view.viewed_at')->orWhereBetween('final_view.viewed_at', $total_period_array);
        })->when(\count($this->filters) > 0, function (Builder $query) use($calculated_columns) {
            foreach ($this->filters as $filter) {
                if (\in_array($filter['column'], $calculated_columns)) {
                    continue;
                }
                $filter = new Filter($filter);
                $method = $filter->method();
                $query->{$method}($filter->column(), $filter->operator(), $filter->value());
            }
        })->groupBy('resources.id')->having('views', '>', 0)->when(!$has_calculate_column_filter, function (Builder $query) use($sort_column) {
            $query->when($this->sort_configuration->is_nullable(), function (Builder $query) use($sort_column) {
                $query->orderByRaw("CASE WHEN {$sort_column} IS NULL THEN 1 ELSE 0 END");
            })->orderBy($sort_column, $this->sort_configuration->direction())->orderBy('cached_title')->when(\is_int($this->number_of_rows), function (Builder $query) {
                $query->limit($this->number_of_rows);
            });
        });
        $outer_query = Illuminate_Builder::get_builder();
        $outer_query->selectRaw('pages.*')->selectRaw('IFNULL((views - previous_period_views) / previous_period_views * 100, 0) AS views_growth')->selectRaw('IFNULL((visitors - previous_period_visitors) / previous_period_visitors * 100, 0) AS visitors_growth')->selectRaw('IFNULL(bounces / sessions * 100, 0) AS bounce_rate')->selectRaw('IFNULL((exits / views) * 100, 0) AS exit_percent')->when(\count($this->filters) > 0, function (Builder $query) use($calculated_columns) {
            foreach ($this->filters as $filter) {
                if (!\in_array($filter['column'], $calculated_columns)) {
                    continue;
                }
                $filter = new Filter($filter);
                $method = $filter->method();
                $query->{$method}($filter->column(), $filter->operator(), $filter->value());
            }
        })->fromSub($pages_query, 'pages')->when($has_calculate_column_filter, function (Builder $query) use($sort_column) {
            $query->when($this->sort_configuration->is_nullable(), function (Builder $query) use($sort_column) {
                $query->orderByRaw("CASE WHEN {$sort_column} IS NULL THEN 1 ELSE 0 END");
            })->orderBy($sort_column, $this->sort_configuration->direction())->orderBy('cached_title')->when(\is_int($this->number_of_rows), function (Builder $query) {
                $query->limit($this->number_of_rows);
            });
        });
        return $outer_query;
    }
}

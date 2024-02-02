<?php

namespace IAWP_SCOPED\IAWP\Interval;

/** @internal */
abstract class Interval
{
    public abstract function get_query_name() : string;
    public abstract function get_date_interval() : \DateInterval;
    public abstract function short_label() : string;
    public abstract function long_label_singular() : string;
    public abstract function long_label_plural() : string;
    public abstract function interval_multiplier() : int;
    public function get_short_labels(array $intervals) : array
    {
        return \array_map(function ($interval) {
            $interval = $interval * $this->interval_multiplier();
            if ($interval === 0) {
                return \esc_html__('now', 'independent-analytics');
            } else {
                return '-' . $interval . ' ' . $this->short_label();
            }
        }, $intervals);
    }
    public function get_full_labels($intervals) : array
    {
        return \array_map(function ($interval) {
            $interval = $interval * $this->interval_multiplier();
            if ($interval === 1) {
                return $interval . ' ' . $this->long_label_singular();
            } else {
                return $interval . ' ' . $this->long_label_plural();
            }
        }, $intervals);
    }
}

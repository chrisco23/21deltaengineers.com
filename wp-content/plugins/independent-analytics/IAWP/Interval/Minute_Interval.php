<?php

namespace IAWP_SCOPED\IAWP\Interval;

/** @internal */
class Minute_Interval extends Interval
{
    public function get_query_name() : string
    {
        return 'get_visitors_by_minute_interval';
    }
    public function get_date_interval() : \DateInterval
    {
        return new \DateInterval('PT1M');
    }
    public function short_label() : string
    {
        return \__('min');
    }
    public function long_label_singular() : string
    {
        return \__('minute ago');
    }
    public function long_label_plural() : string
    {
        return \__('minutes ago');
    }
    public function interval_multiplier() : int
    {
        return 1;
    }
}

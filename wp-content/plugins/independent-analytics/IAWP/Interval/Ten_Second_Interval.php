<?php

namespace IAWP_SCOPED\IAWP\Interval;

/** @internal */
class Ten_Second_Interval extends Interval
{
    public function get_query_name() : string
    {
        return 'get_visitors_by_ten_second_interval';
    }
    public function get_date_interval() : \DateInterval
    {
        return new \DateInterval('PT10S');
    }
    public function short_label() : string
    {
        return \__('sec');
    }
    public function long_label_singular() : string
    {
        return \__('second ago');
    }
    public function long_label_plural() : string
    {
        return \__('seconds ago');
    }
    public function interval_multiplier() : int
    {
        return 10;
    }
}

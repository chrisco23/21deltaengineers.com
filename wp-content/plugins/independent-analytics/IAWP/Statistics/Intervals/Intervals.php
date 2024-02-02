<?php

namespace IAWP_SCOPED\IAWP\Statistics\Intervals;

/** @internal */
class Intervals
{
    /**
     * @return Interval[]
     */
    public static function all() : array
    {
        return [new Hourly(), new Daily(), new Weekly(), new Monthly()];
    }
    /**
     * Find an interval by its id. Will return the default interval if provided id is invalid.
     *
     * @param string|null $interval_id
     *
     * @return Interval
     */
    public static function find_by_id(?string $interval_id) : Interval
    {
        foreach (self::all() as $interval) {
            if ($interval->id() === $interval_id) {
                return $interval;
            }
        }
        return new Daily();
    }
    public static function default_for(int $days) : Interval
    {
        if ($days <= 3) {
            return new Hourly();
        } elseif ($days <= 84) {
            return new Daily();
        } elseif ($days <= 182) {
            return new Weekly();
        } else {
            return new Monthly();
        }
    }
    // public static function create_interval(?string $interval_id): Interval
    // {
    //     // Switch case...
    // }
}

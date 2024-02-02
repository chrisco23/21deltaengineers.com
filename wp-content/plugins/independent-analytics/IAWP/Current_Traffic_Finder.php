<?php

namespace IAWP_SCOPED\IAWP;

use IAWP_SCOPED\IAWP\Date_Range\Date_Range;
use IAWP_SCOPED\IAWP\Models\Current_Traffic;
/** @internal */
class Current_Traffic_Finder
{
    /**
     * @var Date_Range
     */
    private $date_range;
    /**
     * @param Date_Range $date_range Range to fetch referrers for
     */
    public function __construct(Date_Range $date_range)
    {
        $this->date_range = $date_range;
    }
    public function fetch() : Current_Traffic
    {
        $row = Query::query('get_current_traffic', ['start' => $this->date_range->iso_start(), 'end' => $this->date_range->iso_end()])->row();
        return new Current_Traffic($row);
    }
}

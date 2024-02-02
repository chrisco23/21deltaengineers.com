<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
use IAWP_SCOPED\IAWP\Date_Range\Exact_Date_Range;
use IAWP_SCOPED\IAWP\Rows\Countries;
use IAWP_SCOPED\IAWP\Tables\Table_Geo;
/** @internal */
class Export_Geo extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_export_geo';
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            return;
        }
        $geos = new Countries(Exact_Date_Range::comprehensive_range());
        $table = new Table_Geo();
        $csv = $table->csv($geos->rows());
        echo $csv->to_string();
    }
}

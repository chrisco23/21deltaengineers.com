<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
use IAWP_SCOPED\IAWP\Date_Range\Exact_Date_Range;
use IAWP_SCOPED\IAWP\Rows\Pages;
use IAWP_SCOPED\IAWP\Tables\Table_Pages;
/** @internal */
class Export_Pages extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_export_pages';
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            return;
        }
        $resources = new Pages(Exact_Date_Range::comprehensive_range());
        $table = new Table_Pages();
        $csv = $table->csv($resources->rows());
        echo $csv->to_string();
    }
}

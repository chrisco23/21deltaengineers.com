<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
use IAWP_SCOPED\IAWP\Date_Range\Exact_Date_Range;
use IAWP_SCOPED\IAWP\Rows\Device_Types;
use IAWP_SCOPED\IAWP\Tables\Table_Devices;
/** @internal */
class Export_Devices extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_export_devices';
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            return;
        }
        $device_types = new Device_Types(Exact_Date_Range::comprehensive_range());
        $table = new Table_Devices();
        $csv = $table->csv($device_types->rows());
        echo $csv->to_string();
    }
}

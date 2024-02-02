<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Real_Time;
/** @internal */
class Real_Time_Data extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_real_time_data';
    }
    protected function requires_pro() : bool
    {
        return \true;
    }
    protected function action_callback() : void
    {
        $real_time = new Real_Time();
        \wp_send_json_success($real_time->get_real_time_analytics());
    }
}

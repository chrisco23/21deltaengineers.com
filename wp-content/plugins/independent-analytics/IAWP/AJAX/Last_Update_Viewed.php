<?php

namespace IAWP_SCOPED\IAWP\AJAX;

/** @internal */
class Last_Update_Viewed extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_last_update_viewed';
    }
    protected function action_callback() : void
    {
        echo \update_option('iawp_last_update_viewed', \IAWP_VERSION);
    }
}

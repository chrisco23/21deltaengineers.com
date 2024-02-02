<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
/** @internal */
class Test_Email extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_test_email';
    }
    protected function requires_pro() : bool
    {
        return \true;
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            return;
        }
        $sent = \IAWP_SCOPED\iawp()->email_reports->send_email_report(\true);
        echo \rest_sanitize_boolean($sent);
    }
}

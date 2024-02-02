<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
use IAWP_SCOPED\IAWP\Database_Manager;
/** @internal */
class Reset_Analytics extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_reset_analytics';
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            \wp_send_json_error([], 400);
        }
        $confirmation = $this->get_field('confirmation');
        $valid = \strtolower($confirmation) == 'reset analytics';
        if (!$valid) {
            \wp_send_json_error([], 400);
        }
        $manager = new Database_Manager();
        $manager->reset_analytics();
        \wp_send_json_success([]);
    }
}

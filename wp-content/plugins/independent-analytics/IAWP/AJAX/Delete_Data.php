<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Capability_Manager;
use IAWP_SCOPED\IAWP\Database_Manager;
use IAWP_SCOPED\IAWP\Geo_Database_Manager;
/** @internal */
class Delete_Data extends AJAX
{
    protected function action_name() : string
    {
        return 'iawp_delete_data';
    }
    protected function action_callback() : void
    {
        if (!Capability_Manager::can_edit()) {
            \wp_send_json_error([], 400);
        }
        $confirmation = $this->get_field('confirmation');
        $valid = \strtolower($confirmation) == 'delete all data';
        if (!$valid) {
            \wp_send_json_error([], 400);
        }
        $database_manager = new Database_Manager();
        $database_manager->delete_all_data();
        $geo_database_manager = new Geo_Database_Manager();
        $geo_database_manager->delete();
        Capability_Manager::reset_capabilities();
        \deactivate_plugins(IAWP_PLUGIN_FILE);
        \wp_send_json_success(['redirectUrl' => \admin_url()]);
    }
}

<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Utils\Singleton;
/** @internal */
class AJAX_Manager
{
    use Singleton;
    /** @var AJAX[] */
    private $instances = [];
    private function __construct()
    {
        $this->instances[] = new Confirm_Cache_Cleared();
        $this->instances[] = new Copy_Report();
        $this->instances[] = new Create_Campaign();
        $this->instances[] = new Create_Report();
        $this->instances[] = new Delete_Campaign();
        $this->instances[] = new Delete_Data();
        $this->instances[] = new Delete_Report();
        $this->instances[] = new Export_Campaigns();
        $this->instances[] = new Export_Devices();
        $this->instances[] = new Export_Geo();
        $this->instances[] = new Export_Pages();
        $this->instances[] = new Export_Referrers();
        $this->instances[] = new Export_Reports();
        $this->instances[] = new Filter();
        $this->instances[] = new Import_Reports();
        $this->instances[] = new Last_Update_Viewed();
        $this->instances[] = new Migration_Status();
        $this->instances[] = new Real_Time_Data();
        $this->instances[] = new Rename_Report();
        $this->instances[] = new Reset_Analytics();
        $this->instances[] = new Save_Report();
        $this->instances[] = new Set_Favorite_Report();
        $this->instances[] = new Sort_Reports();
        $this->instances[] = new Test_Email();
        $this->instances[] = new Update_Capabilities();
        $this->instances[] = new Update_User_Settings();
    }
    public function get_action_signatures() : array
    {
        $action_signatures = [];
        foreach ($this->instances as $instance) {
            $action_signatures = \array_merge($action_signatures, $instance->get_action_signature());
        }
        return $action_signatures;
    }
}

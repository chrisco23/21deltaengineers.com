<?php

namespace IAWP_SCOPED\IAWP\AJAX;

use IAWP_SCOPED\IAWP\Report_Finder;
/** @internal */
class Create_Report extends AJAX
{
    /**
     * @inheritDoc
     */
    protected function action_name() : string
    {
        return 'iawp_create_report';
    }
    /**
     * @inheritDoc
     */
    protected function action_required_fields() : array
    {
        return ['type'];
    }
    /**
     * @inheritDoc
     */
    protected function action_callback() : void
    {
        $report = Report_Finder::create_report(['name' => 'New Report', 'type' => $this->get_field('type')]);
        \wp_send_json_success(['url' => $report->url()]);
    }
}

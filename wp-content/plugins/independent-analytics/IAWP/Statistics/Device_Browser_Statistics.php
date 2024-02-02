<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Device_Browser_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.device_browser_id';
    }
}

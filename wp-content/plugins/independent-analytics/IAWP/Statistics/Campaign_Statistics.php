<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Campaign_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.campaign_id';
    }
}

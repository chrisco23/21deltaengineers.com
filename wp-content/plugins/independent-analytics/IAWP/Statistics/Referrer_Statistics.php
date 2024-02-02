<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Referrer_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.referrer_id';
    }
}

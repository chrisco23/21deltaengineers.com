<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Country_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.country_id';
    }
}

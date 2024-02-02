<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class City_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.city_id';
    }
}

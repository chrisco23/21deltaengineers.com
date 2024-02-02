<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Device_Type_Statistics extends Statistics
{
    protected function required_column() : ?string
    {
        return 'sessions.device_type_id';
    }
}

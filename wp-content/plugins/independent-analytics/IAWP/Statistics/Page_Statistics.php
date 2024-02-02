<?php

namespace IAWP_SCOPED\IAWP\Statistics;

/** @internal */
class Page_Statistics extends Statistics
{
    public function total_table_rows_column() : ?string
    {
        return 'views.resource_id';
    }
}

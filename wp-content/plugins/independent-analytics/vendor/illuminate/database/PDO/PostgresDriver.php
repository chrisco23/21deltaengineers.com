<?php

namespace IAWP_SCOPED\Illuminate\Database\PDO;

use IAWP_SCOPED\Doctrine\DBAL\Driver\AbstractPostgreSQLDriver;
use IAWP_SCOPED\Illuminate\Database\PDO\Concerns\ConnectsToDatabase;
/** @internal */
class PostgresDriver extends AbstractPostgreSQLDriver
{
    use ConnectsToDatabase;
}

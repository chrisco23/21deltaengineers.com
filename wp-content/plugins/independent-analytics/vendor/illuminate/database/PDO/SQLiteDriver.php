<?php

namespace IAWP_SCOPED\Illuminate\Database\PDO;

use IAWP_SCOPED\Doctrine\DBAL\Driver\AbstractSQLiteDriver;
use IAWP_SCOPED\Illuminate\Database\PDO\Concerns\ConnectsToDatabase;
/** @internal */
class SQLiteDriver extends AbstractSQLiteDriver
{
    use ConnectsToDatabase;
}

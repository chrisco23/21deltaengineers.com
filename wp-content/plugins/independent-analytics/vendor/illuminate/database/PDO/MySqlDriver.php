<?php

namespace IAWP_SCOPED\Illuminate\Database\PDO;

use IAWP_SCOPED\Doctrine\DBAL\Driver\AbstractMySQLDriver;
use IAWP_SCOPED\Illuminate\Database\PDO\Concerns\ConnectsToDatabase;
/** @internal */
class MySqlDriver extends AbstractMySQLDriver
{
    use ConnectsToDatabase;
}

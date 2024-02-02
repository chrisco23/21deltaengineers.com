<?php

namespace IAWP_SCOPED\Illuminate\Database\PDO;

use IAWP_SCOPED\Doctrine\DBAL\Driver\AbstractSQLServerDriver;
/** @internal */
class SqlServerDriver extends AbstractSQLServerDriver
{
    /**
     * @return \Doctrine\DBAL\Driver\Connection
     */
    public function connect(array $params)
    {
        return new SqlServerConnection(new Connection($params['pdo']));
    }
}

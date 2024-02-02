<?php

declare (strict_types=1);
namespace IAWP_SCOPED\MaxMind\Db\Reader;

use Exception;
/**
 * This class should be thrown when unexpected data is found in the database.
 * @internal
 */
class InvalidDatabaseException extends Exception
{
}

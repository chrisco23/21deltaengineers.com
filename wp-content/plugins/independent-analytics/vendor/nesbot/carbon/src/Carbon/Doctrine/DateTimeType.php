<?php

/**
 * Thanks to https://github.com/flaushi for his suggestion:
 * https://github.com/doctrine/dbal/issues/2873#issuecomment-534956358
 */
namespace IAWP_SCOPED\Carbon\Doctrine;

use IAWP_SCOPED\Carbon\Carbon;
use IAWP_SCOPED\Doctrine\DBAL\Types\VarDateTimeType;
/** @internal */
class DateTimeType extends VarDateTimeType implements CarbonDoctrineType
{
    /** @use CarbonTypeConverter<Carbon> */
    use CarbonTypeConverter;
}

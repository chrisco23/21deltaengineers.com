<?php

namespace IAWP_SCOPED\Doctrine\Common\Cache\Psr6;

use InvalidArgumentException;
use IAWP_SCOPED\Psr\Cache\InvalidArgumentException as PsrInvalidArgumentException;
/**
 * @internal
 */
final class InvalidArgument extends InvalidArgumentException implements PsrInvalidArgumentException
{
}

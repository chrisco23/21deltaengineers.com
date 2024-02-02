<?php

namespace IAWP_SCOPED\Illuminate\Support;

use IAWP_SCOPED\Carbon\Carbon as BaseCarbon;
use IAWP_SCOPED\Carbon\CarbonImmutable as BaseCarbonImmutable;
/** @internal */
class Carbon extends BaseCarbon
{
    /**
     * {@inheritdoc}
     */
    public static function setTestNow($testNow = null)
    {
        BaseCarbon::setTestNow($testNow);
        BaseCarbonImmutable::setTestNow($testNow);
    }
}

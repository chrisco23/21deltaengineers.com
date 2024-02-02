<?php

namespace IAWP_SCOPED\Illuminate\Database\Eloquent\Relations;

use IAWP_SCOPED\Illuminate\Database\Eloquent\Model;
use IAWP_SCOPED\Illuminate\Database\Eloquent\Relations\Concerns\AsPivot;
/** @internal */
class Pivot extends Model
{
    use AsPivot;
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = \false;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];
}

<?php

namespace IAWP_SCOPED\Illuminate\Database\Events;

use IAWP_SCOPED\Illuminate\Contracts\Database\Events\MigrationEvent as MigrationEventContract;
/** @internal */
abstract class MigrationsEvent implements MigrationEventContract
{
    /**
     * The migration method that was invoked.
     *
     * @var string
     */
    public $method;
    /**
     * Create a new event instance.
     *
     * @param  string  $method
     * @return void
     */
    public function __construct($method)
    {
        $this->method = $method;
    }
}

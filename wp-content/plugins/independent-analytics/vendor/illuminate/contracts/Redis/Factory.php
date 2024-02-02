<?php

namespace IAWP_SCOPED\Illuminate\Contracts\Redis;

/** @internal */
interface Factory
{
    /**
     * Get a Redis connection by name.
     *
     * @param  string|null  $name
     * @return \Illuminate\Redis\Connections\Connection
     */
    public function connection($name = null);
}

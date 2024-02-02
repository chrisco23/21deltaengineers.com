<?php

namespace IAWP_SCOPED\Illuminate\Database\Concerns;

use IAWP_SCOPED\Illuminate\Support\Collection;
/** @internal */
trait ExplainsQueries
{
    /**
     * Explains the query.
     *
     * @return \Illuminate\Support\Collection
     */
    public function explain()
    {
        $sql = $this->toSql();
        $bindings = $this->getBindings();
        $explanation = $this->getConnection()->select('EXPLAIN ' . $sql, $bindings);
        return new Collection($explanation);
    }
}

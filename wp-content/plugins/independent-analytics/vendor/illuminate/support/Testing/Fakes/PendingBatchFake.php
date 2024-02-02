<?php

namespace IAWP_SCOPED\Illuminate\Support\Testing\Fakes;

use IAWP_SCOPED\Illuminate\Bus\PendingBatch;
use IAWP_SCOPED\Illuminate\Support\Collection;
/** @internal */
class PendingBatchFake extends PendingBatch
{
    /**
     * The fake bus instance.
     *
     * @var \Illuminate\Support\Testing\Fakes\BusFake
     */
    protected $bus;
    /**
     * Create a new pending batch instance.
     *
     * @param  \Illuminate\Support\Testing\Fakes\BusFake  $bus
     * @param  \Illuminate\Support\Collection  $jobs
     * @return void
     */
    public function __construct(BusFake $bus, Collection $jobs)
    {
        $this->bus = $bus;
        $this->jobs = $jobs;
    }
    /**
     * Dispatch the batch.
     *
     * @return \Illuminate\Bus\Batch
     */
    public function dispatch()
    {
        return $this->bus->recordPendingBatch($this);
    }
}

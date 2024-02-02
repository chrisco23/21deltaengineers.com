<?php

namespace IAWP_SCOPED\Illuminate\Contracts\Support;

/** @internal */
interface DeferrableProvider
{
    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides();
}

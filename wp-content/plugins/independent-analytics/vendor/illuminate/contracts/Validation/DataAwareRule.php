<?php

namespace IAWP_SCOPED\Illuminate\Contracts\Validation;

/** @internal */
interface DataAwareRule
{
    /**
     * Set the data under validation.
     *
     * @param  array  $data
     * @return $this
     */
    public function setData($data);
}

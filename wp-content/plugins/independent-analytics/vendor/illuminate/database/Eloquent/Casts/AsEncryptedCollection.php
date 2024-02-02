<?php

namespace IAWP_SCOPED\Illuminate\Database\Eloquent\Casts;

use IAWP_SCOPED\Illuminate\Contracts\Database\Eloquent\Castable;
use IAWP_SCOPED\Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use IAWP_SCOPED\Illuminate\Support\Collection;
use IAWP_SCOPED\Illuminate\Support\Facades\Crypt;
/** @internal */
class AsEncryptedCollection implements Castable
{
    /**
     * Get the caster class to use when casting from / to this cast target.
     *
     * @param  array  $arguments
     * @return object|string
     */
    public static function castUsing(array $arguments)
    {
        return new class implements CastsAttributes
        {
            public function get($model, $key, $value, $attributes)
            {
                if (isset($attributes[$key])) {
                    return new Collection(\json_decode(Crypt::decryptString($attributes[$key]), \true));
                }
                return null;
            }
            public function set($model, $key, $value, $attributes)
            {
                if (!\is_null($value)) {
                    return [$key => Crypt::encryptString(\json_encode($value))];
                }
                return null;
            }
        };
    }
}

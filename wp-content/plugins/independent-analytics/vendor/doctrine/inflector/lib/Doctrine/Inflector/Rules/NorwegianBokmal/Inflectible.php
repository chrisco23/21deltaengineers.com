<?php

declare (strict_types=1);
namespace IAWP_SCOPED\Doctrine\Inflector\Rules\NorwegianBokmal;

use IAWP_SCOPED\Doctrine\Inflector\Rules\Pattern;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Substitution;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Transformation;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Word;
/** @internal */
class Inflectible
{
    /** @return Transformation[] */
    public static function getSingular() : iterable
    {
        (yield new Transformation(new Pattern('/re$/i'), 'r'));
        (yield new Transformation(new Pattern('/er$/i'), ''));
    }
    /** @return Transformation[] */
    public static function getPlural() : iterable
    {
        (yield new Transformation(new Pattern('/e$/i'), 'er'));
        (yield new Transformation(new Pattern('/r$/i'), 're'));
        (yield new Transformation(new Pattern('/$/'), 'er'));
    }
    /** @return Substitution[] */
    public static function getIrregular() : iterable
    {
        (yield new Substitution(new Word('konto'), new Word('konti')));
    }
}

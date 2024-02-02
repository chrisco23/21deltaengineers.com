<?php

declare (strict_types=1);
namespace IAWP_SCOPED\Doctrine\Inflector\Rules\Spanish;

use IAWP_SCOPED\Doctrine\Inflector\Rules\Patterns;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Ruleset;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Substitutions;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Transformations;
/** @internal */
final class Rules
{
    public static function getSingularRuleset() : Ruleset
    {
        return new Ruleset(new Transformations(...Inflectible::getSingular()), new Patterns(...Uninflected::getSingular()), (new Substitutions(...Inflectible::getIrregular()))->getFlippedSubstitutions());
    }
    public static function getPluralRuleset() : Ruleset
    {
        return new Ruleset(new Transformations(...Inflectible::getPlural()), new Patterns(...Uninflected::getPlural()), new Substitutions(...Inflectible::getIrregular()));
    }
}

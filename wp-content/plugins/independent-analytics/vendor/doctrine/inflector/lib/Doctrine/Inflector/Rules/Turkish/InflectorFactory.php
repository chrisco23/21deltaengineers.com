<?php

declare (strict_types=1);
namespace IAWP_SCOPED\Doctrine\Inflector\Rules\Turkish;

use IAWP_SCOPED\Doctrine\Inflector\GenericLanguageInflectorFactory;
use IAWP_SCOPED\Doctrine\Inflector\Rules\Ruleset;
/** @internal */
final class InflectorFactory extends GenericLanguageInflectorFactory
{
    protected function getSingularRuleset() : Ruleset
    {
        return Rules::getSingularRuleset();
    }
    protected function getPluralRuleset() : Ruleset
    {
        return Rules::getPluralRuleset();
    }
}

<?php

namespace IAWP_SCOPED;

require __DIR__ . '/../vendor/autoload.php';
$languages = \IAWP_SCOPED\voku\helper\ASCII::getAllLanguages();
$languagesKeyLengths = [];
foreach ($languages as $language) {
    $langSpecific = \IAWP_SCOPED\voku\helper\ASCII::charsArrayWithOneLanguage($language, \false, \false);
    $langSpecificKeyLength = \array_map('\\mb_strlen', \array_keys($langSpecific));
    if (\count($langSpecificKeyLength) === 0) {
        $languagesKeyLengths[$language] = 0;
    } else {
        $languagesKeyLengths[$language] = \max($langSpecificKeyLength);
    }
}
//var_export($languagesKeyLengths);

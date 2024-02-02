<?php

namespace IAWP_SCOPED\IAWP;

/** @internal */
class Env
{
    public function is_free() : bool
    {
        return \IAWP_SCOPED\iawp_is_free();
    }
    public function is_pro() : bool
    {
        return \IAWP_SCOPED\iawp_is_pro();
    }
    public function is_white_labeled() : bool
    {
        return Capability_Manager::white_labeled();
    }
    public function can_write() : bool
    {
        return Capability_Manager::can_edit();
    }
    public function get_tab_class_for(string ...$tabs) : string
    {
        foreach ($tabs as $tab) {
            if ($this->get_tab() === $tab) {
                return 'active';
            }
        }
        return '';
    }
    public function get_tab() : string
    {
        if (\IAWP_SCOPED\iawp_is_pro()) {
            $valid_tabs = ['views', 'referrers', 'geo', 'devices', 'campaigns', 'campaign-builder', 'real-time', 'settings', 'learn'];
        } else {
            $valid_tabs = ['views', 'referrers', 'geo', 'devices', 'settings', 'learn'];
        }
        $default_tab = $valid_tabs[0];
        $tab = \array_key_exists('tab', $_GET) ? \sanitize_text_field($_GET['tab']) : \false;
        $is_valid = \array_search($tab, $valid_tabs) != \false;
        if (!$tab || !$is_valid) {
            $tab = $default_tab;
        }
        return $tab;
    }
}

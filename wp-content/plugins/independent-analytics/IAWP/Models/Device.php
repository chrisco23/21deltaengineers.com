<?php

namespace IAWP_SCOPED\IAWP\Models;

/** @internal */
class Device
{
    use View_Stats;
    use WooCommerce_Stats;
    private $type;
    private $os;
    private $browser;
    public function __construct($row)
    {
        $this->type = $row->device_type ?? null;
        $this->os = $row->os ?? null;
        $this->browser = $row->browser ?? null;
        $this->set_view_stats($row);
        $this->set_wc_stats($row);
    }
    public function device_type()
    {
        return $this->type;
    }
    public function browser()
    {
        return $this->browser;
    }
    public function os()
    {
        return $this->os;
    }
}

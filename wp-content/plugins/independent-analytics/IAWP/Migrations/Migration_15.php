<?php

namespace IAWP_SCOPED\IAWP\Migrations;

use IAWP_SCOPED\IAWP\Query;
/** @internal */
class Migration_15 extends Migration
{
    /**
     * @var string
     */
    protected $database_version = '15';
    /**
     * @return void
     */
    protected function migrate() : void
    {
        $this->make_subdivision_nullable();
    }
    private function make_subdivision_nullable() : void
    {
        global $wpdb;
        $cities_table = Query::get_table_name(Query::CITIES);
        $wpdb->query("ALTER TABLE {$cities_table} MODIFY subdivision VARCHAR(64);");
    }
}

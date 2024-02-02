<?php

namespace IAWP_SCOPED\IAWP\Migrations;

use IAWP_SCOPED\IAWP\Utils\Dir;
/** @internal */
class Migration_18 extends Migration
{
    /**
     * @inheritdoc
     */
    protected $database_version = '18';
    /**
     * @inheritDoc
     */
    protected function migrate() : void
    {
        try {
            $directory = \trailingslashit(\wp_upload_dir()['basedir']) . 'iawp/';
            Dir::delete($directory);
        } catch (\Throwable $e) {
        }
    }
}

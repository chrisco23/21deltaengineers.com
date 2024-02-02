<?php

namespace IAWP_SCOPED\IAWP\Migrations;

use IAWP_SCOPED\IAWP\Query;
use IAWP_SCOPED\IAWP\Utils\Dir;
/** @internal */
class Migrations
{
    /**
     * @return void
     */
    public static function create_or_migrate() : void
    {
        if (self::should_migrate()) {
            \update_option('iawp_is_migrating', '1');
            new Migration_1_0();
            new Migration_1_6();
            new Migration_1_8();
            new Migration_1_9();
            new Migration_2();
            new Migration_3();
            new Migration_4();
            new Migration_5();
            new Migration_6();
            new Migration_7();
            new Migration_8();
            new Migration_9();
            new Migration_10();
            new Migration_11();
            new Migration_12();
            new Migration_13();
            new Migration_14();
            new Migration_15();
            new Migration_16();
            new Migration_17();
            new Migration_18();
            new Migration_19();
            new Migration_20();
            new Migration_21();
            $completed = self::run_step_migrations([new Migration_22(), new Migration_23(), new Migration_24(), new Migration_25(), new Migration_26()]);
            if ($completed === \true) {
                \update_option('iawp_is_migrating', '0');
                \delete_option('iawp_last_finished_migration_step');
                \delete_option('iawp_migration_error');
                \delete_option('iawp_migration_error_query');
            }
        }
    }
    /**
     * is_migrating is serving multiple purposes. It's also being used to stop ajax requests and dashboard
     * widgets from running when the database version is newer than one that comes with the installed version
     * of independent analytics. The probably should be a method called something `database_ready` that serves
     * this purpose more explicitly.
     *
     * @return bool
     */
    public static function is_migrating() : bool
    {
        $db_version = \get_option('iawp_db_version', '0');
        $is_migrating = \get_option('iawp_is_migrating') === '1';
        $is_current = \version_compare($db_version, '26', '=');
        $is_outdated = !$is_current;
        return $is_outdated || $is_migrating;
    }
    public static function is_database_ahead_of_plugin() : bool
    {
        $db_version = \get_option('iawp_db_version', '0');
        return \version_compare($db_version, '26', '>');
    }
    public static function is_actually_migrating() : bool
    {
        return \get_option('iawp_is_migrating') === '1';
    }
    /**
     * @return bool
     */
    public static function should_migrate() : bool
    {
        $db_version = \get_option('iawp_db_version', '0');
        $is_migrating = \get_option('iawp_is_migrating') === '1';
        $is_current = \version_compare($db_version, '26', '=');
        $is_outdated = !$is_current;
        return $is_outdated && !$is_migrating;
    }
    public static function handle_migration_18_error() : void
    {
        $directory = \trailingslashit(\wp_upload_dir()['basedir']) . 'iawp/';
        $db_version = \get_option('iawp_db_version', '0');
        $is_migrating = \get_option('iawp_is_migrating', '0') === '1';
        if ($db_version === '17' && $is_migrating && \is_dir($directory)) {
            \update_option('iawp_db_version', '18');
            \update_option('iawp_is_migrating', '0');
            \delete_option('iawp_last_finished_migration_step');
            \delete_option('iawp_migration_error');
            \delete_option('iawp_migration_error_query');
            try {
                $directory = \trailingslashit(\wp_upload_dir()['basedir']) . 'iawp/';
                Dir::delete($directory);
            } catch (\Throwable $e) {
            }
        }
    }
    public static function handle_migration_22_error() : void
    {
        $db_version = \get_option('iawp_db_version', '0');
        $is_migrating = \get_option('iawp_is_migrating', '0') === '1';
        $last_finished_step = \get_option('iawp_last_finished_migration_step', '0');
        $has_error = \get_option('iawp_migration_error_query', null) !== null && \get_option('iawp_migration_error', null) !== null;
        $referrers_table = Query::get_table_name(Query::REFERRERS);
        $has_index = Step_Migration::has_index($referrers_table, 'referrers_domain_index');
        if ($db_version === '21' && $is_migrating && $last_finished_step === '0' && $has_error && !$has_index) {
            \update_option('iawp_is_migrating', '0');
            \delete_option('iawp_last_finished_migration_step');
            \delete_option('iawp_migration_error');
            \delete_option('iawp_migration_error_query');
        }
    }
    /**
     * @param Step_Migration[] $migrations
     *
     * @return bool
     */
    private static function run_step_migrations(array $migrations) : bool
    {
        foreach ($migrations as $migration) {
            $completed = $migration->migrate();
            if (!$completed) {
                return \false;
            }
        }
        return \true;
    }
}

<?php

namespace IAWP_SCOPED\IAWP;

// App data manager?
/** @internal */
class Database_Manager
{
    public function reset_analytics() : void
    {
        global $wpdb;
        $tables_to_drop = [Query::get_table_name(Query::CAMPAIGNS), Query::get_table_name(Query::CITIES), Query::get_table_name(Query::COUNTRIES), Query::get_table_name(Query::DEVICES), Query::get_table_name(Query::DEVICE_TYPES), Query::get_table_name(Query::DEVICE_OSS), Query::get_table_name(Query::DEVICE_BROWSERS), Query::get_table_name(Query::REFERRERS), Query::get_table_name(Query::RESOURCES), Query::get_table_name(Query::SESSIONS), Query::get_table_name(Query::VIEWS), Query::get_table_name(Query::VISITORS_1_16_ARCHIVE), Query::get_table_name(Query::WC_ORDERS)];
        foreach ($tables_to_drop as $table_name) {
            $table = $wpdb->get_row($wpdb->prepare("\n                    SELECT * FROM INFORMATION_SCHEMA.TABLES \n                    WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s\n                ", $wpdb->dbname, $table_name));
            if (!\is_null($table)) {
                $wpdb->query("DELETE FROM {$table_name}");
            }
        }
    }
    public function delete_all_data() : void
    {
        $this->delete_all_iawp_options();
        $this->delete_all_iawp_user_metadata();
        $this->delete_all_iawp_tables();
    }
    public function delete_all_iawp_options() : void
    {
        global $wpdb;
        $options = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->options} WHERE option_name LIKE %s", 'iawp_%'));
        foreach ($options as $option) {
            \delete_option($option->option_name);
        }
    }
    public function delete_all_iawp_user_metadata() : void
    {
        global $wpdb;
        $metadata = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->usermeta} WHERE meta_key LIKE %s", 'iawp_%'));
        foreach ($metadata as $metadata) {
            \delete_user_meta($metadata->user_id, $metadata->meta_key);
        }
    }
    private function delete_all_iawp_tables() : void
    {
        global $wpdb;
        $prefix = $wpdb->prefix;
        $rows = $wpdb->get_results($wpdb->prepare("SELECT table_name FROM information_schema.tables WHERE TABLE_SCHEMA = %s AND table_name LIKE %s", $wpdb->dbname, $prefix . 'independent_analytics_%'));
        foreach ($rows as $row) {
            $wpdb->query('DROP TABLE ' . $row->table_name);
        }
    }
}

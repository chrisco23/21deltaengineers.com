<?php

namespace IAWP_SCOPED\IAWP;

use IAWP_SCOPED\IAWP\AJAX\AJAX_Manager;
use IAWP_SCOPED\IAWP\Menu_Bar_Stats\Menu_Bar_Stats;
use IAWP_SCOPED\IAWP\Migrations\Migrations;
use IAWP_SCOPED\IAWP\Tables\Table;
use IAWP_SCOPED\IAWP\Tables\Table_Campaigns;
use IAWP_SCOPED\IAWP\Tables\Table_Devices;
use IAWP_SCOPED\IAWP\Tables\Table_Geo;
use IAWP_SCOPED\IAWP\Tables\Table_Pages;
use IAWP_SCOPED\IAWP\Tables\Table_Referrers;
use IAWP_SCOPED\IAWP\Utils\Security;
use IAWP_SCOPED\IAWP\Utils\Singleton;
/** @internal */
class Independent_Analytics
{
    use Singleton;
    public $settings;
    public $email_reports;
    public $cron_manager;
    // This is where we attach functions to WP hooks
    private function __construct()
    {
        $this->settings = new Settings();
        new REST_API();
        new Dashboard_Widget();
        new View_Counter();
        AJAX_Manager::getInstance();
        if (!Migrations::is_migrating()) {
            new Track_Resource_Changes();
            Menu_Bar_Stats::register();
            WooCommerce_Order::initialize_order_tracker();
        }
        $this->cron_manager = new Cron_Manager();
        if (\IAWP_SCOPED\iawp_is_pro()) {
            $this->email_reports = new Email_Reports();
            new Campaign_Builder();
            new WooCommerce_Referrer_Meta_Box();
        }
        \add_filter('admin_body_class', function ($classes) {
            if (\get_option('iawp_dark_mode')) {
                $classes .= ' iawp-dark-mode ';
            }
            return $classes;
        });
        \add_action('admin_menu', [$this, 'add_admin_menu_pages']);
        \add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
        \add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        \add_filter('plugin_action_links_independent-analytics/iawp.php', [$this, 'plugin_action_links']);
        \add_filter('admin_footer_text', [$this, 'ip_db_attribution'], 1, 1);
        \add_filter('admin_head', [$this, 'style_premium_menu_item']);
        \add_action('init', [$this, 'polylang_translations']);
        \add_action('init', [$this, 'load_textdomain']);
        IAWP_FS()->add_filter('connect_message_on_update', [$this, 'filter_connect_message_on_update'], 10, 6);
        IAWP_FS()->add_filter('connect_message', [$this, 'filter_connect_message_on_update'], 10, 6);
        IAWP_FS()->add_filter('is_submenu_visible', [$this, 'hide_freemius_sub_menus'], 10, 2);
        IAWP_FS()->add_filter('pricing_url', [$this, 'change_freemius_pricing_url'], 10);
        IAWP_FS()->add_filter('show_deactivation_feedback_form', function () {
            return \false;
        });
        \add_action('admin_init', [$this, 'maybe_delete_mu_plugin']);
    }
    /**
     * At one point in time, there was a must-use plugin that was created. The plugin file and the
     * option need to get cleaned up.
     * @return void
     */
    public function maybe_delete_mu_plugin()
    {
        $already_attempted = \get_option('iawp_attempted_to_delete_mu_plugin', '0');
        if ($already_attempted === '1') {
            return;
        }
        if (\get_option('iawp_must_use_directory_not_writable', '0') === '1') {
            \delete_option('iawp_must_use_directory_not_writable');
        }
        $mu_plugin_file = \trailingslashit(\WPMU_PLUGIN_DIR) . 'iawp-performance-boost.php';
        if (\file_exists($mu_plugin_file)) {
            \unlink($mu_plugin_file);
        }
        \update_option('iawp_attempted_to_delete_mu_plugin', '1');
    }
    public function load_textdomain()
    {
        \load_plugin_textdomain('independent-analytics', \false, \IAWP_LANGUAGES_DIRECTORY);
    }
    public function polylang_translations()
    {
        if (\function_exists('IAWP_SCOPED\\pll_register_string')) {
            pll_register_string('view_counter', 'Views:', 'Independent Analytics');
        }
    }
    // Settings page where the analytics will appear
    public function add_admin_menu_pages()
    {
        $title = Capability_Manager::white_labeled() ? \esc_html__('Analytics', 'independent-analytics') : 'Independent Analytics';
        \add_menu_page($title, \esc_html__('Analytics', 'independent-analytics'), Capability_Manager::can_view_string(), 'independent-analytics', [$this, 'render_analytics_page'], 'dashicons-analytics', 3);
        if (!Capability_Manager::white_labeled()) {
            \add_submenu_page('independent-analytics', \esc_html__('Feedback', 'independent-analytics'), \esc_html__('Feedback', 'independent-analytics'), Capability_Manager::can_view_string(), \esc_url('https://feedback.independentwp.com/boards/feature-requests'));
        }
        if (\IAWP_SCOPED\iawp_is_free() && !Capability_Manager::white_labeled()) {
            \add_submenu_page('independent-analytics', \esc_html__('Upgrade to Pro &rarr;', 'independent-analytics'), \esc_html__('Upgrade to Pro &rarr;', 'independent-analytics'), Capability_Manager::can_view_string(), \esc_url('https://independentwp.com/pricing/?utm_source=User+Dashboard&utm_medium=WP+Admin&utm_campaign=Upgrade+to+Pro&utm_content=Sidebar'));
        }
    }
    public function hide_freemius_sub_menus($is_visible, $menu_id)
    {
        if ('pricing' == $menu_id) {
            return \false;
        } elseif ('support' == $menu_id && Capability_Manager::white_labeled()) {
            return \false;
        } else {
            return \true;
        }
    }
    public function change_freemius_pricing_url()
    {
        return 'https://independentwp.com/pricing/?utm_source=User+Dashboard&utm_medium=WP+Admin&utm_campaign=Upgrade+to+Pro&utm_content=Account';
    }
    // The submenu item needs to be styled on all admin pages, and we only load stylesheets on our page
    public function style_premium_menu_item()
    {
        if (\IAWP_SCOPED\iawp_is_free()) {
            echo '<style>#toplevel_page_independent-analytics .wp-submenu li:nth-child(4) a { color: #F69D0A; }</style>';
        }
    }
    public function render_analytics_page()
    {
        if (!Capability_Manager::can_view()) {
            return;
        }
        if (Migrations::is_migrating()) {
            echo \IAWP_SCOPED\iawp_blade()->run('interrupt.migration-is-running');
            return;
        }
        $options = new Dashboard_Options();
        $tab = $this->get_current_tab();
        ?>
        <div id="iawp-parent" class="iawp-parent <?php 
        \esc_attr_e($tab);
        ?>">
        <div id="iawp-layout" class="iawp-layout <?php 
        echo $options->is_sidebar_collapsed() ? 'collapsed' : '';
        ?>">
            <?php 
        echo \IAWP_SCOPED\iawp_blade()->run('partials.sidebar', ['favorite_report' => Report_Finder::get_favorite(), 'report_finder' => new Report_Finder(), 'is_white_labeled' => Capability_Manager::white_labeled(), 'can_edit_settings' => Capability_Manager::can_edit(), 'is_dark_mode' => \get_option('iawp_dark_mode')]);
        ?>
        <div class="iawp-layout-main">
            <div class="iawp-tab-content"><?php 
        $date_rage = $options->get_date_range();
        $date_label = $date_rage->label();
        $columns = $options->columns();
        if ($tab == 'views') {
            $table = new Table_Pages($columns);
            $statistics_class = $table->group()->statistics_class();
            $statistics = new $statistics_class($date_rage, null, $options->chart_interval());
            $stats = new Quick_Stats(null, $statistics);
            $chart = new Chart($statistics, $date_label);
            $this->interface($table, $stats, $chart);
        } elseif ($tab == 'referrers') {
            $table = new Table_Referrers($columns);
            $statistics_class = $table->group()->statistics_class();
            $statistics = new $statistics_class($date_rage, null, $options->chart_interval());
            $stats = new Quick_Stats(null, $statistics);
            $chart = new Chart($statistics, $date_label);
            $this->interface($table, $stats, $chart);
        } elseif ($tab == 'geo') {
            $table = new Table_Geo($columns, $options->group());
            $statistics_class = $table->group()->statistics_class();
            $statistics = new $statistics_class($date_rage, null, $options->chart_interval());
            $stats = new Quick_Stats(null, $statistics);
            $table_data_class = $table->group()->rows_class();
            $geo_data = new $table_data_class($date_rage);
            $chart = new Chart_Geo($geo_data->rows(), $date_label);
            $this->interface($table, $stats, $chart);
        } elseif ($tab === 'campaigns') {
            $table = new Table_Campaigns($columns);
            $statistics_class = $table->group()->statistics_class();
            $statistics = new $statistics_class($date_rage, null, $options->chart_interval());
            $stats = new Quick_Stats(null, $statistics);
            $chart = new Chart($statistics, $date_label);
            $this->interface($table, $stats, $chart);
        } elseif ($tab == 'campaign-builder') {
            (new Campaign_Builder())->render_campaign_builder();
        } elseif ($tab == 'devices') {
            $table = new Table_Devices($columns, $options->group());
            $statistics_class = $table->group()->statistics_class();
            $statistics = new $statistics_class($date_rage, null, $options->chart_interval());
            $stats = new Quick_Stats(null, $statistics);
            $chart = new Chart($statistics, $date_label);
            $this->interface($table, $stats, $chart);
        } elseif ($tab === 'real-time') {
            (new Real_Time())->render_real_time_analytics();
        } elseif ($tab == 'settings') {
            echo '<div id="iawp-dashboard" class="iawp-dashboard">';
            if (Capability_Manager::can_edit()) {
                $this->settings->render_settings();
            } else {
                echo '<p class="permission-blocked">' . \esc_html__('You do not have permission to edit the settings.', 'independent-analytics') . '</p>';
            }
            echo '</div>';
        } elseif ($tab == 'learn') {
            echo '<div id="iawp-dashboard" class="iawp-dashboard">';
            echo \IAWP_SCOPED\iawp_blade()->run('learn.learn');
            echo '</div>';
        }
        ?>
            </div>
            <div id="loading-icon" class="loading-icon"><img
                        src="<?php 
        echo \esc_url(\IAWP_SCOPED\iawp_url_to('img/loading.svg'));
        ?>"/>
            </div>
            <button id="scroll-to-top" class="scroll-to-top"><span
                        class="dashicons dashicons-arrow-up-alt"></span>
            </button>
        </div>
        </div>
        </div>
        <?php 
    }
    public function interface(Table $table, $stats, $chart)
    {
        $options = new Dashboard_Options();
        // Todo -  Silly that I use table to get the params just to pass them back into table
        $sort_configuration = $table->sanitize_sort_parameters($options->sort_column(), $options->sort_direction());
        ?>
        <div id="iawp-dashboard"
             class="iawp-dashboard"
             data-controller="report"
             data-report-relative-range-id-value="<?php 
        echo Security::attr($options->relative_range_id());
        ?>"
             data-report-exact-start-value="<?php 
        echo Security::attr($options->start());
        ?>"
             data-report-exact-end-value="<?php 
        echo Security::attr($options->end());
        ?>"
             data-report-group-value="<?php 
        echo Security::attr($options->group());
        ?>"
             data-report-filters-value="<?php 
        \esc_attr_e(Security::json_encode($options->filters()));
        ?>"
             data-report-chart-interval-value="<?php 
        echo Security::attr($options->chart_interval()->id());
        ?>"
             data-report-sort-column-value="<?php 
        echo Security::attr($options->sort_column());
        ?>"
             data-report-sort-direction-value="<?php 
        echo Security::attr($options->sort_direction());
        ?>"
             data-report-columns-value="<?php 
        \esc_attr_e(Security::json_encode($table->visible_column_ids()));
        ?>"
             data-report-visible-datasets-value="<?php 
        \esc_attr_e(Security::json_encode($options->visible_datasets()));
        ?>"
        >
            <div class="report-header-container">
                <?php 
        echo \IAWP_SCOPED\iawp_blade()->run('partials.report-header', ['report' => (new Report_Finder())->current(), 'can_edit' => Capability_Manager::can_edit()]);
        ?>
                <?php 
        $table->output_toolbar();
        ?>
            </div>
            <?php 
        echo $stats->get_html();
        ?>
            <?php 
        echo $chart->get_html($options->visible_datasets());
        ?>
            <?php 
        echo $table->get_table_markup($sort_configuration->column(), $sort_configuration->direction());
        ?>
        </div>
        <div class="iawp-notices"><?php 
        $plugin_conflict_detector = new Plugin_Conflict_Detector();
        if (!$plugin_conflict_detector->has_conflict()) {
            echo \IAWP_SCOPED\iawp_blade()->run('settings.notice', ['notice_text' => $plugin_conflict_detector->get_error(), 'button_text' => \false, 'notice' => 'iawp-error', 'url' => 'https://independentwp.com/knowledgebase/common-questions/views-not-recording/']);
        }
        if (\get_option('iawp_need_clear_cache')) {
            echo \IAWP_SCOPED\iawp_blade()->run('settings.notice', ['notice_text' => \__('Please clear your cache to ensure tracking works properly.', 'independent-analytics'), 'button_text' => \__('I\'ve cleared the cache', 'independent-analytics'), 'notice' => 'iawp-warning', 'url' => 'https://independentwp.com/knowledgebase/common-questions/views-not-recording/']);
        }
        ?>
        </div><?php 
    }
    public function enqueue_admin_scripts($hook)
    {
        $this->enqueue_translations();
        $this->enqueue_nonces();
        if ($hook == 'toplevel_page_independent-analytics') {
            $tab = $this->get_current_tab();
            $this->dequeue_other_plugin_styles();
            \wp_register_style('iawp-style', \IAWP_SCOPED\iawp_url_to('dist/styles/style.css'), [], \IAWP_VERSION);
            \wp_enqueue_style('iawp-style');
            \wp_register_script('iawp-js', \IAWP_SCOPED\iawp_url_to('dist/js/index.js'), [], \IAWP_VERSION);
            \wp_enqueue_script('iawp-js');
            if ($tab === 'views' || $tab === 'referrers' || $tab === 'geo' || $tab === 'campaigns' || $tab === 'campaign-builder' || $tab === 'devices' || $tab === 'real-time') {
                \wp_register_script('iawp-data-table', \IAWP_SCOPED\iawp_url_to('dist/js/data-table.js'), [], \IAWP_VERSION);
                \wp_enqueue_script('iawp-data-table');
            } elseif ($tab == 'settings') {
                \wp_enqueue_style('wp-color-picker');
                \wp_register_script('iawp-settings', \IAWP_SCOPED\iawp_url_to('dist/js/settings.js'), ['wp-color-picker'], \IAWP_VERSION);
                \wp_enqueue_script('iawp-settings');
            } elseif ($tab == 'learn') {
                \wp_register_script('iawp-learn', \IAWP_SCOPED\iawp_url_to('dist/js/learn.js'), [], \IAWP_VERSION);
                \wp_enqueue_script('iawp-learn');
            }
        } elseif ($hook == 'index.php') {
            \wp_register_script('iawp-dashboard-widget', \IAWP_SCOPED\iawp_url_to('dist/js/dashboard_widget.js'), [], \IAWP_VERSION);
            \wp_enqueue_script('iawp-dashboard-widget');
            \wp_register_style('iawp-dashboard-widget-css', \IAWP_SCOPED\iawp_url_to('dist/styles/dashboard_widget.css'), [], \IAWP_VERSION);
            \wp_enqueue_style('iawp-dashboard-widget-css');
        }
        $this->maybe_enqueue_menu_bar_stats_styles();
        \wp_register_style('iawp-freemius-notice-styles', \IAWP_SCOPED\iawp_url_to('dist/styles/freemius_notice_styles.css'), [], \IAWP_VERSION);
        \wp_enqueue_style('iawp-freemius-notice-styles');
    }
    public function enqueue_scripts($hook)
    {
        $this->maybe_enqueue_menu_bar_stats_styles();
    }
    public function enqueue_translations()
    {
        \wp_register_script('iawp-translations', '');
        \wp_enqueue_script('iawp-translations');
        \wp_add_inline_script('iawp-translations', 'const iawpText = ' . \json_encode(['visitors' => \__('Visitors', 'independent-analytics'), 'views' => \__('Views', 'independent-analytics'), 'sessions' => \__('Sessions', 'independent-analytics'), 'orders' => \__('Orders', 'independent-analytics'), 'netSales' => \__('Net Sales', 'independent-analytics'), 'country' => \__('country', 'independent-analytics'), 'exactDates' => \__('Apply Exact Dates', 'independent-analytics'), 'relativeDates' => \__('Apply Relative Dates', 'independent-analytics'), 'copied' => \esc_html__('Copied', 'independent-analytics'), 'exportingPages' => \esc_html__('Exporting Pages...', 'independent-analytics'), 'exportPages' => \esc_html__('Export Pages', 'independent-analytics'), 'exportingReferrers' => \esc_html__('Exporting Referrers...', 'independent-analytics'), 'exportReferrers' => \esc_html__('Export Referrers', 'independent-analytics'), 'exportingGeolocations' => \esc_html__('Exporting Geolocations...', 'independent-analytics'), 'exportGeolocations' => \esc_html__('Export Geolocations', 'independent-analytics'), 'exportingDevices' => \esc_html__('Exporting Devices...', 'independent-analytics'), 'exportDevices' => \esc_html__('Export Devices', 'independent-analytics'), 'exportingCampaigns' => \esc_html__('Exporting Campaigns...', 'independent-analytics'), 'exportCampaigns' => \esc_html__('Export Campaigns', 'independent-analytics'), 'invalidReportArchive' => \esc_html__('This report archive is invalid. Please export your reports and try again.', 'independent-analytics'), 'openMobileMenu' => \esc_html__('Open menu', 'independent-analytics'), 'closeMobileMenu' => \esc_html__('Close menu', 'independent-analytics')]), 'before');
    }
    public function enqueue_nonces()
    {
        \wp_register_script('iawp-nonces', '');
        \wp_enqueue_script('iawp-nonces');
        \wp_add_inline_script('iawp-nonces', 'const iawpActions = ' . \json_encode(AJAX_Manager::getInstance()->get_action_signatures()), 'before');
    }
    public function maybe_enqueue_menu_bar_stats_styles()
    {
        if (Menu_Bar_Stats::is_option_enabled()) {
            \wp_register_style('iawp-front-end-css', \IAWP_SCOPED\iawp_url_to('dist/styles/menu_bar_stats.css'), [], \IAWP_VERSION);
            \wp_enqueue_style('iawp-front-end-css');
        }
    }
    // Remove errant CSS from other plugins affecting our styles
    public function dequeue_other_plugin_styles()
    {
        // https://wordpress.org/plugins/comment-link-remove/
        \wp_dequeue_style('qc_clr_admin_style_css');
    }
    public function get_option($name, $default)
    {
        $option = \get_option($name, $default);
        return $option === '' ? $default : $option;
    }
    public function get_authors()
    {
        $roles = [];
        foreach (\wp_roles()->roles as $role_name => $role_obj) {
            if (!empty($role_obj['capabilities']['edit_posts'])) {
                $roles[] = $role_name;
            }
        }
        $users = \get_users(['role__in' => $roles]);
        return $users;
    }
    public function get_custom_types(bool $tax = \false)
    {
        $args = ['public' => \true, '_builtin' => \false];
        if ($tax) {
            return \get_taxonomies($args);
        } else {
            return \get_post_types($args);
        }
    }
    public function filter_connect_message_on_update($message, $user_first_name, $product_title, $user_login, $site_link, $freemius_link)
    {
        // Add the heading HTML.
        $plugin_name = 'Independent Analytics';
        $title = '<h3>' . \sprintf(\esc_html__('We hope you love %1$s', 'independent-analytics'), $plugin_name) . '</h3>';
        $html = '';
        // Add the introduction HTML.
        $html .= '<p>';
        $html .= \sprintf(\esc_html__('Hi, %1$s! This is an invitation to help the %2$s community.', 'independent-analytics'), $user_first_name, $plugin_name);
        $html .= '<strong>';
        $html .= \sprintf(\esc_html__('If you opt-in, some data about your usage of %2$s will be shared with us', 'independent-analytics'), $user_first_name, $plugin_name);
        $html .= '</strong>';
        $html .= \sprintf(\esc_html__(' so we can improve %2$s. We will also share some helpful info on using the plugin so you can get the most out of your sites analytics.', 'independent-analytics'), $user_first_name, $plugin_name);
        $html .= '</p>';
        $html .= '<p>';
        $html .= \sprintf(\esc_html__('And if you skip this, that\'s okay! %1$s will still work just fine.', 'independent-analytics'), $plugin_name);
        $html .= '</p>';
        return $title . $html;
    }
    public function plugin_action_links($links)
    {
        // Create the link
        $settings_link = '<a class="calendar-link" href="' . \esc_url(\IAWP_SCOPED\iawp_dashboard_url()) . '">' . \esc_html__('Analytics Dashboard', 'independent-analytics') . '</a>';
        // Add the link to the start of the array
        \array_unshift($links, $settings_link);
        return $links;
    }
    public function ip_db_attribution($text)
    {
        if ($this->get_current_tab() === 'geo') {
            $text = $text . ' ' . \esc_html_x('Geolocation data powered by', 'Following text is a noun: DB-IP', 'independent-analytics') . ' ' . '<a href="https://db-ip.com" class="geo-message" target="_blank">DB-IP</a>.';
        }
        return $text;
    }
    public function pagination_page_size()
    {
        return 50;
    }
    public function get_current_tab() : string
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

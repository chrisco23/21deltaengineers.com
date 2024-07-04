<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * This class handles the onboarding process.
 *
 * @package Divi
 */
class ET_Onboarding {
	/**
	 * The class instance.
	 *
	 * @var ET_Onboarding
	 */
	private static $_instance;

	/**
	 * Get the class instance.
	 *
	 * @since ??
	 *
	 * @return ET_Onboarding
	 */
	public static function instance() {
		if ( ! self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}


	/**
	 * Includes files.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function includes() {

		$files_to_include = [
			'helpers.php',
			'ajax.php',
		];

		foreach ( $files_to_include as $file ) {
			require_once $file;
		}

		if ( ! class_exists( 'ET_Core_Portability', false ) ) {
			require_once ET_CORE_PATH . 'components/Cache.php';
			require_once ET_CORE_PATH . 'components/Portability.php';
		}
	}

	/**
	 * WooCommerce installation success.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function et_ai_install_woocommerce() {
		wp_send_json_success();
	}

	/**
	 * Update the ajax calls list.
	 *
	 * @since ??
	 *
	 * @return array
	 */
	public static function update_ajax_calls_list() {
		return [
			'action' => array(
				'et_onboarding_get_overview_status',
				'et_onboarding_get_account_status',
				'et_onboarding_get_result_list',
				'et_onboarding_result_delete_page',
				'et_onboarding_result_delete_menu',
				'et_onboarding_result_delete_theme_builder_layout',
				'et_onboarding_update_customizer',
			),
		];
	}

	/**
	 * Initialize the hooks.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function init_hooks() {
		self::includes();

		add_filter( 'et_builder_load_requests', [ self::class, 'update_ajax_calls_list' ] );

		add_action( 'save_post', [ self::class, 'update_overview_status_cache' ] );
		add_action( 'delete_post', [ self::class, 'update_overview_status_cache' ] );

		add_action( 'wp_ajax_et_onboarding_get_overview_status', [ self::class, 'get_overview_status' ] );
		add_action( 'wp_ajax_et_onboarding_get_account_status', [ self::class, 'get_account_status' ] );
		add_action( 'wp_ajax_et_onboarding_get_result_list', [ self::class, 'get_result_list' ] );
		add_action( 'wp_ajax_et_onboarding_result_delete_page', [ self::class, 'result_delete_page' ] );
		add_action( 'wp_ajax_et_onboarding_update_et_account', [ self::class, 'update_et_account' ] );
		add_action( 'wp_ajax_et_onboarding_result_delete_menu', [ self::class, 'result_delete_menu' ] );
		add_action( 'wp_ajax_et_onboarding_result_delete_theme_builder_layout', [ self::class, 'result_delete_theme_builder_layout' ] );
		add_action( 'wp_ajax_et_onboarding_update_customizer', [ self::class, 'update_customizer_design_settings' ] );
	}

	/**
	 * Add the onboarding submenu menu item.
	 *
	 * @since ??
	 *
	 * @return string
	 */
	public static function add_admin_submenu_item() {
		return add_submenu_page(
			'et_divi_options',
			esc_html__( 'Dashboard', 'Divi' ),
			0 === self::show_onboarding_notice_bubbles()
				? esc_html__( 'Dashboard', 'Divi' )
				: esc_html__( 'Dashboard', 'Divi' ) . ' <span class="awaiting-mod">' . self::show_onboarding_notice_bubbles() . '</span>',
			'manage_options',
			'et_onboarding',
			[ 'ET_Onboarding', 'onboarding_page' ],
			0
		);
	}

	/**
	 * Render the onboarding page.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function onboarding_page() { ?>
		<div id="et-onboarding"></div>
		<?php
	}

	/**
	 * ET_Onboarding helpers.
	 *
	 * @since ??
	 */
	public static function get_onboarding_helpers() {
		global $shortname;

		if ( ! defined( 'ET_ONBOARDING_DIR' ) ) {
			define( 'ET_ONBOARDING_DIR', get_template_directory() . '/onboarding' );
		}

		return [
			'i18n'                     => [
				'dashboard' => require ET_ONBOARDING_DIR . '/i18n/dashboard.php',
				'result'    => require ET_ONBOARDING_DIR . '/i18n/result.php',
			],
			'ai_permission'            => et_pb_is_allowed( 'divi_ai' ),
			'ajaxurl'                  => is_ssl() ? admin_url( 'admin-ajax.php' ) : admin_url( 'admin-ajax.php', 'http' ),
			'et_account'               => et_core_get_et_account(),
			'ai_server_url'            => 'https://ai.elegantthemes.com/api/v1',
			'ajaxurl'                  => is_ssl() ? admin_url( 'admin-ajax.php' ) : admin_url( 'admin-ajax.php', 'http' ),
			'adminUrl'                 => admin_url(),
			'product_version'          => ET_BUILDER_PRODUCT_VERSION,
			'onboarding_url'           => get_template_directory_uri() . '/onboarding',
			'images_uri'               => ET_ONBOARDING_URI . '/images/',
			'is_woocommerce_active'    => class_exists( 'WooCommerce' ),
			'is_woocommerce_installed' => class_exists( 'WooCommerce' ) || file_exists( WP_PLUGIN_DIR . '/woocommerce/woocommerce.php' ),
			'site_info'                => [
				'site_logo'        => et_get_option( $shortname . '_logo' ),
				'site_title'       => get_bloginfo( 'name' ),
				'site_tagline'     => get_bloginfo( 'description' ),
				'site_domain'      => get_bloginfo( 'url' ),
				'site_description' => wp_unslash( et_get_option( 'et_ai_layout_site_description' ) ),
			],
			'nonces'                   => [
				'et_onboarding_overview_status'        => wp_create_nonce( 'et_onboarding_overview_status' ),
				'et_onboarding_account_status'         => wp_create_nonce( 'et_onboarding_account_status' ),
				'et_onboarding_result_list'            => wp_create_nonce( 'et_onboarding_result_list' ),
				'et_onboarding_result_delete_page'     => wp_create_nonce( 'et_onboarding_result_delete_page' ),
				'et_onboarding_nonce'                  => wp_create_nonce( 'et_onboarding-nonce' ),
				'updates'                              => wp_create_nonce( 'updates' ),
				'et_onboarding_create_menu_with_pages' => wp_create_nonce( 'et_onboarding_create_menu_with_pages' ),
				'et_onboarding_update_site_info'       => wp_create_nonce( 'et_onboarding_update_site_info' ),
				'et_onboarding_upload_layout_image'    => wp_create_nonce( 'et_onboarding_upload_layout_image' ),
				'et_onboarding_create_page'            => wp_create_nonce( 'et_onboarding_create_page' ),
				'et_onboarding_update_et_account'      => wp_create_nonce( 'et_onboarding_update_et_account' ),
				'et_onboarding_result_delete_menu'     => wp_create_nonce( 'et_onboarding_result_delete_menu' ),
				'et_onboarding_result_delete_theme_builder_layout' => wp_create_nonce( 'et_onboarding_result_delete_theme_builder_layout' ),
				'et_onboarding_restore_pre_generation_state' => wp_create_nonce( 'et_onboarding_restore_pre_generation_state' ),
				'et_onboarding_update_customizer'      => wp_create_nonce( 'et_onboarding_update_customizer' ),
				'et_onboarding_activate_plugin'        => wp_create_nonce( 'et_onboarding_activate_plugin' ),
				'et_onboarding_publish_new_pages'      => wp_create_nonce( 'et_onboarding_publish_new_pages' ),
			],
			'current_site_url'         => home_url(),
		];
	}

	/**
	 * Update the overview status when a page/post is saved or deleted.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function update_overview_status_cache() {
		et_core_cache_delete( 'overview_status' );
	}

	/**
	 * Get the post count.
	 *
	 * @since ??
	 *
	 * @param string $post_type The post type.
	 * @param bool   $use_meta  Whether to use meta.
	 *
	 * @return array
	 */
	public static function get_post_count( $post_type, $use_meta ) {
		$args = [
			'post_type'      => $post_type,
			'posts_per_page' => -1,
			'post_status'    => 'publish',
			'meta_query'     => self::_get_meta_query( $post_type, $use_meta ),
		];

		$query = new WP_Query( $args );

		return $query->have_posts() ? $query->found_posts : 0;
	}

	/**
	 * Get the meta query.
	 *
	 * @since ??
	 *
	 * @param string $post_type The post type.
	 * @param bool   $use_meta  Whether to use meta.
	 *
	 * @return array
	 */
	private static function _get_meta_query( $post_type, $use_meta ) {
		$additional = [];

		if ( 'et_template' === $post_type ) {
			$additional = [
				'key'     => '_et_theme_builder_marked_as_unused',
				'compare' => 'NOT EXISTS',
			];
		}

		if ( $use_meta ) {
			return [
				[
					'key'     => '_et_pb_use_builder',
					'value'   => 'on',
					'compare' => '=',
				],
				$additional,
			];
		}

		return [ $additional ];
	}

	/**
	 * Get the overview status.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function get_overview_status() {
		et_core_security_check( 'edit_posts', 'et_onboarding_overview_status', 'wp_nonce' );

		$post_type = isset( $_POST['post_type'] ) ? sanitize_text_field( $_POST['post_type'] ) : '';
		$use_meta  = isset( $_POST['use_meta'] ) ? filter_var( $_POST['use_meta'], FILTER_VALIDATE_BOOLEAN ) : false;

		if ( ! in_array( $post_type, [ 'post', 'page', 'et_template' ], true ) ) {
			wp_send_json_error();
		}

		$cache_key       = 'overview_status_' . $post_type;
		$overview_status = et_core_cache_get( $cache_key );

		if ( false === $overview_status ) {
			$overview_status = [ $post_type => self::get_post_count( $post_type, $use_meta ) ];
			et_core_cache_set( $cache_key, $overview_status );
		}

		wp_send_json_success( $overview_status );
	}
	
	/**
	 * Get the account status.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function get_account_status() {
		et_core_security_check( 'manage_options', 'et_onboarding_account_status', 'wp_nonce' );
		global $wp_version;

		$et_username = isset( $_POST['et_username'] ) ? sanitize_text_field( $_POST['et_username'] ) : '';
		$et_api_key  = isset( $_POST['et_api_key'] ) ? sanitize_text_field( $_POST['et_api_key'] ) : '';

		$themes = array(
			'Divi' => wp_get_theme() -> get( 'Version' )
		);

		$request_options = array(
			'timeout'    => 30,
			'body'       => array(
				'action'            => 'check_theme_updates',
				'automatic_updates' => 'on',
				'username'          => urlencode( $et_username ),
				'api_key'           => $et_api_key,
				'installed_themes'  => $themes,
				'class_version'     => '1.2',
			),
			'headers'    => array(
				'rate_limit' => 'false',
			),
			'user-agent' => 'Onboarding/' . $wp_version . '; Theme Updates/' . ET_CORE_VERSION . '; ' . home_url( '/' ),
		);

		$theme_request = wp_remote_post( 'https://www.elegantthemes.com/api/api.php', $request_options );

		if ( ! is_wp_error( $theme_request ) && wp_remote_retrieve_response_code( $theme_request ) === 200 ){
			$theme_response = maybe_unserialize( wp_remote_retrieve_body( $theme_request ) );
			wp_send_json_success( $theme_response );
		} else {
			wp_send_json_error();
		}
	}

	/**
	 * Get the result list.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function get_result_list() {
		et_core_security_check( 'edit_posts', 'et_onboarding_result_list', 'wp_nonce' );

		$post_type = isset( $_POST['post_type'] ) ? sanitize_text_field( $_POST['post_type'] ) : '';

		if ( ! in_array( $post_type, [ 'page', 'et_template' ], true ) ) {
			wp_send_json_error();
		}

		$args = [
			'post_type'      => $post_type,
			'posts_per_page' => -1,
			'order'          => 'ASC',
			'post_status'    => 'publish',
		];

		if ( 'et_template' === $post_type ) {
			$args['meta_query'] = [
				[
					'key'     => '_et_theme_builder_marked_as_unused',
					'compare' => 'NOT EXISTS',
				],
			];
		}

		$query = new WP_Query( $args );

		$result_list = [];

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();

				$result_list[] = [
					'id'    => get_the_ID(),
					'title' => get_the_title(),
					'url'   => get_permalink(),
				];
			}
		}

		wp_send_json_success( $result_list );
	}

	/**
	 * Delete a page.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function result_delete_page() {
		et_core_security_check( 'delete_others_posts', 'et_onboarding_result_delete_page', 'wp_nonce' );

		$page_id = isset( $_POST['page_id'] ) ? absint( $_POST['page_id'] ) : 0;

		if ( ! $page_id ) {
			wp_send_json_error();
		}

		wp_delete_post( $page_id );

		wp_send_json_success();
	}

	/**
	 * Delete a menu.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function result_delete_menu() {
		et_core_security_check( 'delete_others_posts', 'et_onboarding_result_delete_menu', 'wp_nonce' );

		$menu_id = isset( $_POST['menu_id'] ) ? absint( $_POST['menu_id'] ) : 0;

		if ( ! $menu_id ) {
			wp_send_json_error();
		}

		wp_delete_nav_menu( $menu_id );

		wp_send_json_success();
	}

	/**
	 * Update customizer settings.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function update_customizer_design_settings() {
		et_core_security_check( 'manage_options', 'et_onboarding_update_customizer', 'wp_nonce' );

		// phpcs:ignore ET.Sniffs.ValidatedSanitizedInput -- $_POST['design'] is an JSON string, it's value sanitization is done at the time of accessing value.
		$data = isset( $_POST['design'] ) ? json_decode( wp_unslash( $_POST['design'] ), true ) : [];

		if ( empty( $data ) ) {
			wp_send_json_error();
		}

		$design_settings = [];

		foreach ( $data as $key => $value ) {
			$design_settings[ sanitize_key( $key ) ] = sanitize_text_field( $value );
		}

		$options_map = [
			'primary_color'      => 'accent_color',
			'secondary_color'    => 'secondary_accent_color',
			'heading_font_color' => 'header_color',
			'body_font_color'    => 'font_color',
			'heading_font'       => 'heading_font',
			'body_font'          => 'body_font',
		];

		foreach ( $design_settings as $setting => $value ) {
			if ( isset( $options_map[ $setting ] ) ) {
				et_update_option( $options_map[ $setting ], $value );
			}
		}

		wp_send_json_success();
	}

	/**
	 * Update user account settings.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function update_et_account() {
		// Username and API saved shall be reflected in Theme Options.
		// Hence, using the same cap used in Theme Options.
		et_core_security_check( 'manage_options', 'et_onboarding_update_et_account', 'wp_nonce' );

		$username = isset( $_POST['et_username'] ) ? sanitize_text_field( $_POST['et_username'] ) : '';
		$api_key  = isset( $_POST['et_api_key'] ) ? sanitize_text_field( $_POST['et_api_key'] ) : '';

		$result = update_site_option(
			'et_automatic_updates_options',
			[
				'username' => $username,
				'api_key'  => $api_key,
			]
		);

		if ( $result ) {
			wp_send_json_success();
		} else {
			wp_send_json_error();
		}
	}

	/**
	 * Load the onboarding scripts.
	 *
	 * @since ??
	 *
	 * @param bool $enqueue_prod_scripts Whether to enqueue the production scripts.
	 * @param bool $skip_react_loading Whether to skip the React loading.
	 *
	 * @return void
	 */
	public static function load_js( $enqueue_prod_scripts = true, $skip_react_loading = false ) {
		if ( defined( 'ET_BUILDER_PLUGIN_ACTIVE' ) ) {
			if ( ! defined( 'ET_ONBOARDING_URI' ) ) {
				define( 'ET_ONBOARDING_URI', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
			}

			if ( ! defined( 'ET_ONBOARDING_DIR' ) ) {
				define( 'ET_ONBOARDING_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
			}
		} else {
			if ( ! defined( 'ET_ONBOARDING_URI' ) ) {
				define( 'ET_ONBOARDING_URI', get_template_directory_uri() . '/onboarding' );
			}

			if ( ! defined( 'ET_ONBOARDING_DIR' ) ) {
				define( 'ET_ONBOARDING_DIR', get_template_directory() . '/onboarding' );
			}
		}

		et_core_load_main_fonts();
		wp_enqueue_media();
		$portability = et_core_portability_load( 'et_builder' );
		$portability->assets();

		$CORE_VERSION = defined( 'ET_CORE_VERSION' ) ? ET_CORE_VERSION : '';
		$ET_DEBUG     = defined( 'ET_DEBUG' ) && ET_DEBUG;
		$DEBUG        = $ET_DEBUG;

		$home_url       = wp_parse_url( get_site_url() );
		$build_dir_uri  = ET_ONBOARDING_URI . '/build';
		$common_scripts = ET_COMMON_URL . '/scripts';
		$cache_buster   = $DEBUG ? wp_rand() / mt_getrandmax() : $CORE_VERSION;
		$asset_path     = ET_ONBOARDING_DIR . '/build/et-onboarding.bundle.js';

		if ( file_exists( $asset_path ) ) {
			wp_enqueue_style( 'et-onboarding-styles', "{$build_dir_uri}/et-onboarding.bundle.css", [], (string) $cache_buster );
		}

		wp_enqueue_script( 'es6-promise', "{$common_scripts}/es6-promise.auto.min.js", [], '4.2.2', true );

		$BUNDLE_DEPS = [
			'jquery',
			'react',
			'react-dom',
			'es6-promise',
		];

		if ( $DEBUG || $enqueue_prod_scripts || file_exists( $asset_path ) ) {
			$BUNDLE_URI = ! file_exists( $asset_path ) ? "{$home_url['scheme']}://{$home_url['host']}:31489/et-onboarding.bundle.js" : "{$build_dir_uri}/et-onboarding.bundle.js";

			// Skip the React loading if we already have React ( Gutenberg editor for example ) to avoid conflicts.
			if ( ! $skip_react_loading ) {
				if ( function_exists( 'et_fb_enqueue_react' ) ) {
					et_fb_enqueue_react();
				}
			}

			wp_enqueue_script( 'et-onboarding', $BUNDLE_URI, $BUNDLE_DEPS, (string) $cache_buster, true );
			wp_add_inline_script( 'et-onboarding', '_.noConflict(); _.noConflict();', 'after' );
			wp_localize_script( 'et-onboarding', 'et_onboarding_data', self::get_onboarding_helpers() );
		}
	}

	/**
	 * Redirect to onboarding page after theme activation.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public static function redirect_to_onboarding_page() {
		$activated_theme = wp_get_theme();

		if ( 'Divi' === $activated_theme->stylesheet ) {
			// Check if redirection has already been performed.
			$redirected = get_transient( 'et_onboarding_redirect_done', false );

			if ( ! is_bool( $redirected ) ) {
				delete_transient( 'et_onboarding_redirect_done' );
			}

			if ( ! $redirected ) {
				$divi_options_page_url = admin_url( 'admin.php?page=et_onboarding' );

				// Store a flag to indicate that redirection has been performed.
				set_transient( 'et_onboarding_redirect_done', true, DAY_IN_SECONDS );

				$divi_options_page_url = add_query_arg( 'content', 'disabled', $divi_options_page_url );

				// Perform redirection.
				wp_safe_redirect( $divi_options_page_url );
				exit;
			}
		}
	}

	/**
	 * Get the number of onboarding notices to show.
	 *
	 * @since ??
	 */
	public static function show_onboarding_notice_bubbles() {
		// phpcs:ignore Squiz.Commenting.BlockComment.NoNewLine -- A multi-line comment at the beginning of the function.
		/* get_site_option() function is almost identical to get_option(), except that in multisite,
		* it returns the network-wide option. For non-multisite installs, it uses get_option.
		*
		* @see https://developer.wordpress.org/reference/functions/get_site_option/
		*/
		$account_api_key_status = get_site_option( 'et_account_api_key_status' );
		$account_status         = get_site_option( 'et_account_status', 'not_active' );
		$account_options        = get_site_option( 'et_automatic_updates_options', [] );
		$count                  = 0;

		if ( empty( $account_options )
			|| ( isset( $account_options['username'] ) && '' === $account_options['username'] )
			|| ( isset( $account_options['api_key'] ) && '' === $account_options['username'] ) ) {
			$count = 1;

			return $count;
		}

		if ( in_array( $account_status, [ 'expired', 'not_found' ], true ) ) {
			$count = 1;
		}

		if ( ( ! in_array( $account_status, [ 'expired', 'not_found' ], true ) ) && ! empty( $account_api_key_status ) ) {
			switch ( $account_api_key_status ) {
				case 'not_active':
					$count = 1;
					break;
				case 'deactivated':
					$count = 1;
					break;
				case 'invalid':
					$count = 1;
					break;
			}
		}

		return $count;
	}
}

<?php

namespace WebpConverter\Error\Notice;

use WebpConverter\PluginData;
use WebpConverter\Settings\Option\ExtraFeaturesOption;

/**
 * {@inheritdoc}
 */
class RewritesNotWorkingNotice implements ErrorNotice {

	const ERROR_KEY = 'rewrites_not_working';

	/**
	 * @var PluginData
	 */
	private $plugin_data;

	public function __construct( PluginData $plugin_data ) {
		$this->plugin_data = $plugin_data;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_key(): string {
		return self::ERROR_KEY;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_message(): array {
		$plugin_settings = $this->plugin_data->get_plugin_settings();

		$message = [
			sprintf(
			/* translators: %1$s: open strong tag, %2$s: close strong tag */
				__( 'Redirects on your server are not working. Check the correct configuration for you in %1$sthe plugin FAQ%2$s. If you have checked the configuration, it means that your server does not support redirects from the .htaccess file or your server configuration is not compatible with this plugin.', 'webp-converter-for-media' ),
				'<a href="https://wordpress.org/plugins/webp-converter-for-media/#faq" target="_blank">',
				'</a>'
			),
		];
		if ( ! in_array( ExtraFeaturesOption::OPTION_VALUE_FORCE_DOCUMENT_ROOT, $plugin_settings[ ExtraFeaturesOption::OPTION_NAME ] ) ) {
			$message[] = sprintf(
			/* translators: %1$s: option label, %2$s: open anchor tag, %2$s: close anchor tag */
				__( 'Try to activate the "%1$s" option in the plugin settings. This should solve your problem. In case of any problems, please %2$scontact us%3$s.', 'webp-converter-for-media' ),
				'<strong>' . __( 'Use absolute path (ABSPATH) instead of %{DOCUMENT_ROOT} for rewrites in .htaccess file', 'webp-converter-for-media' ) . '</strong>',
				'<a href="https://wordpress.org/support/plugin/webp-converter-for-media/" target="_blank">',
				'</a>'
			);
		} else {
			$message[] = __( 'In this case, please contact your server administrator.', 'webp-converter-for-media' );
		}

		return $message;
	}
}

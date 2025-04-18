<?php

namespace WebpConverter\Loader;

use WebpConverter\Settings\Option\OutputFormatsOption;
use WebpConverter\Settings\Option\SupportedDirectoriesOption;
use WebpConverter\Settings\Option\SupportedExtensionsOption;

/**
 * Supports method of loading images using .php file as Pass Thru.
 */
class PassthruLoader extends LoaderAbstract {

	const LOADER_TYPE   = 'passthru';
	const PATH_LOADER   = '/webpc-passthru.php';
	const LOADER_SOURCE = '/includes/passthru.php';

	/**
	 * {@inheritdoc}
	 */
	public function get_type(): string {
		return self::LOADER_TYPE;
	}

	/**
	 * {@inheritdoc}
	 */
	public function init_admin_hooks() {
		add_filter( 'webpc_debug_image_url', [ $this, 'update_image_urls' ] );
	}

	/**
	 * {@inheritdoc}
	 */
	public function init_front_end_hooks() {
		add_action( 'init', [ $this, 'start_buffering' ] );
	}

	/**
	 * {@inheritdoc}
	 */
	public function activate_loader( bool $is_debug = false ) {
		$settings    = ( ! $is_debug ) ? $this->plugin_data->get_plugin_settings() : $this->plugin_data->get_plugin_settings_debug();
		$path_source = $this->plugin_info->get_plugin_directory_path() . self::LOADER_SOURCE;
		$source_code = ( is_readable( $path_source ) ) ? file_get_contents( $path_source ) ?: '' : '';
		if ( ! $source_code ) {
			return;
		}

		$path_dir_uploads = apply_filters( 'webpc_dir_name', '', 'uploads' );
		$path_dir_webp    = apply_filters( 'webpc_dir_name', '', 'webp' );
		$upload_suffix    = implode( '/', array_diff( explode( '/', $path_dir_uploads ), explode( '/', $path_dir_webp ) ) );
		$mime_types       = $this->format_factory->get_mime_types( $settings[ OutputFormatsOption::OPTION_NAME ] );

		$source_code = preg_replace(
			'/(PATH_UPLOADS(?:\s+)= \')(\')/',
			'$1/' . $path_dir_uploads . '/$2',
			$source_code
		);
		$source_code = preg_replace(
			'/(PATH_UPLOADS_WEBP(?:\s+)= \')(\')/',
			'$1/' . $path_dir_webp . '/' . $upload_suffix . '/$2',
			$source_code ?: ''
		);
		$source_code = preg_replace(
			'/(MIME_TYPES(?:\s+)= \')(\')/',
			'$1' . json_encode( $mime_types ) . '$2',
			$source_code ?: ''
		);

		$dir_output = dirname( apply_filters( 'webpc_dir_path', '', 'uploads' ) );
		if ( is_writable( $dir_output ) ) {
			file_put_contents( $dir_output . self::PATH_LOADER, $source_code );
		}
	}

	/**
	 * {@inheritdoc}
	 */
	public function deactivate_loader() {
		$dir_output = dirname( apply_filters( 'webpc_dir_path', '', 'uploads' ) ) . self::PATH_LOADER;
		if ( is_writable( $dir_output ) ) {
			unlink( $dir_output );
		}
	}

	/**
	 * @return void
	 * @internal
	 */
	public function start_buffering() {
		if ( ! ( ( defined( 'DOING_AJAX' ) && DOING_AJAX ) || ( ! is_admin() && ! is_network_admin() ) ) ) {
			return;
		}

		ob_start(
			function ( $buffer ) {
				return $this->update_image_urls( $buffer );
			}
		);
	}

	/**
	 * Replaces URLs to source images in output buffer.
	 *
	 * @param string $buffer   Contents of output buffer.
	 * @param bool   $is_debug Is debugging?
	 *
	 * @return string Contents of output buffer.
	 * @internal
	 */
	public function update_image_urls( string $buffer, bool $is_debug = false ): string {
		$settings   = ( ! $is_debug ) ? $this->plugin_data->get_plugin_settings() : $this->plugin_data->get_plugin_settings_debug();
		$extensions = implode( '|', $settings[ SupportedExtensionsOption::OPTION_NAME ] );
		if ( ! $extensions ) {
			return $buffer;
		}

		$source_dir   = $this->get_loader_url();
		$allowed_dirs = $this->get_allowed_dirs( $settings );
		if ( ! $source_dir || ! $allowed_dirs ) {
			return $buffer;
		}

		$dir_paths   = str_replace( '/', '\\/', implode( '|', $allowed_dirs ) );
		$has_nocache = apply_filters( 'webpc_passthru_url_nocache', true );

		return preg_replace(
			'/(https?:\/\/(?:[^\s()"\']+)(?:' . $dir_paths . ')(?:[^\s()"\']+)\.(?:' . $extensions . '))/',
			$source_dir . '?src=$1' . ( ( $has_nocache ) ? '&amp;nocache=1' : '' ),
			$buffer
		) ?: '';
	}

	/**
	 * Returns URL for Passthru loader.
	 *
	 * @return string|null URL of source PHP file.
	 */
	public static function get_loader_url() {
		if ( ! $source_dir = dirname( apply_filters( 'webpc_dir_url', '', 'uploads' ) ) ) {
			return null;
		}
		return $source_dir . self::PATH_LOADER;
	}

	/**
	 * Returns list of directories for which redirection from source images to output images.
	 *
	 * @param mixed[] $settings Plugin settings.
	 *
	 * @return string[] List of directories names.
	 */
	private function get_allowed_dirs( array $settings ): array {
		$dirs = [];
		foreach ( $settings[ SupportedDirectoriesOption::OPTION_NAME ] as $dir ) {
			$dirs[] = apply_filters( 'webpc_dir_name', '', $dir );
		}
		return array_filter( $dirs );
	}
}

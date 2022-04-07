<?php

namespace WebpConverter\Service;

use WebpConverter\Conversion\Method\MethodIntegrator;
use WebpConverter\Conversion\PathsFinder;
use WebpConverter\HookableInterface;
use WebpConverter\PluginData;
use WebpConverter\Repository\TokenRepository;

/**
 * Registers the commands handled by WP_CLI.
 *
 * @see https://wp-cli.org
 */
class WpCliManager implements HookableInterface {

	/**
	 * @var PluginData
	 */
	private $plugin_data;

	/**
	 * @var TokenRepository
	 */
	private $token_repository;

	public function __construct( PluginData $plugin_data, TokenRepository $token_repository ) {
		$this->plugin_data      = $plugin_data;
		$this->token_repository = $token_repository;
	}

	/**
	 * {@inheritdoc}
	 */
	public function init_hooks() {
		if ( ! class_exists( '\WP_CLI' ) ) {
			return;
		}

		\WP_CLI::add_command( 'webp-converter calculate', [ $this, 'calculate_images' ] );
		\WP_CLI::add_command( 'webp-converter regenerate', [ $this, 'regenerate_images' ] );
	}

	/**
	 * @return void
	 */
	public function calculate_images() {
		\WP_Cli::log(
			__( 'How many maximum images for conversion are on my website?', 'webp-converter-for-media' )
		);

		$images_count = count(
			( new PathsFinder( $this->plugin_data, $this->token_repository ) )->get_paths( false )
		);

		\WP_CLI::success(
			sprintf(
			/* translators: %1$s: images count */
				__( '%1$s for AVIF and %1$s for WebP', 'webp-converter-for-media' ),
				number_format( $images_count, 0, '', ' ' )
			)
		);
	}

	/**
	 * @param string[] $args .
	 *
	 * @return void
	 */
	public function regenerate_images( array $args ) {
		$skip_converted    = ( ( $args[0] ?? '' ) !== '-force' );
		$paths_chunks      = ( new PathsFinder( $this->plugin_data, $this->token_repository ) )
			->get_paths_by_chunks( $skip_converted );
		$conversion_method = ( new MethodIntegrator( $this->plugin_data ) );

		$progress    = \WP_CLI\Utils\make_progress_bar(
			__( 'Regenerate images', 'webp-converter-for-media' ),
			count( $paths_chunks )
		);
		$size_before = 0;
		$size_after  = 0;

		foreach ( $paths_chunks as $images_paths ) {
			$response = $conversion_method->init_conversion( $images_paths, ! $skip_converted );

			if ( $response !== null ) {
				foreach ( $response['errors'] as $error_message ) {
					if ( ! $response['is_fatal_error'] ) {
						\WP_CLI::warning( $error_message );
					} else {
						\WP_CLI::error( $error_message );
					}
				}

				if ( $response['is_fatal_error'] ) {
					return;
				}

				$size_before += $response['size']['before'];
				$size_after  += $response['size']['after'];
			}

			$progress->tick();
		}

		$progress->finish();
		\WP_CLI::success(
			__( 'The process was completed successfully. Your images have been converted!', 'webp-converter-for-media' )
		);

		if ( $size_before > $size_after ) {
			\WP_CLI::log(
				sprintf(
				/* translators: %s progress value */
					__( 'Saving the weight of your images: %s', 'webp-converter-for-media' ),
					$this->format_bytes( $size_before - $size_after )
				)
			);
		}
	}

	private function format_bytes( int $size ): string {
		$suffixes = [ 'B', 'KB', 'MB', 'GB' ];
		$base     = floor( log( $size ) / log( 1024 ) );

		return sprintf( '%.2f ' . $suffixes[ $base ], ( $size / pow( 1024, floor( $base ) ) ) );
	}
}

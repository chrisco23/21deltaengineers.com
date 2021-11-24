<?php

namespace WebpConverter\Settings\Option;

use WebpConverter\Conversion\Format\FormatFactory;
use WebpConverter\Conversion\Format\WebpFormat;

/**
 * {@inheritdoc}
 */
class OutputFormatsOption extends OptionAbstract {

	const OPTION_NAME = 'output_formats';

	/**
	 * @var ConversionMethodOption
	 */
	private $conversion_method_option;

	/**
	 * Object of integration class supports all conversion methods.
	 *
	 * @var FormatFactory
	 */
	private $formats_integration;

	public function __construct( ConversionMethodOption $conversion_method_option ) {
		$this->conversion_method_option = $conversion_method_option;
		$this->formats_integration      = new FormatFactory();
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_priority(): int {
		return 30;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_name(): string {
		return self::OPTION_NAME;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_type(): string {
		return OptionAbstract::OPTION_TYPE_CHECKBOX;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_label(): string {
		return __( 'List of supported output formats', 'webp-converter-for-media' );
	}

	/**
	 * {@inheritdoc}
	 *
	 * @return string[]
	 */
	public function get_values( array $settings ): array {
		return $this->formats_integration->get_formats();
	}

	/**
	 * {@inheritdoc}
	 *
	 * @return string[]
	 */
	public function get_default_value( array $settings = null ): array {
		$method  = ( isset( $settings[ ConversionMethodOption::OPTION_NAME ] ) && $settings[ ConversionMethodOption::OPTION_NAME ] )
			? $settings[ ConversionMethodOption::OPTION_NAME ]
			: $this->conversion_method_option->get_default_value( $settings );
		$formats = array_keys( $this->formats_integration->get_available_formats( $method ) );

		return ( in_array( WebpFormat::FORMAT_EXTENSION, $formats ) ) ? [ WebpFormat::FORMAT_EXTENSION ] : [];
	}

	/**
	 * {@inheritdoc}
	 *
	 * @return string[]
	 */
	public function get_disabled_values( array $settings ): array {
		$method            = ( isset( $settings[ ConversionMethodOption::OPTION_NAME ] ) && $settings[ ConversionMethodOption::OPTION_NAME ] )
			? $settings[ ConversionMethodOption::OPTION_NAME ]
			: $this->conversion_method_option->get_default_value( $settings );
		$formats           = $this->formats_integration->get_formats();
		$formats_available = $this->formats_integration->get_available_formats( $method );

		return array_keys( array_diff( $formats, $formats_available ) );
	}
}

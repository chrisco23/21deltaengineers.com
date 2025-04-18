<?php

namespace WebpConverter\Settings\Option;

/**
 * {@inheritdoc}
 */
class ExcludedDirectoriesOption extends OptionAbstract {

	const OPTION_NAME = 'excluded_dirs';

	/**
	 * {@inheritdoc}
	 */
	public function get_name(): string {
		return self::OPTION_NAME;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_form_name(): string {
		return OptionAbstract::FORM_TYPE_ADVANCED;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_type(): string {
		return OptionAbstract::OPTION_TYPE_INPUT;
	}

	/**
	 * {@inheritdoc}
	 */
	public static function get_label(): string {
		return __( 'Excluded directories', 'webp-converter-for-media' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_info(): string {
		return __( 'Directory names separated by a comma that will be skipped during image conversion.', 'webp-converter-for-media' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_placeholder(): string {
		return 'directory-1,directory-2';
	}

	/**
	 * {@inheritdoc}
	 *
	 * @return string[]
	 */
	public function get_available_values( array $settings ): array {
		return [];
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_default_value(): string {
		return '';
	}

	/**
	 * {@inheritdoc}
	 */
	public function validate_value( $current_value, ?array $available_values = null, ?array $disabled_values = null ): string {
		$valid_values = explode( ',', $current_value );
		$valid_values = array_map(
			function ( $value ) {
				return preg_replace(
					'/(\/|\\\)+/',
					'$1',
					trim( $value, '/\\' )
				);
			},
			$valid_values
		);

		return implode(
			',',
			array_filter(
				$valid_values,
				function ( $directory_name ) {
					return ( $directory_name !== '' );
				}
			)
		);
	}

	/**
	 * {@inheritdoc}
	 */
	public function sanitize_value( $current_value ): string {
		return $this->validate_value( $current_value );
	}
}

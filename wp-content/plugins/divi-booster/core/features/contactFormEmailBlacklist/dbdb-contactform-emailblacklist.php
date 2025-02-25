<?php

$dbdb_contactform_emailblacklist = new DBDB_ContactForm_EmailBlacklist();
$dbdb_contactform_emailblacklist->init();

class DBDB_ContactForm_EmailBlacklist {
	
	protected $use_email_blacklist_key = 'dbdb_use_email_blacklist';
	protected $email_blacklist_key = 'dbdb_email_blacklist';
    private $current_blacklist;
    private $current_contact_form;
	
	public function init() {
        if (function_exists('add_action')) {
            add_action('db_vb_css', array($this, 'suppress_vb_support_notices'));
            add_action('db_admin_css', array($this, 'suppress_vb_support_notices'));
        }
        if (function_exists('add_filter')) {
            add_filter('dbdb_et_pb_module_shortcode_attributes', array($this, 'filter_blacklisted_email'), 10, 3);
            add_filter('dbdb_et_pb_module_shortcode_attributes', array($this, 'register_email_fields'), 10, 3);
            add_filter('et_pb_contact_form_shortcode_output', array($this, 'remove_is_email_filter'));
            add_filter('et_module_shortcode_output', array($this, 'add_custom_error_message_filter'), 10, 3);
            add_filter('et_pb_all_fields_unprocessed_et_pb_contact_form', array($this, 'add_fields'));
        }
	}
	
	// Disable vb support notices for the added fields as the contact form is not submitable in vb so these notices are not applicable. 
	// -- There doesn't seem to be a good way to selectively disable notices, so using the most specific CSS possible to minimise impact on other plugins
	public function suppress_vb_support_notices() {
		?>
		<?php echo $this->emailblacklist_toggle_selector(); ?> .et-fb-option--yes-no_button .et-fb-no-vb-support-warning,
		<?php echo $this->emailblacklist_toggle_selector(); ?> .et-fb-option--textarea .et-fb-no-vb-support-warning,
		<?php echo $this->emailblacklist_toggle_selector(); ?> .et-fb-option--text .et-fb-no-vb-support-warning { 
			display: none !important; 
		}
		<?php
	}

    public function add_custom_error_message_filter($output, $render_slug, $module) {
        if (!is_string($output)) { 
            return $output; 
        }
        if ($render_slug !== 'et_pb_contact_form') { 
            return $output; 
        }
        if (!isset($module->props)) { 
            return $output; 
        }
        $props = $module->props;
        preg_match('/<div class="et-pb-contact-message">(.*?)<\/div>/', $output, $matches);
        if (!empty($matches[0]) && !empty($matches[1])) {
            $output = str_replace($matches[0], '<div class="et-pb-contact-message">'.apply_filters('dbdb_et_pb_contact_form_error_text', $matches[1], $props).'</div>', $output);
        }
        return $output;
    }

	public function register_email_fields($props, $atts, $slug) {
        if ($slug === 'et_pb_contact_field') { 
            if (isset($props['field_type']) && $props['field_type'] === 'email') { 
                if (isset($props['field_id']) && isset($this->current_blacklist)) {
                    foreach($this->current_blacklist as $str) {
                        if (strpos($this->submitted_email($props['field_id'], $this->current_contact_form), $str) !== false) {
                            add_filter('is_email', 'dbdb_return_false');
                            add_filter('dbdb_et_pb_contact_form_error_text', array($this, 'set_custom_error_message'), 10, 2);
                            break;
                        }
                    }
                }
            }
        }
        return $props;
    }

	public function filter_blacklisted_email($props, $atts, $slug) {
		
		if ($slug !== 'et_pb_contact_form') { 
			return $props; 
		}
			
		static $contact_form_num = 0; 
		$this_contact_form_num = $contact_form_num;
		$contact_form_num++;
		
		$submitted = !empty($_POST['et_pb_contactform_submit_'.$this_contact_form_num]); 
        
        $this->current_blacklist = $this->email_blacklist($props);
        $this->current_contact_form = $this_contact_form_num;

		if (!$submitted || !$this->use_email_blacklist($props)) { 
			return $props; 
		}
		
		foreach($this->email_blacklist($props) as $str) {
            if (strpos($this->submitted_email('email', $this_contact_form_num), $str) !== false) {
                add_filter('is_email', 'dbdb_return_false');
                add_filter('dbdb_et_pb_contact_form_error_text', array($this, 'set_custom_error_message'), 10, 2);
                break;
            }
		}
		
		return $props;
	}
	
	protected function submitted_email($id, $contact_form_num) {
		$email_key = $this->email_field_name($id, $contact_form_num);
		return !empty($_POST[$email_key])?$_POST[$email_key]:'';
	}
	
	protected function email_field_name($id, $contact_form_num) {
		if ($this->divi_has_duplicate_contact_form_id_bug()) {
			$contact_form_num = max(1, $contact_form_num); 
		}
		return 'et_pb_contact_'.$id.'_'.$contact_form_num;
	}
	
	protected function divi_has_duplicate_contact_form_id_bug() {
		// Divi had a bug where fields in both first and second contact forms would be given index of 1. Fixed in Divi 3.18.1.
		return dbdb_theme_version('3.18.1', '<');
	}
	
	protected function emailblacklist_toggle_selector() {
		return '.et-fb-tabs__panel--general .et-fb-form__toggle-opened[data-name="'.esc_attr($this->toggleSlug()).'"]';
	}

	protected function use_email_blacklist($props) {
		return (isset($props[$this->use_email_blacklist_key]) && $props[$this->use_email_blacklist_key] === 'on');
	}

	public function email_blacklist($props) {
		if (!isset($props[$this->email_blacklist_key]) || empty($props[$this->email_blacklist_key])) {
			return array();
		}
		$lines = preg_split('/\r\n|\r|\n/', $props[$this->email_blacklist_key]);
		$lines = array_map(array($this, 'canonicalize_blacklist_item'), $lines);
		$lines = array_values(array_filter($lines)); // Remove blank lines
		$lines = array_unique($lines);
		return $lines;
	}

	protected function canonicalize_blacklist_item($line) {
		return trim(strip_tags($line));
	}

    public function set_custom_error_message($msg, $props) {
        if (!empty($msg) && $this->use_email_blacklist($props) && !empty($props['dbdb_email_blacklist_error_msg'])) {
            $msg = '<p class="et_pb_contact_error_text">'.esc_html($props['dbdb_email_blacklist_error_msg']).'</p>';
        }
        return $msg;
    }

	public function remove_is_email_filter($output) {
		remove_filter('is_email', 'dbdb_return_false');
        remove_filter('dbdb_et_pb_contact_form_error_text', array($this, 'set_custom_error_message'));
		return $output;
	}

	public function add_fields($fields) {
		return $fields + array(
			$this->use_email_blacklist_key => array(
				'label'             => esc_html__('Use Email Blacklist', 'divi_booster'),
				'type'              => 'yes_no_button',
				'option_category'   => 'configuration',
				'options'           => array(
					'on'  => esc_html__('Yes', 'et_builder'),
					'off' => esc_html__('No', 'et_builder'),
				),
				'default_on_front'  => 'off',
				'toggle_slug'       => $this->toggleSlug(),
				'description'       => esc_html__('Turn the email blacklist on or off using this button.', 'divi_booster'),
			),
			$this->email_blacklist_key => array(
				'label'             => esc_html__('Email Blacklist', 'divi_booster'),
				'type'              => 'textarea',
				'option_category'   => 'configuration',
				'toggle_slug'       => $this->toggleSlug(),
				'description'       => esc_html__('When the sender\'s email address contains any of these strings, it will be rejected. One string per line. It will match inside words, so "example.com" will match "test@example.com", "mail@example.com" and "mail@anotherexample.com".', 'divi_booster'),
				'show_if' => array(
					$this->use_email_blacklist_key => 'on',
				),
			),
            'dbdb_email_blacklist_error_msg' => array(
				'label'             => esc_html__('Email Blacklisted Message', 'divi-booster'),
				'type'              => 'text',
				'option_category'   => 'configuration',
				'toggle_slug'       => $this->toggleSlug(),
				'description'       => esc_html__('The message to display when a blacklisted email is submitted.".', 'divi-booster'),
                'default' => esc_html__( 'Invalid Email.', 'et_builder' ),
				'show_if' => array(
					$this->use_email_blacklist_key => 'on',
				),
			),
		);
	}

	public function toggleSlug() {
		return dbdb_theme_version('4.0', '>=')?'spam':'elements';
	}
	
	public function get_email_blacklist_key() {
		return $this->email_blacklist_key;
	}
	
	public function get_use_email_blacklist_key() {
		return $this->use_email_blacklist_key;
	}
	
}
<?php
namespace DiviBooster\DiviBooster\ContactFormModuleConfirmationEmail;

$dbdb_contactform_confirmation = new DBDB_ContactForm_Confirmation();
$dbdb_contactform_confirmation->init();

class DBDB_ContactForm_Confirmation {

    private $attrs;
	
	public function init() {
        if (function_exists('add_action')) {
            add_action('db_vb_css', array($this, 'suppress_vb_support_notices'));
            add_action('db_admin_css', array($this, 'suppress_vb_support_notices'));
        }
        if (function_exists('add_filter')) {
            add_filter('dbdb_et_pb_module_shortcode_attributes', array($this, 'add_email_filter'), 10, 3);
            add_filter('et_pb_contact_form_shortcode_output', array($this, 'remove_email_filter'));
            add_filter('et_pb_all_fields_unprocessed_et_pb_contact_form', array($this, 'add_fields'));
        }
    }
    
	public function suppress_vb_support_notices() {
		?>
		#et-fb-dbdb_confirmation_subject + .et-fb-no-vb-support-warning,
        #et-fb-dbdb_confirmation_content + .et-fb-no-vb-support-warning,
        #et-fb-dbdb_confirmation_field_id + .et-fb-no-vb-support-warning {
            display: none !important;
        }
		<?php
	}

    public function add_fields($fields) {
        if (!is_array($fields)) { return $fields; }
    
        return $fields + array(
            'dbdb_send_confirmation_email' => array(
                'label'             => esc_html__( 'Send Confirmation Email', 'divi-booster'),
                'type'              => 'yes_no_button',
                'option_category'   => 'configuration',
                'options'           => array(
                    'on'  => esc_html__( 'Yes', 'et_builder' ),
                    'off' => esc_html__( 'No', 'et_builder' ),
                ),
                'default'           => 'off',
                'tab_slug'		  => 'general',
                'toggle_slug'       => 'email',
                'description'       => esc_html__( 'Send a confirmation email to the submitter when a message is submitted.', 'divi-booster' ),
            ),
            'dbdb_confirmation_field_id' => array(
                'label'             => esc_html__( 'Email Field ID', 'divi-booster'),
                'type'              => 'text',
                'option_category'   => 'configuration',
                'default'           => 'Email',
                'tab_slug'		  => 'general',
                'toggle_slug'       => 'email',
                'description'       => esc_html__( 'The ID of the email field in the contact form.', 'divi-booster' ),
                'show_if' => array(
                    'dbdb_send_confirmation_email' => 'on',
                ),
            ),
            'dbdb_confirmation_subject' => array(
                'label'             => esc_html__( 'Confirmation Email Subject', 'divi-booster'),
                'type'              => 'text',
                'option_category'   => 'configuration',
                'default'           => 'We have received your contact form submission',
                'tab_slug'		  => 'general',
                'toggle_slug'       => 'email',
                'description'       => esc_html__( 'Subject for the confirmation email.', 'divi-booster' ),
                'show_if' => array(
                    'dbdb_send_confirmation_email' => 'on',
                ),
            ),
            'dbdb_confirmation_content' => array(
                'label'             => esc_html__( 'Confirmation Email Content', 'divi-booster'),
                'type'              => 'tiny_mce',
                'option_category'   => 'configuration',
                'default'           => 'Thank you for your submission! We will get back to you soon.',
                'tab_slug'		  => 'general',
                'toggle_slug'       => 'email',
                'description'       => esc_html__( 'Content for the confirmation email.', 'divi-booster' ),
                'show_if' => array(
                    'dbdb_send_confirmation_email' => 'on',
                ),
            ),
        );
    }

    public function add_email_filter($props, $attrs, $slug) {
        if ($slug === 'et_pb_contact_form') { 
            $this->attrs = $attrs;
            if (isset($attrs['dbdb_send_confirmation_email']) && $attrs['dbdb_send_confirmation_email'] === 'on') { 
                add_action('et_pb_contact_form_submit', array($this, 'send_confirmation_email'), 10, 3);
            }
        }
        return $props;
    }

    public function remove_email_filter($output) {
        remove_action('et_pb_contact_form_submit', array($this, 'send_confirmation_email'));
        return $output;
    }

    public function send_confirmation_email($processed_fields_values, $et_contact_error, $contact_form_info) {
        if ( true === $et_contact_error ) {
            return;
        }
        
        $email_field_id = isset($this->attrs['dbdb_confirmation_field_id'])?$this->attrs['dbdb_confirmation_field_id']:'Email';
        $email_field_id = strtolower($email_field_id);
        if (isset($processed_fields_values[$email_field_id]['value'])) {
            $email = $processed_fields_values[$email_field_id]['value'];
            $subject = isset($this->attrs['dbdb_confirmation_subject'])?$this->attrs['dbdb_confirmation_subject']:'We have received your contact form submission';
            $content = isset($this->attrs['dbdb_confirmation_content'])?$this->attrs['dbdb_confirmation_content']:'Thank you for your submission! We will get back to you soon.';
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                wp_mail($email, $subject, $content);
            }
        }
    }
}
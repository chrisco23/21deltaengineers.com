<?php

namespace IAWP\Form_Submissions;

use IAWP\Utils\Security;
/** @internal */
class Submission_Listener
{
    public function __construct()
    {
        // Fluent forms
        \add_action('fluentform/submission_inserted', function ($entryId, $formData, $form) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(1, \intval($form->id), Security::string($form->title));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 20, 3);
        // WPForms
        \add_action('wpforms_process_complete', function ($fields, $entry, $form_data, $entry_id) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(2, \intval($form_data['id']), Security::string($form_data['settings']['form_title']));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 4);
        // Contact Form 7
        \add_action('wpcf7_mail_sent', function ($form) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(3, \intval($form->id()), Security::string($form->title()));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        });
        // Gravity Forms
        \add_action('gform_after_submission', function ($entry, $form) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(4, \intval($form['id']), Security::string($form['title']));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 2);
        // Ninja Forms
        \add_action('ninja_forms_after_submission', function ($form_data) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(5, \intval($form_data['form_id']), Security::string($form_data['settings']['title']));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 1);
        // MailOptin
        \add_action('mailoptin_track_conversions', function ($lead_data) {
            try {
                if (!\class_exists('IAWPSCOPED\\MailOptin\\Core\\Repositories\\OptinCampaignsRepository')) {
                    return;
                }
                $form_title = \IAWPSCOPED\MailOptin\Core\Repositories\OptinCampaignsRepository::get_optin_campaign_name($lead_data['optin_campaign_id']);
                if (\is_null($form_title)) {
                    return;
                }
                $submission = new \IAWP\Form_Submissions\Submission(6, \intval($lead_data['optin_campaign_id']), Security::string($form_title));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 1);
        // Convert Pro
        \add_action('cpro_form_submit', function ($response, $post_data) {
            try {
                $post_id = \intval($post_data['style_id']);
                $post = \get_post($post_id);
                if (\is_null($post)) {
                    return;
                }
                $submission = new \IAWP\Form_Submissions\Submission(7, \intval($post_id), Security::string($post->post_title));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 2);
        // Elementor
        \add_action('elementor_pro/forms/new_record', function ($record) {
            // Elementor form ids are generated using dechex(rand()), so hexdec is required to
            // convert the id back into an integer
            try {
                $submission = new \IAWP\Form_Submissions\Submission(8, \intval(\hexdec($record->get_form_settings('id'))), Security::string($record->get_form_settings('form_name')));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 1);
        // JetFormBuilder
        \add_action('jet-form-builder/form-handler/after-send', function ($form) {
            try {
                if (!$form->is_success) {
                    return;
                }
                $post_id = \intval($form->form_id);
                $post = \get_post($post_id);
                if (\is_null($post)) {
                    return;
                }
                $submission = new \IAWP\Form_Submissions\Submission(9, \intval($post_id), Security::string($post->post_title));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 1);
        // Formidable Forms
        \add_action('frm_after_create_entry', function ($entry_id, $form_id) {
            try {
                if (!\class_exists('IAWPSCOPED\\FrmForm')) {
                    return;
                }
                $form = \IAWPSCOPED\FrmForm::getOne($form_id);
                $submission = new \IAWP\Form_Submissions\Submission(10, \intval($form_id), Security::string($form->name));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 2);
        // WS Form
        \add_action('wsf_submit_post_complete', function ($submission) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(11, \intval($submission->form_id), Security::string($submission->form_object->label));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 1);
        // Amelia
        \add_action('amelia_after_appointment_booking_saved', function ($booking, $reservation) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(12, 1, \__('Amelia Appointment', 'independent-analytics'));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 2);
        // Amelia
        \add_action('amelia_after_event_booking_saved', function ($booking, $reservation) {
            try {
                $submission = new \IAWP\Form_Submissions\Submission(12, 2, \__('Amelia Event', 'independent-analytics'));
                $submission->record_submission();
            } catch (\Throwable $e) {
            }
        }, 10, 2);
        // // Template
        // add_action('iawp_some_form_callback', function () {
        //     try {
        //         return;
        //         $submission = new Submission(
        //             0,
        //             intval(0),
        //             Security::string('')
        //         );
        //         $submission->record_submission();
        //     } catch (\Throwable $e) {
        //
        //     }
        // }, 10, 0);
    }
}

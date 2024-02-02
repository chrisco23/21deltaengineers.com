<div class="email-reports settings-container">
    <div class="heading">
        <h2><?php esc_html_e('Email Report', 'independent-analytics'); ?></h2>
        <a class="tutorial-link" href="https://independentwp.com/knowledgebase/pro/email-reports/" target="_blank">
            <?php esc_html_e('Read Tutorial', 'independent-analytics'); ?>
        </a>
        <div class="pro-tag"><?php esc_html_e('Pro', 'independent-analytics'); ?></div>
    </div>
    <p><?php esc_html_e('The HTML email report is automatically scheduled for the 1st of every month.', 'independent-analytics'); ?></p>
    <form method='post' action='options.php' id="email-reports-form" class="email-reports-form">
        <input type='hidden' name='option_page' value='iawp_email_report_settings'/>
        <input type="hidden" name="action" value="update"/>
        <input type="hidden" name="_wp_http_referer"
               value="/wp-admin/admin.php?page=independent-analytics&tab=settings">
        <?php wp_nonce_field('iawp_email_report_settings-options'); ?>
        <div class="inner">
            <div class="delivery-time iawp-section">
                <h3><?php esc_html_e('Delivery Time', 'independent-analytics'); ?></h3>
                <select id="iawp_email_report_time" name="iawp_email_report_time">
                    <?php for ($i = 0; $i < 24; $i++) {
                        $readable_time = new DateTime(date('Y-m-d') . ' ' . $i . ':00:00');
                        $readable_time = $readable_time->format(get_option('time_format')); ?>
                        <option value="<?php esc_attr_e($i); ?>" <?php selected($time, $i, true); ?>><?php esc_html_e($readable_time); ?></option>
                    <?php
                    } ?>
                </select>
            </div>
            <div class="custom-colors iawp-section">
                <h3><?php esc_html_e('Customize the colors', 'independent-analytics'); ?></h3>
                <div class="custom-colors-list">
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Header background', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[0]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[0]); ?>" />
                    </div>
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Header text', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[1]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[1]); ?>" />
                    </div>
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Sub-header background', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[2]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[2]); ?>" />
                    </div>
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Sub-header text', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[3]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[3]); ?>" />
                    </div>
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Bar chart', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[4]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[4]); ?>" />
                    </div>
                    <div class="custom-color">
                        <p class="element-name"><?php esc_html_e('Bar chart accent', 'independent-analytics'); ?></p>
                        <input type="text" class="iawp-color-picker" value="<?php echo sanitize_hex_color($saved_colors[5]); ?>" data-default-color="<?php echo sanitize_hex_color($default_colors[5]); ?>" />
                    </div>
                </div>
                <input type="hidden" id="iawp_email_report_colors" name="iawp_email_report_colors" value="<?php echo implode(',', $saved_colors); ?>" />
            </div>
            <div class="email-addresses iawp-section">
                <h3><?php esc_html_e('Add new email addresses', 'independent-analytics'); ?></h3>
                <div class="new-address duplicator">
                    <div class="entry">
                        <input class="new-field" type="email" placeholder="name@email.com" value="" />
                        <button class="iawp-button purple duplicate-button"><?php esc_html_e('Add email', 'independent-analytics'); ?></button>
                    </div>
                    <div class="blueprint">
                        <div class="entry">
                            <input type="text" readonly 
                                name="iawp_email_report_email_addresses[]" 
                                id="iawp_email_report_email_addresses[]" 
                                data-option="iawp_email_report_email_addresses" 
                                value="">
                            <button class="remove iawp-button ghost-purple"><?php esc_html_e('Remove email', 'independent-analytics'); ?></button>
                        </div>
                    </div>
                    <p class="error-message empty"><?php esc_html_e('Input is empty', 'independent-analytics'); ?></p>
                    <p class="error-message exists"><?php esc_html_e('This email already exists', 'independent-analytics'); ?></p>
                </div>
                <div class="saved">
                    <h3><?php esc_html_e('Sending to these addresses', 'independent-analytics'); ?></h3>
                    <?php for ($i = 0; $i < count($emails); $i++) : ?>
                        <div class="entry">
                            <input type="email" readonly
                                id="iawp_email_report_email_addresses[<?php esc_attr_e($i); ?>]" 
                                name="iawp_email_report_email_addresses[<?php esc_attr_e($i); ?>]" 
                                data-option="iawp_email_report_email_addresses"
                                value="<?php esc_attr_e($emails[$i]); ?>" />
                                <button class="remove iawp-button ghost-purple"><?php esc_html_e('Remove email', 'independent-analytics'); ?></button>
                        </div>
                    <?php endfor; ?>
                </div>
            </div>
            <div class="save-button-container">
                <?php submit_button(esc_html__('Save settings', 'independent-analytics'), 'iawp-button purple', 'save-email-report-settings', false); ?>
                <button id="test-email" class="test-email iawp-button ghost-purple"><?php esc_html_e('Send test email', 'independent-analytics'); ?></button>
                <p class="warning-message"><span class="dashicons dashicons-warning"></span> <?php esc_html_e('Unsaved changes', 'independent-analytics'); ?></p>
            </div>
        </div>
    </form>
</div>
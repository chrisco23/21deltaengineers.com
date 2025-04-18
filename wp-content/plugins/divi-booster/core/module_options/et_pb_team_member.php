<?php

if (function_exists('add_filter')) {
    add_filter('dbmo_et_pb_team_member_whitelisted_fields', 'dbmo_et_pb_team_member_register_fields');
    add_filter('et_pb_all_fields_unprocessed_et_pb_team_member', 'dbmo_et_pb_team_member_add_fields');
    add_filter('db_pb_team_member_content', 'db_pb_team_member_filter_content', 10, 2);
}
if (function_exists('add_action')) {
    add_action('wp_head', 'db_pb_team_member_css');
}

function db_pb_team_member_css() { ?>
    <style>
        /* Display the team member icons */
        .db_pb_team_member_website_icon:before {
            content: "\e0e3";
        }

        .db_pb_team_member_email_icon:before {
            content: "\e010";
        }

        .db_pb_team_member_instagram_icon:before {
            content: "\e09a";
        }

        .db_pb_team_member_phone_icon:before {
            content: "\e090";
        }

        /* Fix email icon hidden by Email Address Encoder plugin */
        ul.et_pb_member_social_links li>span {
            display: inline-block !important;
        }
    </style>
<?php
}

function dbmo_et_pb_team_member_register_fields($fields) {
    $fields[] = 'website_url';
    $fields[] = 'db_email_addr';
    $fields[] = 'db_instagram';
    $fields[] = 'db_link_target';
    $fields[] = 'db_phone';
    return $fields;
}

function dbmo_et_pb_team_member_add_fields($fields) {
    $new_fields = array();
    foreach ($fields as $k => $v) {
        if ($k === 'facebook_url') { // Add before facebook option
            $new_fields['website_url'] = array(
                'label' => 'Website Url',
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => 'Input website url. ' . divibooster_module_options_credit(),
                'default' => '',
                'toggle_slug' => 'main_content'
            );
            $new_fields['db_email_addr'] = array(
                'label' => 'Email Address',
                'type'  => 'text',
                'option_category' => 'basic_option',
                'description' => 'Input email address. ' . divibooster_module_options_credit(),
                'default' => '',
                'toggle_slug' => 'main_content'
            );
            $new_fields['db_phone'] = array(
                'label' => 'Phone',
                'type'  => 'text',
                'option_category' => 'basic_option',
                'description' => 'Input phone number. ' . divibooster_module_options_credit(),
                'default' => '',
                'toggle_slug' => 'main_content'
            );
        }
        $new_fields[$k] = $v;

        if ($k === 'linkedin_url') { // Add after linked in option
            $new_fields['db_instagram'] = array(
                'label' => 'Instagram Profile Url',
                'type'  => 'text',
                'option_category' => 'basic_option',
                'description' => 'Input Instagram Profile Url. ' . divibooster_module_options_credit(),
                'default' => '',
                'toggle_slug' => 'main_content'
            );
            $new_fields['db_link_target'] = array(
                'label' => 'Open Links in New Tab',
                'type' => 'yes_no_button',
                'options' => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('yes', 'et_builder'),
                ),
                'option_category' => 'basic_option',
                'description' => 'Open social media links in a new tab. ' . divibooster_module_options_credit(),
                'default' => 'off',
                'toggle_slug' => 'main_content'
            );
        }
    }
    return $new_fields;
}

function db_pb_team_member_filter_content($content, $args) {

    if (!empty($args['website_url']) || !empty($args['db_email_addr']) || !empty($args['db_instagram']) || !empty($args['db_phone'])) {

        // Ensure the social links list exists
        if (strpos($content, 'class="et_pb_member_social_links"') === false) {
            $content = preg_replace('#(</div>\s*<!-- .et_pb_team_member_description -->)#', '<ul class="et_pb_member_social_links"></ul>\\1', $content); // old markup
            $content = preg_replace('#(</div>\s*</div>)$#', '<ul class="et_pb_member_social_links"></ul>\\1', $content); // current markup
        }

        // Add the email icon
        if (!empty($args['db_email_addr'])) {
            $content = preg_replace('#(<ul[^>]*class="et_pb_member_social_links"[^>]*>)#', '\\1<li><a href="mailto:' . esc_attr($args['db_email_addr']) . '" class="et_pb_font_icon db_pb_team_member_email_icon"><span>Email</span></a></li>', $content);
        }

        // Add the website icon
        if (!empty($args['website_url'])) {

            // Get url
            $url = $args['website_url'];
            $url = ($parts = parse_url($url) and empty($parts['scheme'])) ? "http://$url" : $url; // Add http if missing
            $content = preg_replace('#(<ul[^>]*class="et_pb_member_social_links"[^>]*>)#', '\\1<li><a href="' . esc_attr($url) . '" class="et_pb_font_icon db_pb_team_member_website_icon"><span>Website</span></a></li>', $content);
        }

        // Add the phone icon
        if (!empty($args['db_phone'])) {
            $content = preg_replace('#(<ul[^>]*class="et_pb_member_social_links"[^>]*>)#', '\\1<li><a href="tel:' . esc_attr($args['db_phone']) . '" class="et_pb_font_icon db_pb_team_member_phone_icon"><span>Phone</span></a></li>', $content);
        }

        // Add the instagram icon
        if (!empty($args['db_instagram'])) {

            // Get url
            $url = $args['db_instagram'];
            $url = ($parts = parse_url($url) and empty($parts['scheme'])) ? "http://$url" : $url; // Add http if missing

            // Add the instagram icon to the social links list
            $content = preg_replace('#(<ul[^>]*class="et_pb_member_social_links"[^>]*>.*?)<\/ul>#', '\\1<li><a href="' . esc_attr($url) . '" class="et_pb_font_icon db_pb_team_member_instagram_icon"><span>Instagram</span></a></li></ul>', $content);
        }
    }

    // Add target=_blank if required
    if (!empty($args['db_link_target']) && $args['db_link_target'] === 'on') {
        $content = str_replace('<a href=', '<a target="_blank" href=', $content);
    }

    return $content;
}

<div id="real-time-dashboard" class="real-time-dashboard refreshed"
     data-controller="real-time"
     data-real-time-chart-data-value="<?php esc_attr_e(json_encode($chart_data)) ?>"
     data-real-time-nonce-value="<?php echo wp_create_nonce('iawp_real_time') ?>"
>
    <div class="iawp-heading">
        <div class="iawp-title">
            <div class="iawp-title-inner">
                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g>
                            <circle class="recording-icon-outer" fill="#F2998F" cx="16" cy="16"
                                    r="16"></circle>
                            <circle class="recording-icon-inner" fill="#D93B29" cx="16" cy="16"
                                    r="9.70491803"></circle>
                        </g>
                    </g>
                </svg>
                <span data-real-time-target="visitorMessage" data-testid="real-time-title"><?php esc_html_e($visitor_message) ?></span>
                <a class="learn-more" href="#">
                    <span class="dashicons dashicons-info-outline"></span>
                    <div class="tooltip">
                        <p><?php esc_html_e('Active Visitors is the number of people who have viewed a page within the last 5 minutes.', 'independent-analytics'); ?></p>
                    </div>
                </a>
            </div>
        </div>
        <div class="iawp-overview"><span
                    data-real-time-target="pageMessage" data-testid="page-count"><?php esc_html_e($page_message) ?></span>
            &#8226; <span
                    data-real-time-target="referrerMessage" data-testid="referrer-count"><?php esc_html_e($referrer_message); ?></span>
            &#8226; <span
                    data-real-time-target="countryMessage" data-testid="country-count"><?php esc_html_e($country_message) ?></span>
        </div>
    </div>

    <div id="charts" class="charts">
        <div class="chart-container">
            <div class="chart-inner">
                <div class="legend-container">
                    <h2 class="legend-title"><?php esc_html_e('The Last 5 Minutes', 'independent-analytics') ?></h2>
                    <div class="legend"></div>
                </div>
                <canvas data-real-time-target="secondChart"
                        width="400"
                        height="200"></canvas>
            </div>
        </div>
        <div class="chart-container">
            <div class="chart-inner">
                <div class="legend-container">
                    <h2 class="legend-title"><?php esc_html_e('The Last 30 Minutes', 'independent-analytics') ?></h2>
                    <div class="legend"></div>
                </div>
                <canvas data-real-time-target="minuteChart"
                        width="400"
                        height="200"></canvas>
            </div>
        </div>
    </div>
    <div class="most-popular-container">
        <?php foreach ($lists as $list_id => $list) : ?>
            <div class="most-popular-list" data-testid="<?php esc_attr_e(sanitize_title($list['title'])); ?>">
                <div class="heading">
                    <div class="title-med"><?php esc_html_e($list['title']) ?></div>
                    <div class="views-heading"><?php esc_html_e('Views', 'independent-analytics'); ?></div>
                </div>
                <ol data-real-time-target="<?php esc_attr_e($list_id) ?>List">
                    <?php foreach ($list['entries'] as $index => $item): ?>
                        <li data-id="<?php esc_attr_e($item['id']) ?>"
                            data-position="<?php esc_attr_e($index + 1); ?>"
                        >
                            <span class="real-time-position"><?php echo absint($index + 1) ?>.</span>
                            <?php if (!empty($item['flag'])): ?>
                                <?php echo $item['flag'] ?>
                            <?php endif; ?>
                            <span class="real-time-resource">
                                <?php esc_html_e($item['title']) ?>

                                <?php if (!empty($item['subtitle'])): ?>
                                    <span class="real-time-subtitle"><?php esc_html_e($item['subtitle']); ?></span>
                                <?php endif; ?>
                            </span>
                            <span class="real-time-stat"><?php echo absint($item['views']) ?></span>
                        </li>
                    <?php endforeach; ?>
                </ol>
                <p class="most-popular-empty-message <?php echo count($list['entries']) > 0 ? esc_attr('hide') : '' ?>"><?php esc_html_e('No results in the last 5 minutes.', 'independent-analytics') ?></p>
            </div>
        <?php endforeach; ?>
    </div>
    <div id="progress-bar" class="progress-bar">
        <div class="inner"></div>
    </div>
</div>
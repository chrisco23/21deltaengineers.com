<select name="iawp_dow" id="iawp_dow" value="<?php echo esc_attr($day_of_week); ?>">
    <?php foreach ($days as $index => $day): ?>
        <option value="<?php esc_attr_e($index); ?>" <?php selected($index, $day_of_week, true); ?>>
            <?php esc_html_e($day); ?>
        </option>
    <?php endforeach ?>
</select>

<?php

function dbdb016_left_margin_fraction($image_position, $images_per_row) {

    // Avoid division by zero
    if ($images_per_row === 0 || $images_per_row === 1) {
        return 0;
    }

    return $image_position / ($images_per_row - 1);
}

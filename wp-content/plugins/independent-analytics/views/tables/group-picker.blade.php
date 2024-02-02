<div class="group modal-parent small"
     data-controller="group"
     data-group-group-id-value="<?php esc_attr_e($group->id()); ?>"
     data-group-group-name-value="<?php esc_attr_e($group->singular()); ?>"
>
    <button id="group"
            class="iawp-button ghost-white toolbar-button"
            data-action="group#toggleModal"
            data-group-target="modalButton"
    >
        <span class="dashicons dashicons-open-folder"></span>
        <span class="iawp-label">
            <?php echo esc_html__('Group by ', 'independent-analytics') ?>
            <span data-group-target="buttonText"><?php esc_html_e($group->singular()) ?></span>
        </span>
    </button>
    <div id="modal-group"
         class="modal small"
         data-group-target="modal"
    >
        <div class="modal-inner">
            <div class="title-small">
                <?php
                esc_html_e('Group table by', 'independent-analytics'); ?>
            </div>

            <form data-group-target="form">
                <?php foreach($buttons as $button): ?>
                    <label for="<?php esc_attr_e($button->id()) ?>">
                        <input type="radio"
                               name="group"
                               id="<?php esc_attr_e($button->id()) ?>"
                               value="<?php esc_attr_e($button->id()) ?>"
                               data-testid="group-by-<?php esc_attr_e($button->id()) ?>"
                        />
                        <?php esc_html_e($button->singular()) ?>
                    </label>
                <?php endforeach; ?>
            </form>
            <div>
            </div>
            <div>
                <button class="iawp-button purple"
                        data-dates-target="apply"
                        data-action="group#apply"
                >
                    <?php esc_html_e('Apply', 'independent-analytics') ?>
                </button>
            </div>
        </div>
    </div>
</div>
jQuery(function ($) {

    /* Define useful functions */
    $.fn.expand = function () { this.each(function () { $(this).slideDown(200); }); return this; }
    $.fn.collapse = function () { this.each(function () { $(this).slideUp(200); }); return this; }
    $.fn.section = function () { return this.next().next(); }
    $.fn.subheadings = function () { return this.nextUntil(".wtf-topheading", "h3"); }
    $.fn.isopen = function () { return this.filter(function () { return ($(this).next().val() == 1); }); }
    $.fn.opened = function () { return this.isopen().section(); }

    /* Show currently expanded sections */
    $('.wtf-topheading').opened().show().subheadings().show().opened().show();

    /* Add opened / closed classes */
    $('.wtf-section-head').each(function () {
        var section = $(this).section();
        if (section.is(":visible")) {
            $(this).addClass('dbdb-settings-section-opened');
        } else {
            $(this).addClass('dbdb-settings-section-closed');
        }
    });

    /* Handle clicks on section headings */
    $(".wtf-section-head").click(function () {
        var section = $(this).section();
        if (section.is(":visible")) { // block is open, so close it
            section.collapse(); // close block
            if ($(this).hasClass('wtf-topheading')) { // hide subsections
                $(this).subheadings().collapse().opened().collapse();
            }
            $(this).removeClass('dbdb-settings-section-opened');
            $(this).addClass('dbdb-settings-section-closed');
        } else {
            section.expand(); // open block
            if ($(this).hasClass('wtf-topheading')) { // show subsections
                $(this).subheadings().expand().opened().expand();
            }
            $(this).removeClass('dbdb-settings-section-closed');
            $(this).addClass('dbdb-settings-section-opened');
        }

        // record state in hidden input
        var hiddenInput = $(this).next();
        var newState = (hiddenInput.val() == '1') ? 0 : 1;
        hiddenInput.val(newState);

        // rotate "expanded" icon
        var expandedIcon = $(this).children(':first');
        expandedIcon.toggleClass('rotated');
    });

    // initialize the colorpickers
    $('.wtf-colorpicker').wpColorPicker();

});

// Image picker 
jQuery(document).ready(function ($) {

    // handle image picker thumbnails
    $(document).on('change', '.wtf-imagepicker', function () {
        $(this).next().next('.wtf-imagepicker-thumb').attr('src', $(this).val());
    });

});

// Icon picker - pass click on .dbdb-icon-picker-wrapper to the hidden media library button
jQuery(document).ready(function ($) {
    $(document).on('click', '.dbdb-icon-picker-wrapper span.wtf-imagepicker', function () {
        $(this).closest('.dbdb-icon-picker-wrapper').find('.wtf-imagepicker-btn').click();
    });
    // Prevent the click from being passed to the parent element
    $(document).on('click', '.dbdb-icon-picker-wrapper .wtf-imagepicker-btn', function (e) {
        e.stopPropagation();
    });
    // Prevent clicks on the .wtf-imagepicker input from being passed to the parent element
    $(document).on('click', '.dbdb-icon-picker-wrapper input.wtf-imagepicker', function (e) {
        e.stopPropagation();
    });
});

// Media uploader
jQuery(document).ready(function ($) {

    // Override the "Insert into Post" button text
    if (typeof _wpMediaViewsL10n != 'undefined') {
        _wpMediaViewsL10n.insertIntoPost = 'Use Image';
    }

    var _custom_media = true;
    var _orig_send_attachment = wp.media.editor.send.attachment;

    // Display media when choose image button clicked
    //$('.upload-button').click(function (e) {
    $(document).on('click', '.upload-button', function (e) {

        //var send_attachment_bkp = wp.media.editor.send.attachment;
        var button = $(this);
        var input = button.prev('input');
        _custom_media = true;

        // Return handler
        wp.media.editor.send.attachment = function (props, attachment) {

            // Return the image URL
            var size = props.size;
            var att = attachment.sizes[size];
            if (_custom_media) { input.val(att.url); }
            else { _orig_send_attachment.apply(this, [props, attachment]); }

            // Update the thumbnail
            $('.wtf-imagepicker').change();
        }

        // Show the editor
        wp.media.editor.open(button);
    });

    $('.add_media').on('click', function () { _custom_media = false; });

});
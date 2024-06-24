const $ = jQuery;

const UserRoles = {
    setup: function() {
        var self = this;
        $('#user-role-select').on('change', function() {
            $('.role').removeClass('show');
            $('.role-' + $(this).val()).addClass('show');
        });
        $('#capabilities-form').on('submit', function(e){
            e.preventDefault();
            self.save();
        });
    },
    save: function() {
        $('#save-permissions').addClass('saving');
        var capabilities = {};
    
        $('.role').each(function(){
            const role = $(this).find('select').attr('name')
            const val = $(this).find('select').val()
            capabilities[role] = val
        });

        capabilities = JSON.stringify(capabilities);

        var whiteLabel = $('#iawp_white_label').prop('checked');

        const data = {
            ...iawpActions.update_capabilities,
            'capabilities': capabilities,
            'white_label': whiteLabel,
        };

        jQuery.post(ajaxurl, data, function (response) {
            $('#save-permissions').removeClass('saving');
        });
    }
}

export { UserRoles };
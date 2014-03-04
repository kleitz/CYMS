$(document).ready(function () {

    $('#login-btn').click(function() {
        
        $(this).button('loading');
         setTimeout(function(){
             validate();
         }, 250);   
    });
	    // Validate
    function validate() {
        // Trim


        // Check if there empty strings
        if($('#username').val() == '' || $('#password').val() == '') {
            $('.alert').empty();
            $('.alert').append('Please input the required fields.').removeClass('hide');
            $('#login-btn').button('reset');
            return false;
        }

        // Check Login
        var err_message = '';
        $.ajax({
            url: $('body').attr('base-url') + 'login/validate_user',
            type: 'POST',
            async: false,
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function (response) {
                var decode = jQuery.parseJSON(response);

                if(decode.success == false) {
                    err_message = decode.msg;
                    
                }
                $('#login-btn').button('reset');
            }
        });

        if(err_message != '') {
            //alert(err_message);
            $('.alert').empty();
            $('.alert').append(err_message).removeClass('hide');
            //$('.alert')
            return false;
        }
        
        return true;
    }

    function loader() {
        $('#login-btn').button('loading');
        return true;
    }


});

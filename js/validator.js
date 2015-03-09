var ValidateMe = {
    Regex: {
        alphaNumeric: /^[A-Z,a-z,0-9, -_]+$/,
        string: /^[A-Z,a-z ,.'-]+$/,
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phone: /^[0-9]{10,15}/,
        required: '',
        username: /^([a-zA-Z0-9_-]){6,20}/,
        password: /^([a-zA-Z0-9_!@#$%^&*-]){8,12}/
    },
    controller: {
        validate: function (field,data,dataType,option) {
            switch (dataType) {
            case 'string':
                if (!data.match(ValidateMe.Regex.string)) {

                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                    if(option){if(data.length > 0) {$(field).removeClass('required');}}
                break;
               
            case 'alpha':
                if (!data.match(ValidateMe.Regex.alphaNumeric)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                    if(option){if(data.length > 0) {$(field).removeClass('required');}}
                break;
            case 'email':
                if (!data.match(ValidateMe.Regex.email)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                    if(option){if(data.length > 0) {$(field).removeClass('required');}}
                break;
            case 'phone':
                if (!data.match(ValidateMe.Regex.phone)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                if(option){if(data.length < 1) {$(field).removeClass('required');}}
                break;
            case 'username':
                if (!data.match(ValidateMe.Regex.username)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                if(option){if(data.length < 1) {$(field).removeClass('required');}}
                break;
            case 'password':
                if (!data.match(ValidateMe.Regex.password)) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                if(option){if(data.length < 1) {$(field).removeClass('required');}}
                break;
            case 'passwordConfirmation':
                if (data != $('#RegisterPassword').val()) {
                    $(field).addClass('required');
                } else {
                    $(field).removeClass('required');
                }
                if(option){if(data.length < 1) {$(field).removeClass('required');}}
                break;  
        }
    },
        submit: function(){
            $('input[data-type]').each(function(){
                ValidateMe.controller.validate($(this), $(this).val(), $(this).data('type'), $(this).data('optional'));
            });


            if($('input[data-type]').hasClass("required")){
                return false;
            }
            else{
                 localStorage.setItem("status", "pending");
                $('#mktoForm_1128').submit();
            }
        }
    },
    init: function(){
        $('input[data-type]').keyup(function (e) {
            ValidateMe.controller.validate($(e.target), $(e.target).val(), $(e.target).data('type'), $(e.target).data('optional'));
        });
        $('#mktoForm_1128').on('keypress', function (e) {
            if (e.which == 32)
                return false;
        });
        if(localStorage.getItem('status')=="pending"){
           // $('#thanksModal').modal('show');
            localStorage.removeItem("status")
        }
        $('#mktoForm_1128').on('keypress', function (e) {
            if(e.which == 13) {
                ValidateMe.controller.submit();
            }
        });
    }
}


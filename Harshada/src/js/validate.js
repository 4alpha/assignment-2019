function validate() {
    var email = $('#email').val();
    //call to check email validation
    isEmpty(email);

    //check passis empty
    if (!isEmail(email)) {
        alert('Please enter valid email address.');
        return false;
    }
    //check password is empty or not
    if ('' === $('#pass').val()) {
        alert('please enter password.');
        return false;
    }

    return true;
}

function validateRegistration() {
    var email = $('#email').val();
    var pass = $('#pass').val();
    var mobile = $('#mobile').val();
    //email validation
    if ('' === $('#email').val()) {
        alert('please enter email.');
        return false;
    }
    if (!isEmail(email)) {
        alert('Please enter valid email address.');
        return false;
    }
    //check password is empty or not
    if ('' === $('#pass').val()) {
        alert('please enter password.');
        return false;
    }

    if (!checkPassword(pass)) {
        alert('Please enter valid password.');
        return false;
    }

    if (!isMobile(mobile)) {
        alert('Mobile number should start from 7/8/9');
        return false;
    }
    return true;
}

function checkPassword(pass) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return regex.test(pass);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isMobile(mobile) {
    var regex = /^[789]\d{9}$/;
    return regex.text(mobile);
}
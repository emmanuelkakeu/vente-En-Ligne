var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var emailerror = document.getElementById('emailerrore');
var passerror = document.getElementById('passerror');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', password_verify);

function validateform(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        emailerror.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        passerror.style.display = "block";
        email.focus();
        return false;
    }

    function email_verify(){
        if(email.value.length >=8){
            email.style.border = "1px solid silver"
            emailerror.style.display = "none";
            return true
        }
    function  password_verify(){
        if(password.value.length >=5){
            password.style.border = "1px solid silver"
            passerror.style.display = "none";
            return true
            }
        }
    }
}

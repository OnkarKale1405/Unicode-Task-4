function ValidateLogin(mail, pass){
    let regexUsername = /^[a-zA-Z0-9_]{3,}$/    ;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/ ;
    let errorUsername = "";
    let errorPass = "";
    if (regexUsername.test(mail)) {
        errorUsername = "";
    }else{
        errorUsername = "Incorrect Username ";
    }
    if (regexPass.test(pass)) {
        errorPass = "";
    }else{
        errorPass = "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter ";
    }
    return { errorUsername, errorPass };
}

export default ValidateLogin;
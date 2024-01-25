function validateRegister(fullname, mail, pass, confirmpass, phone){
    let regexname = /^[A-Za-z]{2,}\s[A-Za-z\.]{2,}\s[A-za-z]{2,}$/ ;
    let regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ; 
    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let regexphone = /\d{10}/;
    let errorFullName = "";
    let errorMail = "";
    let errorPass = "";
    let errorConfirmPass = "";
    let errorPhone = "";

    if (regexname.test(fullname)) {
        errorFullName = "";
    }else{
        errorFullName = "Please Enter Full Name";
    }
    if (regexmail.test(mail)) {
        errorMail = "";
    }else{
        errorMail = "Incorrect Email Format";
    }
    if (regexpass.test(pass)) {
        errorPass = "";
    }else{
        errorPass = "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    if(confirmpass === pass && errorPass === ""){
        errorConfirmPass = "";
    }else{
        errorConfirmPass = "Confirm Password should be same as Password"; 
    }
    if (regexphone.test(phone)) {
        errorPhone = "";
    }else{
        errorPhone = "Phone number must have 10 digits";
    }

    return {errorFullName, errorMail, errorPass, errorConfirmPass, errorPhone};
}

export default validateRegister;
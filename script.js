function validateLoginForm()
{
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let PasswordError = document.getElementById("passwordError");

    let emailPatterntest="/^[^\s@]+@[^\s@]+\[^\s@]+$/~";

    emailError.innerText="";
    PasswordError.innerText="";

    if(email == "")
    {
        emailError.innerText="Please Enter Your Email";
        return false;
    }
    else if(!emailPatterntest(email))
    {
        emailError.innerText ="Please Enter Your Email in Correct!";
        return false;
    }

    if(password == "")
    {
        passwordError.innerText = "Pleas Enter your Password";
        return false;
    }

    window.location.href="index.html";
    return false;
}

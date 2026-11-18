function validateLoginForm()
{
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let PasswordError = document.getElementById("passwordError");

    const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.innerText="";
    PasswordError.innerText="";

    if(email =="")
    {
        emailError.innerText="Please Enter Your Email";
        return false;
    }
    else if(!emailPattern.test(email))
    {
        emailError.innerText ="Please Enter Your Email in Correct way!";
        return false;
    }

    if(password == "")
    {
        PasswordError.innerText = "Pleas Enter your Password";
        return false;
    }

    window.location.href="index.html";
    return false;
}

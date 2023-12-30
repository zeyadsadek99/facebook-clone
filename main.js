function formvalidate(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if(email.length < 8 || email.indexOf("@") == -1){
        text = "Enter a valid email";
        error.innerHTML = text;
        return false;
    }
    else if(pass.length < 5){
        text = "Enter a correct password";
        error.innerHTML = text;
        return false;
    }
    else{
        alert("Done");
        return true;
    }
}
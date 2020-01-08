function emailhandleclick() {
    var emailinput = document.getElementById("email");
    
    console.log("hi i m here");

    var backgroundColor = window.getComputedStyle(emailinput).backgroundColor
    console.log("==>>", backgroundColor, backgroundColor == "rgb(255, 255, 255)");
    if (backgroundColor == "rgb(255, 255, 255)") {
        emailinput.style.backgroundColor = "rgb(255, 252, 200)";
    } else {
        emailinput.style.backgroundColor = "white";
    }
}
function passwordhandleclick(){

    var passwordinput = document.getElementById("password");

    var backgroundColor = window.getComputedStyle(passwordinput).backgroundColor
    console.log("==>>", backgroundColor, backgroundColor == "rgb(255, 255, 255)");
    if (backgroundColor == "rgb(255, 255, 255)") {
        passwordinput.style.backgroundColor = "rgb(255, 252, 200)";
    } else {
        passwordinput.style.backgroundColor = "white";
    }
}
  


function formValidate() {
    
    var messageE, x,messageP;
    messageE = document.getElementById("message-email");
    messageE.innerHTML = "";

    messageP = document.getElementById("message-password");
    messageP.innerHTML = "              ";

    var x = document.getElementById("email").value;

    var y = document.getElementById("password").value;
    console.log(x);
    if (x == "") {
        messageE.innerHTML = "Email field is empty.";
    }
    console.log(y, y == "");
    if (y == "") {
        messageP.innerHTML = "Password field is empty.";
    }
    var submit = document.getElementById("submit");
   if (x != "" && y != "")
    {
      window.location.href = "file:///home/sriya/Wunderlist/app.html"; 
    }



}
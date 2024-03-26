
// function activate()
// {
//     document.getElementById("form-signup").style.display = "none";
//     var login = document.getElementById("form-login");


//     if (login.style.display === "none") {
//         login.style.display = "flex";
//         document.getElementById("pop_up").style.display = "initial";
//         document.getElementById("pop_up").innerHTML = "close";
//         setTimeout(() => {
//             document.getElementById("pop_up").style.opacity = "1";
//             document.getElementById("pop_up").style.transform = 'TranslateX(-0px)';
//             login.style.opacity = '1';
//             login.style.transform = 'TranslateX(-0px)';
//         }, 1);
        
//     } else {
//         login.style.opacity = '0';
//         login.style.transform = 'TranslateX(200px)';
//         document.getElementById("pop_up").style.opacity = "0";
//         document.getElementById("pop_up").style.transform = 'TranslateX(200px)';
//         setTimeout(() => {
//             login.style.display = "none";
//             document.getElementById("pop_up").style.display = "none";
//         }, 501);
//     }

// }

// function activate2()
// {
//     var signup = document.getElementById("form-signup");
//     document.getElementById("pop_up").style.display = "initial";
    
//     setTimeout(() => {
//             document.getElementById("pop_up_logout").style.opacity = "1";
//             document.getElementById("pop_up_logout").style.display = "initial";
//             document.getElementById("pop_up_logout").style.transform = 'TranslateX(-0px)';
//             signup.style.opacity = '1';
//             signup.style.transform = 'TranslateX(-0px)';
//         }, 1);

//     document.getElementById("form-login").style.display = "none";
//     document.getElementById("pop_up").innerHTML = "back to login";

//     signup.style.display = "flex";

// }

// Variables

var effect = false;

// Login and Register Forms
var login = document.getElementById("Login");
var Register = document.getElementById("Register");

// Top and Bottom black thingies
var dividerTop = document.getElementById('dividerTop');
var dividerBottom = document.getElementById('dividerBottom');

//Inputs
var inputs = document.getElementById('toggleLoginEffect');

login.addEventListener('click', effectOn);
Register.addEventListener('click', effectOn);

login.addEventListener('mouseout', effectOff);
Register.addEventListener('mouseout', effectOff);

function effectOn() {
  effect = true;
  toggleEffect();
}

function effectOff() {
  effect = false;
  toggleEffect();
}

function toggleEffect() {
  switch (effect) {
    case true: 
        dividerTop.style.height = '40vh';
        dividerBottom.style.height = '40vh';
      break;
  
    case false: 
        dividerTop.style.height = '18vh';
        dividerBottom.style.height = '18vh';
      break;
  }
}

// Switch to Register Screen
function ChangeToSignup()
{
  login.style.display = "none";
  Register.style.display = "flex";
}


// Switch to Login Screen
function ChangeToLogin()
{
  login.style.display = "flex";
  Register.style.display = "none";
}
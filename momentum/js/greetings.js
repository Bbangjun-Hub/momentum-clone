/**const calculator = {
    plus: function (a,b) {
        console.log(a+b);
    },
    minus: function (a,b) {
        console.log(a - b);
    },
    times: function (a,b) {
        console.log(a * b);
    },
    divide: function (a,b) {
        console.log(a / b);
    },
    power: function (a,b) {
        console.log(a ** b);
    },
};**/

/** const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge); **/


/** const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick); **/

/** const width = window.innerWidth;
const body = document.querySelector("body");
const backgroundColor = body.style.backgroundColor;

function colorChange() {
  if (width < 200) {
    backgroundColor = "cornflowerblue";
  } else if (width >= 200 && width < 400) {
    backgroundColor = "purple";
  } else {
    backgroundColor = "yellow";
  }
}

body.addEventListener("resize",colorChange); **/

/** import "./style.css";
const body = document.body;
const small_Screen = "smallScreen";
const medium_Screen = "mediumScreen";
const large_Screen = "largeScreen";

function colorChange() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(largeScreen);
    body.classList.remove(mediumScreen);
  } else if (width <= 1200 && width >= 800) {
    body.classList.add(mediumScreen);
    body.classList.remove(largeScreen, smallScreen);
  } else {
    body.classList.remove(mediumScreen);
    body.classList.add(smallScreen);
  }
}

window.addEventListener("resize", colorChange); **/

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onloginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Today's ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onloginSubmit);
} else {
  paintGreetings();
}
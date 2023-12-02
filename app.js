// DOM --> Document Object Mode!
// API --> Application Programming Interface!

const myId = document.getElementById("selectingId");
console.log(myId);

const pera1 = document.getElementsByClassName("class1");
console.log(pera1);

const myId1 = document.getElementsByTagName("h4");
console.log(myId1);

// QUERY SELECTOR

const myBody = document.querySelector("div");
const myHead = document.querySelector("#selectingId");
console.log(myHead);

const myClass1 = document.querySelector(".class1");
console.log(myClass1);

const myClass2 = document.querySelectorAll(".class1");
console.log(myClass2);

// manipulate style
const addjustStyle = document.querySelector("#selectingId");
addjustStyle.style.color = "red";
addjustStyle.style.backgroundColor = "aqua";
document.body.style.backgroundColor = "yellow";

// manipulate text contents

const textAdd = document.querySelector("#selectingId");

textAdd.textContent = "Hello Bangladesh";

//  create element and append

const container = document.querySelector(".container");

const newPera = document.createElement("p");
newPera.textContent = "Hello, I'm fine!!";
newPera.style.fontSize = "30px";
container.appendChild(newPera);

//Event Handing
const myButton = document.querySelector(".my_btn");

myButton.addEventListener("click", buttonClick);

function buttonClick() {
  document.title = "Welcome!";
  document.body.style.backgroundColor = "#2358";
  myButton.textContent = "Visited!!";
}

// please open the custom bottom

//Variables
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeOut = false;
console.log(timeOut);
const button = document.querySelector("button");

//Function Definitions;

//Function to create a random interval for pop up
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Function to select a random hole from the holes array
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//Moles shows on and off
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  //Show mole
  hole.classList.add("up");

  //Hide mole
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeOut) peep();
  }, time);
}

function startGame() {}

//Event Handlers
button.addEventListener("click", startGame);

//Variables

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

const button = document.querySelector("button");
let lastHole;

//Function Definitions

//Function to create a random interval for pop up
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Function to select a random hole from the holes array
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  //console.log(hole);
  if (hole === lastHole) {
    //console.log("duplicate!!");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function startGame() {}

//Event Handlers

button.addEventListener("click", startGame);

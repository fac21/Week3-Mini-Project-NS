//Variables
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const highScoreBoard = document.querySelector(".highScore");
const highestPoints = localStorage.getItem("highestPoints")
  ? (highScoreBoard.textContent = localStorage.getItem("highestPoints"))
  : (highScoreBoard.textContent = 0);
const moles = document.querySelectorAll(".mole");
const button = document.querySelector("button");
let lastHole;
let timeOut = false;
let score;

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

//Create Score Board
function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  timeOut = false; //reset the game
  peep();
  setTimeout(() => {
    timeOut = true;
  }, 20000);
}

//
function bonk(event) {
  console.log(event);
  if (!event.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
  if (score > highScoreBoard.textContent) {
    highScoreBoard.textContent = score;
    localStorage.setItem("highestPoints", score);
  }
}

moles.forEach((mole) => mole.addEventListener("click", bonk));

//Event Handlers
button.addEventListener("click", startGame);

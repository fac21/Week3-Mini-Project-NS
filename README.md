# Mini-Project: Whack-A-Mole :sparkles: 

Pair: Neville & Sevda


![](https://media.giphy.com/media/ebITvSXYKNvRm/giphy.gif)


---

Our work process: 

- We decide to build Whack-A-Mole game.
- Discussed design;  Get the colors from the Japanese festivals.  
- We used back-seat-driver method to pair. And we swap in every new branch. 
- We made a repo
- Stretch Goals: Add highest score; Create difficulty levels; Change images; Have 'bad' moles (negative score)

---

![](https://i.imgur.com/K5pIanG.jpg)

---

![](https://media.giphy.com/media/xT5LMq6mrmaKPMuJgY/giphy.gif)

---

```!=
const scoreBoard = document.querySelector(".score");
const highScoreBoard = document.querySelector(".highScore");
const highestPoints = localStorage.getItem("highestPoints")
  ? (highScoreBoard.textContent = localStorage.getItem("highestPoints"))
  : (highScoreBoard.textContent = 0);
```


---

```!=
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
```

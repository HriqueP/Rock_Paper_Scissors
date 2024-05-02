// Const for options to play
const options = document.querySelectorAll(".option-icon");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Panels for start and game 'screen'
const panelGameStart = document.querySelector(".game-start");
const panelGamePlay = document.querySelectorAll(".game-player");
const line = document.querySelector(".line");

// Player and Opponents choices
const opponentChoice = document.querySelector(".opponent-choice");
const playerChoice = document.querySelector(".player-choice");

// Scores
const opponentTotalScore = document.querySelector(".opponent-score");
const playerTotalScore = document.querySelector(".player-score");

// Variables for the game
const optionsArrays = ["👊", "📄", "✂️"];
let started = false;
let opponentScore = 0;
let playerScore = 0;

// Check if the game is started
options.forEach((element) => {
  element.addEventListener("click", function () {
    if (!started) {
      return;
    }
  });
});

// After pressing the start button
function startGame() {
  started = true;

  panelGameStart.style.display = "none";
  panelGamePlay.forEach((element) => {
    element.style.display = "flex";
  });
  line.style.display = "block";

  // Logic when game started
  options.forEach((element) => {
    element.addEventListener("click", function () {
      playerChoice.style.fontSize = "2rem";
      playerChoice.innerText = element.innerText;
      opponentTurn();
    });
  });
}

function opponentTurn() {
  setTimeout(() => {
    opponentChoice.style.fontSize = "2rem";
    opponentChoice.innerText = optionsArrays[getRndInteger(0, 3)];

    if (opponentChoice.innerText == playerChoice.innerText) {
      return;
    } else {
      switch (playerChoice.innerText) {
        case "👊":
          if (opponentChoice.innerText == "✂️") {
            playerTotalScore.innerText = playerScore += 1;
          } else {
            opponentTotalScore.innerText = opponentScore += 1;
          }
          break;
        case "📄":
          if (opponentChoice.innerText == "👊") {
            playerTotalScore.innerText = playerScore += 1;
          } else {
            opponentTotalScore.innerText = opponentScore += 1;
          }
          break;
        case "✂️":
          if (opponentChoice.innerText == "📄") {
            playerTotalScore.innerText = playerScore += 1;
          } else {
            opponentTotalScore.innerText = opponentScore += 1;
          }
          break;
      }
    }

    if (playerScore == 5 || opponentScore == 5) {
      options.forEach((element) => {
        element.style.pointerEvents = "none";
      });
    }
  }, 100);
}

// Function to get random number between min (included) and max (excluded):
function getRndInteger(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

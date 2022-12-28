const choice = ["rock", "paper", "scissors"];
const rockEl = document.getElementById("rock-el");
const paperEl = document.getElementById("paper-el");
const scissorsEl = document.getElementById("scissors-el");
const playerScoreEl = document.getElementById("player-score-el");
const computerScoreEl = document.getElementById("computer-score-el");
const points = "<img src='img/heart.png' class='main__score-icon'/>";
let playerScore = [points, points, points, points, points];
let computerScore = [points, points, points, points, points];
const resultEl = document.getElementById("result-el");
const newGameBtn = document.getElementById("new-game-btn");

// Audio
const zombieAppearing = new Audio("sound/zombie-appearing.mp3");
const zombieDeath = new Audio("sound/zombie-death.mp3");
const playerDeath = new Audio("sound/player-death.mp3");
const zombieDamage = new Audio("sound/zombie-damage.mp3");
const playerDamage = new Audio("sound/player-damage.mp3");
const draw = new Audio("sound/draw.mp3");

window.addEventListener("load", () => {
  playerScoreEl.innerHTML = playerScore.join("");
  computerScoreEl.innerHTML = computerScore.join("");
});

function getComputerChoice() {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

function reducePlayerPoints() {
  playerScore.pop();
  playerScore.join("");
}

function reduceComputerPoints() {
  computerScore.pop();
  computerScore.join("");
}

function checkScore() {
  if (playerScore.length == 0) {
    resultEl.textContent = "Game is over. Zombie wins!";
    playerDeath.play();
  } else if (computerScore.length == 0) {
    resultEl.textContent = "Game is over. Steve wins!";
    zombieDeath.play();
  }
}

function playRound(player, computer) {
  if (playerScore.length == 0) {
    return;
  } else if (computerScore.length == 0) {
    return;
  } else {
    if (player == computer) {
      resultEl.textContent = `You both chose ${player}. Try again!`;
      draw.play();
      checkScore();
    } else if (player == "paper" && computer == "rock") {
      resultEl.textContent =
        player.charAt(0).toUpperCase() +
        player.slice(1) +
        ` beats ${computer}. Steve won!`;
      reduceComputerPoints();
      zombieDamage.play();
      checkScore();
    } else if (player == "paper" && computer == "scissors") {
      resultEl.textContent =
        computer.charAt(0).toUpperCase() +
        computer.slice(1) +
        ` beats ${player}. Zombie won!`;
      reducePlayerPoints();
      playerDamage.play();
      checkScore();
    } else if (player == "rock" && computer == "paper") {
      resultEl.textContent =
        computer.charAt(0).toUpperCase() +
        computer.slice(1) +
        ` beats ${player}. Zombie won!`;
      reducePlayerPoints();
      playerDamage.play();
      checkScore();
    } else if (player == "rock" && computer == "scissors") {
      resultEl.textContent =
        player.charAt(0).toUpperCase() +
        player.slice(1) +
        ` beats ${computer}. Steve won!`;
      reduceComputerPoints();
      zombieDamage.play();
      checkScore();
    } else if (player == "scissors" && computer == "rock") {
      resultEl.textContent =
        computer.charAt(0).toUpperCase() +
        computer.slice(1) +
        ` beats ${player}. Zombie won!`;
      reducePlayerPoints();
      playerDamage.play();
      checkScore();
    } else {
      resultEl.textContent =
        player.charAt(0).toUpperCase() +
        player.slice(1) +
        ` beats ${computer}. Steve won!`;
      reduceComputerPoints();
      zombieDamage.play();
      checkScore();
    }
    playerScoreEl.innerHTML = playerScore.join("");
    computerScoreEl.innerHTML = computerScore.join("");
  }
}

rockEl.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperEl.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsEl.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

newGameBtn.addEventListener("click", function newGame() {
  zombieAppearing.play();
  playerScore = [points, points, points, points, points];
  computerScore = [points, points, points, points, points];
  playerScoreEl.innerHTML = playerScore.join("");
  computerScoreEl.innerHTML = computerScore.join("");
  resultEl.textContent = "";
});

const choice = ["rock", "paper", "scissors"];
const rockEl = document.getElementById("rock-el");
const paperEl = document.getElementById("paper-el");
const scissorsEl = document.getElementById("scissors-el");
const playerScoreEl = document.getElementById("player-score-el");
const computerScoreEl = document.getElementById("computer-score-el");
let playerScore = 0;
let computerScore = 0;
const resultEl = document.getElementById("result-el");
const newGameBtn = document.getElementById("new-game-btn");

// Audio
const zombieAppearing = new Audio("sound/zombie-appearing.mp3");
const zombieDeath = new Audio("sound/zombie-death.mp3");
const playerDeath = new Audio("sound/player-death.mp3");
const zombieDamage = new Audio("sound/zombie-damage.mp3");
const playerDamage = new Audio("sound/player-damage.mp3");
const draw = new Audio("sound/draw.mp3");

/* window.addEventListener("DOMContentLoaded", () => {
  const soundtrack = document.querySelector("audio");
  soundtrack.volume = 0.2;
  soundtrack.play();
}); */

/* let playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", function playMusic() {
  const soundtrack = new Audio("sound/minecraft-music.mp3");
  soundtrack.play();
}); */

function getComputerChoice() {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

function checkScore() {
  if (playerScore == 5) {
    resultEl.textContent = "Game is over. Steve wins!";
    zombieDeath.play();
    return;
  } else if (computerScore == 5) {
    resultEl.textContent = "Game is over. Zombie wins!";
    playerDeath.play();
    return;
  }
}

function playRound(player, computer) {
  if (playerScore == 5) {
    return;
  } else if (computerScore == 5) {
    return;
  } else {
    if (player == computer) {
      resultEl.textContent = `You both chose ${player}. Try again!`;
      draw.play();
      checkScore();
    } else if (player == "paper" && computer == "rock") {
      resultEl.textContent = `${player} beats ${computer}. Steve won!`;
      playerScore += 1;
      zombieDamage.play();
      checkScore();
    } else if (player == "paper" && computer == "scissors") {
      resultEl.textContent = `${computer} beats ${player}. Zombie won!`;
      computerScore += 1;
      playerDamage.play();
      checkScore();
    } else if (player == "rock" && computer == "paper") {
      resultEl.textContent = `${computer} beats ${player}. Zombie won!`;
      computerScore += 1;
      playerDamage.play();
      checkScore();
    } else if (player == "rock" && computer == "scissors") {
      resultEl.textContent = `${player} beats ${computer}. Steve won!`;
      playerScore += 1;
      zombieDamage.play();
      checkScore();
    } else if (player == "scissors" && computer == "rock") {
      resultEl.textContent = `${computer} beats ${player}. Zombie won!`;
      computerScore += 1;
      playerDamage.play();
      checkScore();
    } else {
      resultEl.textContent = `${player} beats ${computer}. Steve won!`;
      playerScore += 1;
      zombieDamage.play();
      checkScore();
    }
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
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
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "";
  computerScoreEl.textContent = "";
  resultEl.textContent = "";
});

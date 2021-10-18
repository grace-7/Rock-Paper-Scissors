const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let ties = 0;

const rules = {
  'rock': {
    'rock': 0,
    'paper': -1,
    'scissors': 1 
  },
  'paper': {
    'rock': 1,
    'paper': 0,
    'scissors': -1
  },
  'scissors': {
    'rock': -1,
    'paper': 1,
    'scissors': 0
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  rockButton.addEventListener("click", () => {
    playRound("rock", computerPlay());
  })
  paperButton.addEventListener("click", () => {
    playRound("paper", computerPlay());
  })
  scissorsButton.addEventListener("click", () => {
    playRound("scissors", computerPlay());
  })
});

function playRound(playerSelection, computerSelection) {
  // get the result of who wins
  // keep track of each player's wins / losses / ties
  // check if the game is over / update UI

  let result = rules[playerSelection][computerSelection];

  if (result < 0) {
    computerScore++;
    addResultLine("The computer won!");
  } else if (result > 0) {
    playerScore++;
    addResultLine("The player won!");
  } else {
    ties++;
    addResultLine("It's a tie!");
  }

  checkGameOver();

}

function checkGameOver() {
  if (computerScore < 5 && playerScore < 5) return;
  const winner = winnerString(playerScore >= 5);
  addResultLine(winner);
}

function computerPlay(){
  let selected = options[Math.floor(Math.random() * options.length)];

  return selected;
}

function winnerString(playerWon) {
  if (playerWon) return "You have won the game!";

  return "The Computer wins the game!";
}

function addResultLine() {
  const resultsCont = document.querySelector('.results');
  resultsCont.appendChild(document.createTextNode(result));
  resultsCont.appendChild(document.createElement("br"));
} 

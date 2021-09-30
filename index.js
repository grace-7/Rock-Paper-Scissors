const options = ['rock', 'paper', 'scissors'];

const ROCK = 'rock'.toLowerCase();
const PAPER = 'paper'.toLowerCase();
const SCISSORS = 'scissors'.toLowerCase();

let compWins = 0;
let tie = 0;

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

function playRound(playerSelection, computerSelection) {

  console.log(playerSelection, computerSelection)
  let result = rules[playerSelection][computerSelection];

  if (result < 0) {
    console.log("The computer wins")
    compWins++;
  } else if (result > 0) {
    console.log("You win")
  } else {
    console.log("It's a tie!")
    tie++;
  }
}

function computerPlay(){
  let selected = options[Math.floor(Math.random() * options.length)];

  return selected;
}

function getUserInput() {
  let userInput = window.prompt("Rock, paper, or scissors?").toLowerCase();
  while (!options.includes(userInput)) {
    userInput = window.prompt("Invalid Input.\n\nRock, paper, or scissors?").toLowerCase();
  }
  return userInput;
}

function winner(){
  if (compWins >= 3 || tie == 3){
    return "The Computer has bested you! You loose!"
  }
  else{
    return "You have won the game!"
  }

}

function game(){
  for (let i = 0; i < 5; i++) {
    let userInput = getUserInput()
    let compSelect = computerPlay();
    playRound(userInput, compSelect);
  }

  let res = winner();
  console.log(res)

}


game();

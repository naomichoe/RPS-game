let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
    return prompt("Rock, Paper, or Scissors?");
}

function getComputerSelection() {
    let rpsOptions = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = (Math.floor(Math.random() * 3));
    return rpsOptions[randomNum];
}

//need to change the playerSelection to now accept the button click as playerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        return "You win! Rock beats scissors."
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        return "You lose! Paper beats rock."
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        return "You win! Paper beats rock."
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        return "You lose! Scissors beats paper."
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        return "You win! Scissors beats paper."
    } else if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}.`
    }
}

// removing for UI assignment
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "You won the game!";
    } else if (playerScore < computerScore) {
        return "You lost the game.";
    } else {
        return "It's a tie. Play again."
    }
}

//test game
console.log(game());
//console.log(playRound(getPlayerSelection, getComputerSelection));


//creating the UI assignment
// let rockButton = document.createElement('button');
// let paperButton = document.createElement('button');
// let scissorsButton = document.createElement('button');

// document.body.appendChild(rockButton);
// document.body.appendChild(paperButton);
// document.body.appendChild(scissorsButton);

// rockButton.innerText = "ROCK";
// paperButton.innerText = "PAPER";
// scissorsButton.innerText = "SCISSORS";

// rockButton.addEventListener('click', playRound);
// paperButton.addEventListener('click', playRound);
// scissorsButton.addEventListener('click', playRound);
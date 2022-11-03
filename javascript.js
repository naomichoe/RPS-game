
let rpsOptions = ["ROCK", "PAPER", "SCISSORS"];

function getPlayerSelection() {
    return prompt("Rock, Paper, or Scissors?");
}

function getComputerSelection() {
    let randomNum = (Math.floor(Math.random() * 3));
    return rpsOptions[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    console.log(playerSelection);
    console.log(computerSelection);
    
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats scissors."
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats paper."
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats paper."
    } else if (playerSelection === computerSelection) {
        return "It's a tie! I'll give you a point anyway."
    }
}

//removing for UI assignment
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(getPlayerSelection, getComputerSelection);
//     }
//     return "The game is over"
// }

//test game
//console.log(game());
//console.log(playRound(getPlayerSelection, getComputerSelection));

//creating the UI assignment

let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorsButton = document.createElement('button');

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

rockButton.innerText = "ROCK";
paperButton.innerText = "PAPER";
scissorsButton.innerText = "SCISSORS";

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
//need an array of rps options
let rpsChoice = ["ROCK", "PAPER", "SCISSORS"];

//need to create a function that will randomly return an option from the rpsChoice array
function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 3));
    //console.log(randomNum);
    return rpsChoice[randomNum];
}
//verifying if the output it working correctly
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let playerSelectionInCaps = playerSelection.toUpperCase();
    //console.log(playerSelectionInCaps);
    if (playerSelectionInCaps === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats scissors."
    } else if (playerSelectionInCaps === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats rock."
    } else if (playerSelectionInCaps === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats rock."
    } else if (playerSelectionInCaps === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats paper."
    } else if (playerSelectionInCaps === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats scissors."
    } else if (playerSelectionInCaps === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats paper."
    }
    
    else if (playerSelectionInCaps === computerSelection) {
        return "It's a tie! I'll give you a point anyway."
    }
}

//This is to test if one round where player selection is rock will return the correct output also it checks for the playerselection being able to accept any version of Rock.
const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    return "Game Over"
}
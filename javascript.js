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
    console.log(playerSelectionInCaps);
    if (playerSelectionInCaps === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats scissors."
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
}
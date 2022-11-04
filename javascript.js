let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    let rpsOptions = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = (Math.floor(Math.random() * rpsOptions.length));
    return rpsOptions[randomNum];
}

//need to change the playerSelection to now accept the button click as playerSelection
function playGame(playerSelection, computerSelection) {
    let result = ''; 
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

//creating the UI assignment
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

//loop through all buttons and add the event listener
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.id.toUpperCase();
        let computerSelection = getComputerSelection();
        playGame(playerSelection, computerSelection);
    });
})

//addEventListener to each button
// rockButton.addEventListener('click', () => {
//     let playerSelection = 'ROCK';
//     let computerSelection = getComputerSelection();
//     console.log(playRound(playerSelection, computerSelection));
// });
// paperButton.addEventListener('click', () => {
//     let playerSelection = 'PAPER';
//     let computerSelection = getComputerSelection();
//     console.log(playRound(playerSelection, computerSelection));
// });
// scissorsButton.addEventListener('click', () => {
//     let playerSelection = 'SCISSORS';
//     let computerSelection = getComputerSelection();
//     console.log(playRound(playerSelection, computerSelection));
// });

// removing for UI assignment

// function getPlayerSelection() {
//     return prompt("Rock, Paper, or Scissors?");
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = getPlayerSelection().toUpperCase();
//         let computerSelection = getComputerSelection();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore > computerScore) {
//         return "You won the game!";
//     } else if (playerScore < computerScore) {
//         return "You lost the game.";
//     } else {
//         return "It's a tie. Play again."
//     }
// }

//test game
//console.log(game());
//console.log(playRound(getPlayerSelection, getComputerSelection));

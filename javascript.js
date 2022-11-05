let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

function getComputerSelection() {
    let rpsOptions = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = (Math.floor(Math.random() * rpsOptions.length));
    return rpsOptions[randomNum];
}

function disableButtons() {
    buttons.forEach(button => {button.disabled = true;});
}

function playGame(playerSelection, computerSelection) {
    let gameScoreDiv = document.querySelector('.game-score');

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        gameScoreDiv.innerText = `You win! ${playerSelection} beats ${computerSelection}. Player score: ${playerScore}, Computer score: ${computerScore}`;
        if (playerScore === 5) {
            gameScoreDiv.innerText = `You won the game! Reload to play again. Player score: ${playerScore}, Computer score: ${computerScore}`
            disableButtons();
        }
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        gameScoreDiv.innerText = `You lose! ${computerSelection} beats ${playerSelection}. Player score: ${playerScore}, Computer score: ${computerScore}`;
        if (computerScore === 5) {
            gameScoreDiv.innerText = `You lost the game! Reload to try again. Player score: ${playerScore}, Computer score: ${computerScore}`
            disableButtons();
        }
    } else if (playerSelection === computerSelection) {
        gameScoreDiv.innerText = `It's a tie! You both played ${playerSelection}. Player score: ${playerScore}, Computer score: ${computerScore}`
    }
}

//creating the UI assignment
//loop through all buttons and add the event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.id.toUpperCase();
        let computerSelection = getComputerSelection();
        playGame(playerSelection, computerSelection);
    });
})

//addEventListener to each button
// let rockButton = document.querySelector('#rock');
// let paperButton = document.querySelector('#paper');
// let scissorsButton = document.querySelector('#scissors');

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
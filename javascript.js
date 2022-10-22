//need an array of rps options
let rpsChoice = ["Rock", "Paper", "Scissors"];

//need to create a function that will randomly return an option from the rpsChoice array
function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 3));
    //console.log(randomNum);
    return rpsChoice[randomNum];
}
//verifying if the output it working correctly
console.log(getComputerChoice());


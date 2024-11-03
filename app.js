// declaring the consts
const choices =["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
//using querySelector for class elements
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

//function for playing game 
function playGame(playerChoice){
    //using the arrays to generate a random number for computer choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
//checking if it's a tie/win/or lose
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    } else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
               result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
// display choices and results
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText","redText");
//updates scores
if (result === "YOU WIN!") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
} else if ( result === "YOU LOSE!"){
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
}
}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDisplay = document.querySelector('.result');
const scoreDisplay = document.querySelector('.score');
let score = 0;

function computerPlay() {
    const computerSelection = Math.random();
    if (computerSelection < 0.33) {
        return "Rock";
    }
    else if (computerSelection < 0.66) {
        return "Paper";
    }
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let result = "Draw";

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "Win";
        }
        else if (computerSelection === "Scissors") {
            result = "Lose";
        }
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            result = "Win";
        }
        else if (computerSelection === "Paper") {
            result = "Lose";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            result = "Win";
        }
        else if (computerSelection === "Rock") {
            result = "Lose";
        }
    }

    if (result === "Draw") {
        return "It's a draw! Both players played " + playerSelection;
    }
    else if (result === "Win"){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}


function game(playerSelection) {
    let result = '';

    result = playRound(playerSelection, computerPlay());
    if (result.search("Win") !== -1) score++;

    resultDisplay.innerText = result;
    scoreDisplay.innerText = score;
    console.log(result);
    console.log("Current score: " + score);
    
}

let result = '';

rockBtn.addEventListener('click', () => game('Rock'));
paperBtn.addEventListener("click", () => game('Paper'));
scissorsBtn.addEventListener("click", () => game('Scissors'));



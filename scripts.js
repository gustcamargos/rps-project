let moves = ["Rock", "Paper", "Scissor"];

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() != "ROCK" && 
        playerSelection.toUpperCase() != "PAPER" &&
        playerSelection.toUpperCase() != "SCISSOR")  
    {
        return `Text a valid option!`
    }
    else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return `Tie Game! ${playerSelection.toUpperCase()} tie to ${computerSelection.toUpperCase()}`
    }
    else if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == "SCISSOR") ||
    (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == "ROCK") ||
    (playerSelection.toUpperCase() == 'SCISSOR' && computerSelection.toUpperCase() == "PAPER"))
    {
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    }
    else {
        return `You lost! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}`
    }
}

const playerSelection = "scissor";

const computerSelection = computerPlay();

const roundResult = playRound(playerSelection, computerSelection)

console.log(roundResult);

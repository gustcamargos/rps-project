let moves = ["Rock", "Paper", "Scissor"];

function computerPlay() {
    
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() != "ROCK" && 
        playerSelection.toUpperCase() != "PAPER" &&
        playerSelection.toUpperCase() != "SCISSOR")  
    {
        return "-1"
    }
    else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "0"
    }
    else if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == "SCISSOR") ||
    (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == "ROCK") ||
    (playerSelection.toUpperCase() == 'SCISSOR' && computerSelection.toUpperCase() == "PAPER"))
    {
        return "1"
    }
    else {
        return "2"
    }
}

function game() {

    let win = 0;
    let lost = 0;
    let tie = 0;

    for(i=0; i<5; i++) {
        let playerSelection = prompt("What's your move?");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        
        switch(roundResult) {
            case "-1":
                console.log(`Text a valid option!`);
                i -= 1;
                break;
            case "0":
                console.log(`Tie Game! ${playerSelection.toUpperCase()} tie to ${computerSelection.toUpperCase()}`);
                tie += 1;
                break;
            case "1":
                console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
                win += 1;
                break;
            case "2":
                console.log(`You lost! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}`);
                lost += 1;
                break;
        }
    }

    console.log(`The scoreboard is:  ${win} wins, ${tie} ties and ${lost} loses.`)
}

game();

function computerPlay() {
    let moves = ["Rock", "Paper", "Scissor"]; 
    return moves[Math.floor(Math.random() * moves.length)];
}

const computerSelection = computerPlay();

console.log(computerSelection);

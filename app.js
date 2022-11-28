function game() {
    for (let i = 0; i < 5; ++i) {
        PlayRound(getPlayerChoice(), getComputerChoice());
    }
}

function PlayRound(playerSelection, computerSelection) {
    // finds potential player wins
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("The player uses " + playerSelection + " to beat the computer that had " + computerSelection + "!");
        return;
    }

    // finds potential tie (otherwise computer won)
    if (playerSelection == computerSelection) console.log("You both chose" + playerSelection + " so it was a tie!");
    else console.log("The computer uses " + computerSelection + " to beat the player that had " + playerSelection + "!");
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * (3 + 1 - 1) + 1);
    switch (rand) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

game();

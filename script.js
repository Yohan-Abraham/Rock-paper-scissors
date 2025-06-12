function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    if (random === 0)
        return "rock";
    else if (random === 1)
        return "scissors"
    else
        return "paper"
}

function getHumanChoice() {
    input = prompt("Rock, paper, or scissors?");
    return input;
}

function playRound(human, computer) {

    if (human.toLowerCase() === computer) {
        console.log(`Its a Tie!`);
    }

    else if (human.toLowerCase() === 'rock' && computer === 'paper') {
        console.log(`Computer wins! ${computer} beats ${human}.`);
        computerScore++;
    }

    else if (human.toLowerCase() === 'rock' && computer === 'scissors') {
        console.log(`You Win! ${human} beats ${computer}.`);
        humanScore++;
    }

    else if (human.toLowerCase() === 'paper' && computer === 'rock') {
        console.log(`You Win! ${human} beats ${computer}.`);
        humanScore++;
    }

    else if (human.toLowerCase() === 'paper' && computer === 'scissors') {
        console.log(`Computer wins! ${computer} beats ${human}.`);
        computerScore++;
    }

    else if (human.toLowerCase() === 'scissors' && computer === 'rock') {
        console.log(`Computer wins! ${computer} beats ${human}.`);
        computerScore++;
    }

    else {
        console.log(`You Win! ${human} beats ${computer}.`);
        humanScore++;
    }

}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You Win! Your Score: ${humanScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer Wins! Computer Score: ${computerScore}`);
    }
    else {
        console.log(`Its a Tie! Your Score: ${humanScore}\nComputer Score ${computerScore}`);
    }
}

humanScore = 0;
computerScore = 0;

playGame();
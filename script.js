function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    if (random === 0)
        return "rock";
    else if (random === 1)
        return "scissors"
    else
        return "paper"
}

function playRound(input, computer) {

    if (input.toLowerCase() === computer) {
        console.log(`Its a Tie!`);
    }

    else if (input.toLowerCase() === 'rock' && computer === 'paper') {
        console.log(`Computer wins! ${computer} beats ${input}.`);
        computerScore++;
    }

    else if (input.toLowerCase() === 'rock' && computer === 'scissors') {
        console.log(`You Win! ${input} beats ${computer}.`);
        humanScore++;
    }

    else if (input.toLowerCase() === 'paper' && computer === 'rock') {
        console.log(`You Win! ${input} beats ${computer}.`);
        humanScore++;
    }

    else if (input.toLowerCase() === 'paper' && computer === 'scissors') {
        console.log(`Computer wins! ${computer} beats ${input}.`);
        computerScore++;
    }

    else if (input.toLowerCase() === 'scissors' && computer === 'rock') {
        console.log(`Computer wins! ${computer} beats ${input}.`);
        computerScore++;
    }

    else {
        console.log(`You Win! ${input} beats ${computer}.`);
        humanScore++;
    }

    const playerElement = document.querySelector(".player");
    const computerElement = document.querySelector(".computer");

    const playerPara = document.createElement("p");
    playerElement.textContent = "Player Score: ";
    playerPara.textContent = humanScore;
    playerPara.style.display = "inline";
    playerElement.appendChild(playerPara);

    const computerPara = document.createElement("p");
    computerElement.textContent = "Computer Score: ";
    computerPara.textContent.replace = computerScore;
    computerPara.style.display = "inline";
    computerElement.appendChild(computerPara);

}




humanScore = 0;
computerScore = 0;


const buttons = document.querySelectorAll("button");



let input;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        input = btn.textContent;
        playRound(input, getComputerChoice());
    });
});



// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     if (humanScore > computerScore) {
//         console.log(`You Win! Your Score: ${humanScore}.`);
//     }
//     else if (computerScore > humanScore) {
//         console.log(`Computer Wins! Computer Score: ${computerScore}.`);
//     }
//     else {
//         console.log(`Its a Tie! Your Score: ${humanScore}\nComputer Score ${computerScore}.`);
//     }
// }
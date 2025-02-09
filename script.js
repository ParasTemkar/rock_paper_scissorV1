//to get computer choice
function getComputerChoice() {
    return Math.floor(Math.random() * 9) + 1;
    }

function getChoiceFromNumber(number) {
    if ([1, 2, 3].includes(number)) {
        return "rock";
    } else if ([4, 5, 6].includes(number)) {
        return "paper";
    } else if ([7, 8, 9].includes(number)) {
        return "scissor";
    }
}

// to get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissor: ");

    if (humanChoice === null) {
        alert("No input provided. Please try again.");
        return null;
    }
    return humanChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

// Run the game 5 times
for (let i = 0; i < 5; i++) {
    let randomInt = getComputerChoice();
    let computerChoice = getChoiceFromNumber(randomInt);
    let humanChoice = getHumanChoice();

    if (humanChoice === null) {
        continue;
    }

    // Tie scenarios
    if (humanChoice === computerChoice) {
        alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nTIE!!!");
    }
    // Winning scenarios
    else if (
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "scissor" && humanChoice === "rock") ||
        (computerChoice === "paper" && humanChoice === "scissor")
    ) {
        alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU WON!!!");
        humanScore += 1;
    }
    // Losing scenarios
    else if (
        (computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissor" && humanChoice === "paper")
    ) {
        alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU LOST.");
        computerScore += 1;
    } else {
        alert("Invalid input. Please enter rock, paper, or scissor.");
    }
}

// Display final scores
alert("Final Scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);

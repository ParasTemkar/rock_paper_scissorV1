//to get computer choice
function getComputerChoice() {
    return Math.floor(Math.random()*9)+1;
  }

let randomInt = getComputerChoice();
let computerChoice = ""

if ([1,2,3].includes(randomInt)){
    computerChoice = "rock";
}
else if ([4,5,6].includes(randomInt)){
    computerChoice = "paper";
}
else if ([7,8,9].includes(randomInt)){
    computerChoice = "scissor";
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
let humanChoice = getHumanChoice();


if (humanChoice === computerChoice) {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nTIE!!!");
} else if (humanChoice === null) {
    // No action needed
}

//winning scenarios
else if (computerChoice === "rock" && humanChoice === "paper") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU WON!!!");
} else if (computerChoice === "scissor" && humanChoice === "rock") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU WON!!!");
} else if (computerChoice === "paper" && humanChoice === "scissor") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU WON!!!");
}

//losing scenarios
else if (computerChoice === "rock" && humanChoice === "scissor") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU LOST.");
} else if (computerChoice === "paper" && humanChoice === "rock") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU LOST.");
} else if (computerChoice === "scissor" && humanChoice === "paper") {
    alert("Computer's choice: " + computerChoice + "\nYour choice: " + humanChoice + "\nYOU LOST.");
} else {
    alert("Enter rock, paper or scissor");
}
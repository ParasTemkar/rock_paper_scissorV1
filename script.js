function getComputerChoice() {
    return Math.floor(Math.random()*9)+1;
  }

let randomInt = getComputerChoice();
let computerChoice = ""

if ([1,2,3].includes(randomInt)){
    computerChoice = "Rock";
}
else if ([4,5,6].includes(randomInt)){
    computerChoice = "Paper";
}
else if ([7,8,9].includes(randomInt))){
    computerChoice = "Scissor";
}


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

let humanChoice = function getHumanChoice(){
    return prompt("Enter rock, paper or scissor","rock");
}


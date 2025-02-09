function getRandomInt() {
    return Math.floor(Math.random()*9)+1;
  }

let randomInt = getRandomInt();
let computerMove = ""

if (randomInt==1 || randomInt==2 || randomInt==3 ){
    computerMove = "Rock";
}
else if (randomInt==4 || randomInt==5 || randomInt==6 ){
    computerMove = "Paper";
}
else if (randomInt==7 || randomInt==8 || randomInt==9 ){
    computerMove = "Scissor";
}

alert(computerMove)
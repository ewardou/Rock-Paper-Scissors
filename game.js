let playerSelection=prompt("Rock, paper, or scissors?");
playerSelection=playerSelection.toLowerCase()
console.log("Player selection:",playerSelection);

function computerPlay(){
    let choice=Math.floor(Math.random()*3)+1;
    console.log("Random number:",choice);
    if (choice===1){
        return "rock"
    } else if (choice===2){
        return "paper"
    } else if (choice===3) {
        return "scissors"
    }
}
let computerSelection=computerPlay();
console.log("Computer selection:",computerSelection);

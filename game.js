let playerSelection=prompt("Rock, paper, or scissors?");
playerSelection=playerSelection.toLowerCase()
console.log("Player selection:",playerSelection);

//Function to randomly select computer's choice
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

function playRound(playerSelection, computerSelection){
    //When player wins
    if (playerSelection==="rock" && computerSelection==="scissors"){
        return "You win! Rock beats scissors";
    }else if (playerSelection==="scissors" && computerSelection==="paper"){
        return "You win! Scissors beats paper";
    }else if (playerSelection==="paper" && computerSelection==="rock"){
        return "You win! Paper beats rock";

    //When computer wins    
    }else if (computerSelection==="rock" && playerSelection==="scissors"){
        return "You lose! Rock beats scissors";
    }else if (computerSelection==="scissors" && playerSelection==="paper"){
        return "You lose! Scissors beats paper";
    }else if (computerSelection==="paper" && playerSelection==="rock"){
        return "You lose! Paper beats rock";
    }else {
        return "It's a tie"
    }
}

console.log(playRound(playerSelection,computerSelection));
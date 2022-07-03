
let userScore;
let computerScore;
//Function to randomly select computer's choice
function computerPlay(){
    let choice=Math.floor(Math.random()*3)+1;
    if (choice===1){
        return "rock"
    } else if (choice===2){
        return "paper"
    } else if (choice===3) {
        return "scissors"
    }
}

// Function to compare both selections and decide the winner of a round. Increases the score.
function playRound(playerSelection, computerSelection){
    //When player wins
    if (playerSelection==="rock" && computerSelection==="scissors"){
        userScore++;
        return "You win! Rock beats scissors";
    }else if (playerSelection==="scissors" && computerSelection==="paper"){
        userScore++;
        return "You win! Scissors beats paper";
    }else if (playerSelection==="paper" && computerSelection==="rock"){
        userScore++;
        return "You win! Paper beats rock";

    //When computer wins    
    }else if (computerSelection==="rock" && playerSelection==="scissors"){
        computerScore++;
        return "You lose! Rock beats scissors";
    }else if (computerSelection==="scissors" && playerSelection==="paper"){
        computerScore++;
        return "You lose! Scissors beats paper";
    }else if (computerSelection==="paper" && playerSelection==="rock"){
        computerScore++;
        return "You lose! Paper beats rock";
    }else {
        return "It's a tie"
    }
}

function game(){
    userScore=0;
    computerScore=0;

    for (let i=1; i<=5 ;i++){
        let playerSelection=prompt("Rock, paper, or scissors?");
        playerSelection=playerSelection.toLowerCase();
        let computerSelection=computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("User score:",userScore);
        console.log("Computer score:",computerScore)
        }

    if (userScore>computerScore){
        console.log("You have won!");
    } else if(computerScore>userScore){
        console.log("You have lost") ;
    } else{
        console.log("You have drawn");
    }
}
game();
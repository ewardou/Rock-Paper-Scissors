
let userScore=0;
let computerScore=0;
let playerSelection;
//let computerSelection;


const btn=document.querySelectorAll(".container button")
btn.forEach((button) =>{
    button.addEventListener("click",(event)=>{
        if(event.target.className==="rock"){
            playerSelection="rock";
        } else if (event.target.className==="paper"){
            playerSelection="paper";
        } else if (event.target.className==="scissors"){
            playerSelection="scissors"
        };
        playRound(playerSelection,computerPlay());
        checkWinner(userScore,computerScore);
    });
});

const msg=document.querySelector(".message");
const userScoreDom=document.querySelector(".user-score");
const computerScoreDom=document.querySelector(".cpu-score");
const container=document.querySelector(".container");

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
        userScoreDom.textContent=userScore;
        return msg.textContent="You win! Rock beats scissors";
    }else if (playerSelection==="scissors" && computerSelection==="paper"){
        userScore++;
        userScoreDom.textContent=userScore;
        return msg.textContent="You win! Scissors beats paper";
    }else if (playerSelection==="paper" && computerSelection==="rock"){
        userScore++;
        userScoreDom.textContent=userScore;
        return msg.textContent="You win! Paper beats rock";

    //When computer wins    
    }else if (computerSelection==="rock" && playerSelection==="scissors"){
        computerScore++;
        computerScoreDom.textContent=computerScore;
        return msg.textContent="You lose! Rock beats scissors";
    }else if (computerSelection==="scissors" && playerSelection==="paper"){
        computerScore++;
        computerScoreDom.textContent=computerScore;
        return msg.textContent="You lose! Scissors beats paper";
    }else if (computerSelection==="paper" && playerSelection==="rock"){
        computerScore++;
        computerScoreDom.textContent=computerScore;
        return msg.textContent="You lose! Paper beats rock";
    }else {
        return msg.textContent="It's a tie"
    }
}
// Game function to start a game of rock, paper, scissors
/*function game(){
    userScore=0;
    computerScore=0;

    for (let i=1; (userScore<5) && (computerScore<5) ;i++){
        let playerSelection=prompt("Rock, paper, or scissors?");
        playerSelection=playerSelection.toLowerCase();
        let computerSelection=computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("User score:",userScore);
        console.log("Computer score:",computerScore)
        }

    if (userScore>computerScore){
        return msg.textContent="You have won!";
    } else if(computerScore>userScore){
        return msg.textContent="You have lost" ;
    } else{
        return msg.textContent="You have drawn";
    }
} */

function checkWinner(userScore,computerScore){
    if (userScore===5){
        msg.textContent="You have won!";
        reset()
    } else if(computerScore===5){
        msg.textContent="You have lost";
        reset()
    };
}

function reset(){
    const rst=document.createElement("button");
    rst.textContent="Reset"
    rst.setAttribute("style","font-family:'Press Start 2P', cursive;font-size: 30px");
    container.appendChild(rst);
    const buttons=document.querySelector(".buttons");
    container.removeChild(buttons);
    rst.addEventListener("click",()=>{
        location.reload();
        return false;
    })
}
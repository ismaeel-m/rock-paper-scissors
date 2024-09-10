let rock = 0;
let paper = 1;
let scissors = 2;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter 'rock', 'paper', or 'scissors'.");
}


function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice == computerChoice){
        console.log("It's a tie! No point awarded.");
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + "!");
        humanScore++;
    } else{
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + "!");
        computerScore++;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
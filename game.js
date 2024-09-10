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

    let humanInput = " ";

    while(!["rock", "paper", "scissors"].includes(humanInput.toLowerCase())){
        humanInput = prompt("Enter 'rock', 'paper', or 'scissors'.");
    }

    return humanInput;
}

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);
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

function playGame(){

    for(let i =0; i < 5; i++){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }

    console.log("The final scores after 5 rounds are:\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);

    if(humanScore == computerScore){
        console.log("It was a tie!");
    } else if (humanScore > computerScore){
        console.log("You won!");
    } else{
        console.log("Computer won!");
    }

    humanScore = 0;
    computerScore = 0;

}

playGame();
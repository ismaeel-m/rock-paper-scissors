let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
const body = document.querySelector('body');
const resultDiv = document.querySelector('#result');
const humanTextScore = document.querySelector('#human-score');
const computerTextScore = document.querySelector('#computer-score');

function getHumanChoice(e){

    let target = e.target;
    let humanSelection = '';

    switch(target.id){
        case 'rock':
            humanSelection = target.textContent;
            break;
        case 'paper':
            humanSelection = target.textContent;
            break;
        case 'scissors':
            humanSelection = target.textContent;
            break;
    }

    if(humanSelection != ''){
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore == 5 || computerScore == 5){
        body.removeEventListener('click', getHumanChoice);
        endGame();
    }


}

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

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    let result = "";
    
    if(humanChoice == computerChoice){
        result = "It's a tie! No point awarded.";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        result = "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + "!";
        humanScore++;
    } else{
        result = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + "!";
        computerScore++;
    }

    let returnArr = [ "---", "You chose: " + humanChoice, "Computer chose: " + computerChoice, result];
    
    returnArr.forEach((item) =>{
        let newP = document.createElement("p");
        newP.textContent = item;
        resultDiv.appendChild(newP);
    });

    humanTextScore.textContent = humanScore;
    computerTextScore.textContent = computerScore;

    gameCount++;
    console.log(gameCount);
}

function endGame(){

    let finalResult = '';

    if(humanScore == computerScore){
        finalResult = "It was a tie!";
    } else if (humanScore > computerScore){
        finalResult = "You won!";
    } else{
        finalResult = "Computer won!";
    }

    let returnArr = [ "---", "The final scores are:", "Your Score: " + humanScore, "Computer Score: " + computerScore, finalResult];
    
    returnArr.forEach((item) =>{
        let newP = document.createElement("p");
        newP.textContent = item;
        resultDiv.appendChild(newP);
    });

    humanScore = 0;
    computerScore = 0;

}

body.addEventListener('click', getHumanChoice);
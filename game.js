let rock = 0;
let paper = 1;
let scissors = 2;

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


console.log(getHumanChoice());
console.log(getComputerChoice());
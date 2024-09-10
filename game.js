let rock = 0;
let paper = 1;
let scissors = 2;

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);

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

console.log(getComputerChoice());
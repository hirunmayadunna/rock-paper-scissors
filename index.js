// Rock, Paper, Scissors game
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(PlayerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(PlayerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(PlayerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;          
        }
    }

    playerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
    }

}
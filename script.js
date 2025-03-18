function playRound(event) {
    let humanChoice = event.target.innerText.trim().toUpperCase();
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    if(computerScore===5||humanScore===5){
        result.innerText="";
        humanScore=0;
        computerScore=0;
    }

    if (humanChoice == "ROCK") {
        switch (computerChoice) {
            case 0:
                result.innerText += "\nIts a tie!!";
                tieCount++;
                break
            case 1:
                result.innerText += "\nThe winner is Computer";
                computerScore++
                break
            case 2:
                result.innerText += "\nThe winner is Human!";
                humanScore++
        }

    }
    else if (humanChoice == "PAPER") {
        switch (computerChoice) {
            case 0:
                result.innerText += "\nThe winner is Human!";
                humanScore++
                break
            case 1:
                result.innerText += "\nIts a tie!!";
                tieCount++;
                break
            case 2:
                result.innerText += "\nThe winner is Computer";
                computerScore++
        }
    }
    else if (humanChoice == "SCISSOR") {
        switch (computerChoice) {
            case 0:
                result.innerText += "\nThe winner is Computer";
                computerScore++
                break
            case 1:
                result.innerText += "\nThe winner is Human!";
                humanScore++
                break
            case 2:
                result.innerText += "\nIts a tie!!";
                tieCount++;
        }
    }

    hScore.innerText = `Human Score: ${humanScore}`
    cScore.innerText = `Computer Score: ${computerScore}`;

    if (computerScore === 5 || humanScore === 5) {
        if (humanScore < computerScore) {
            result.innerText = "\nComputer wins the match";
        }
        else {
            result.innerText = "\nHuman wins the match";
        }
    }
}
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}



let options = document.querySelectorAll(".option");
let result = document.querySelector(".result");
let hScore = document.querySelector("#humanScore");
let cScore = document.querySelector("#computerScore");


options.forEach(option => {
    option.addEventListener("click", playRound);
    option.addEventListener("mouseover",changeBackground)
    option.addEventListener("mouseout",changeBackground)

});

function changeBackground(event){
    if(event.type=="mouseover"){
        event.target.style.backgroundColor="#007BFF";
    }
    else if(event.type="mouseout"){
        event.target.style.backgroundColor="#007bffd8";
    }
}



let humanScore = 0;
let computerScore = 0;
let tieCount = 0;


hScore.innerText = `Human Score: ${humanScore}`
cScore.innerText = `Computer Score: ${computerScore}`;






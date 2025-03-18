function playRound(event) {
    let humanChoice = event.target.innerText.trim().toUpperCase();
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    if(computerScore===0&&humanScore===0&&tieCount===0){
        result.innerHTML="";
    }

    if (humanChoice == "ROCK") {
        switch (computerChoice) {
            case 0:
                result.innerText += "\nIts a tie!!";
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
        }
    }

    if (computerScore === 5 || humanScore === 5) {
        if (humanScore < computerScore) {
            result.innerText = "Computer wins the match";
            humanScore = 0;
            computerScore = 0;
        }
        else {
            result.innerText = "Human wins the match";
            humanScore = 0;
            computerScore = 0;
        }
    }
}
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}



let options = document.querySelectorAll(".option");
let result = document.querySelector(".result");
options.forEach(option => {
    option.addEventListener("click", playRound);

});



let humanScore = 0;
let computerScore = 0;
let tieCount=0;






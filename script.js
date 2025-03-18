function playRound(event) {
    let humanChoice = event.target.innerText.trim().toUpperCase();
    const computerChoice=getComputerChoice();
    console.log(computerChoice);
    if (humanChoice == "ROCK") {
        switch (computerChoice) {
            case 0:
                result.innerText="Its a tie!!";
                break
            case 1:
                result.innerText="The winner is Computer";
                ComputerScore++
                break
            case 2:
                result.innerText="The winner is Human!";
                HumanScore++
        }

    }
    else if (humanChoice == "PAPER") {
        switch (computerChoice) {
            case 0:
                result.innerText="The winner is Human!";
                HumanScore++
                break
            case 1:
                result.innerText="Its a tie!!";
                break
            case 2:
                result.innerText="The winner is Computer";
                ComputerScore++
        }
    }
    else if (humanChoice == "SCISSOR") {
        switch (computerChoice) {
            case 0:
                result.innerText="The winner is Computer";
                ComputerScore++
                break
            case 1:
                result.innerText="The winner is Human!";
                HumanScore++
                break
            case 2:
                result.innerText="Its a tie!!";
        }
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}



let options = document.querySelectorAll(".option");
let result=document.querySelector(".result");
options.forEach(option => {
    option.addEventListener("click", playRound);

});



let HumanScore = 0
let ComputerScore = 0






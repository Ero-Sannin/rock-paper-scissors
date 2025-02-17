function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    return prompt("enter your choice:").trim().toUpperCase()
}


let HumanScore=0
let ComputerScore=0


computerChoice=getComputerChoice()
console.log(computerChoice)
humanChoice=getHumanChoice()

function playRound(computerChoice,humanChoice){
    if(humanChoice=="ROCK"){
        switch(computerChoice){
            case 0:
                console.log("Its a tie!!")
                break
            case 1:
                console.log("The winner is computer!!")
                ComputerScore++
                break
            case 2:
                console.log("The winner is human!!")
                HumanScore++
        }
            
    }
    else if(humanChoice=="PAPER"){
        switch(computerChoice){
            case 0:
                console.log("The winner is Human!!")
                HumanScore++
                break
            case 1:
                console.log("Its a tie!!")
                break
            case 2:
                console.log("The winner is computer!!")
                ComputerScore++
        }
    }
    else if(humanChoice=="SCISSOR"){
        switch(computerChoice){
            case 0:
                console.log("The winner is Computer!!")
                ComputerScore++
                break
            case 1:
                console.log("The winner is Human!!")
                break
            case 2:
                console.log("Its a tie")
        }
    }
}

playRound(computerChoice,humanChoice)
console.log("Human: "+HumanScore)
console.log("Computer: "+ComputerScore)
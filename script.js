function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    return prompt("enter your choice:").trim().toUpperCase()
}
console.log(getComputerChoice())
console.log(getHumanChoice())

let HumanScore=0
let ComputerScore=0


computerChoice=getComputerChoice()
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
}

console.log(("hello").strcmpi("hEllo"))
function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    return prompt("enter your choice:").trim().toUpperCase()
}


function playGame(){

    let HumanScore=0
    let ComputerScore=0
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
                    HumanScore++
                    break
                case 2:
                    console.log("Its a tie")
            }
        }
    }
    
    
    for(let i=0;i<5;i++){
        computerChoice=getComputerChoice()
        console.log(computerChoice)
        humanChoice=getHumanChoice()
        playRound(computerChoice,humanChoice)    
    }
    console.log("Final Scores: ")
    console.log("Human: ",HumanScore)
    console.log("Computer: ",ComputerScore)
    if(HumanScore>ComputerScore)
        console.log("Human takes the win")
    else if(ComputerScore>HumanScore)
        console.log("Computer takes the win")
    else
        console.log("Its a draw")

    HumanScore=0
    ComputerScore=0

    
}


const gameButtons = document.querySelector("#gameButtons") 
const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")
const human_choice = document.querySelector('#human-choice')
const computer_choice = document.querySelector('#computer-choice')
const result = document.querySelector("#round-result")


let humanScore = 0
let computerScore = 0



function getComputerChoice(){

    let choice = Math.floor(Math.random()*3)

        if(choice === 0){
            return "rock"
             }

        else if(choice === 1){
            return "paper"
            }
            
        else {return "scissors"}
    }
        

rockButton.addEventListener('click',() => {let computerChoice = getComputerChoice();
    playRound(humanChoice = "rock", computerChoice);})
       
paperButton.addEventListener('click',() => {let computerChoice = getComputerChoice();
    playRound(humanChoice = "paper", computerChoice)})
       
scissorsButton.addEventListener('click',() => {let computerChoice = getComputerChoice();
    playRound(humanChoice = "scissors", computerChoice)})
        
function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        human_choice.textContent = humanChoice
        computer_choice.textContent = computerChoice
        result.textContent = " It's a tie"
    }
    if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper"){
                
        humanScore++

        human_choice.textContent = humanChoice
        computer_choice.textContent = computerChoice
        result.textContent = "YOU WON THIS ROUND "
        }

    else {
        computerScore++

        human_choice.textContent = humanChoice
        computer_choice.textContent = computerChoice
        result.textContent = " Unfortunately, You Lost This Round"                
        }
}

function announceWinner(humanScore,computerScore){
    if (humanScore === 5 || computerScore === 5){
                
            }
}

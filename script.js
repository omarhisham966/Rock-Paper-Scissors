const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")
const humanChoiceDisplay = document.querySelector('#human-choice')
const computerChoiceDisplay = document.querySelector('#computer-choice')
const result = document.querySelector("#round-result")
const humanScoreDisplay = document.querySelector("#human-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const roundNumber = document.querySelector('#round')
const tryAgainButton = document.querySelector(".new-game")
const over = document.querySelector('#match-over')
const finalScore = document.querySelector('#final-score')
const reason = document.querySelector('#reason')

const winningScore = 5

let humanScore = 0
let computerScore = 0
let round = 0

tryAgainButton.disabled = true

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
    playRound("rock", computerChoice);})
       
paperButton.addEventListener('click',() => {let computerChoice = getComputerChoice();
    playRound("paper", computerChoice)})
       
scissorsButton.addEventListener('click',() => {let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice)})
        
function playRound(humanChoice, computerChoice){
    roundNumber.textContent = ++round

    humanChoiceDisplay.textContent = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    computerChoiceDisplay.textContent = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice){
        result.textContent = " It's a tie"
        return;
    }

    if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper"){
                
        humanScore++
        if (humanScore !== winningScore){
            result.textContent = "You Won This Round"
        }
        humanScoreDisplay.textContent = humanScore
    }

    else{

        computerScore++
        result.textContent = "You Lost This Round"                
        computerScoreDisplay.textContent = computerScore
    }
    announceWinner()
}

function announceWinner(){
    if (humanScore === winningScore || computerScore === winningScore){
        rockButton.disabled = true
        paperButton.disabled = true
        scissorsButton.disabled = true

        if (computerScore === winningScore){
            result.textContent = "😞YOU LOST!"
            reason.textContent = 'Computer Reached 5 Points First'
        }
        else if(humanScore === winningScore){
            result.textContent = "🎉YOU WON!!"
            reason.textContent = 'You Reached 5 Points First'
        }
        tryAgainButton.disabled = false
        over.textContent = 'Match Over'
        finalScore.textContent = `Final Score: ${humanScore} - ${computerScore}`

    }

}

tryAgainButton.addEventListener('click', newGame)

function newGame(){
    humanScore=0
    computerScore=0
    round=0
    humanChoiceDisplay.textContent = ""
    computerChoiceDisplay.textContent = ''
    result.textContent = ''
    over.textContent = ''
    finalScore.textContent = ''
    reason.textContent = ''

    
    humanScoreDisplay.textContent = "0"
    computerScoreDisplay.textContent = '0'
    roundNumber.textContent = "0"
    

    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false
    tryAgainButton.disabled = true
    setTimeout(() => {  // when pressing enter the browser continues processing the enter key and says "the rock button is focused, so i'll click it" which calls the rockButton and in the same time pressing enter would do two things: first reset all the game dashboard and then the browser will click the focused button because there is a builtin browser behavior which is pressing enter or space activates (clicks) the button so to disable it you will need to delay it until the current event finishes 
        rockButton.focus();
    }, 0);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (humanScore === winningScore || computerScore === winningScore)) {newGame()}})

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const randomBtn = document.querySelector('#random-btn');
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');
const handsPicked = document.querySelector('#hands-picked');
const gameResult = document.querySelector('#game-result');


let userScore = 0;
let computerScore = 0;
const winningScore = 5;
gameResult.textContent = `First to get ${winningScore} points, wins the game!`

//generate a hand at random
const handChoice = ["rock", "paper", "scissors"];
const getRndHand = function () {
    return handChoice[Math.floor(Math.random() * 3)];;
}

//computer's hand is generated at random
const getCompHand = () => getRndHand();

//when user clicks a button
rockBtn.addEventListener('click', () => resolveRound("rock", getCompHand()));
paperBtn.addEventListener('click', () => resolveRound("paper", getCompHand()));
scissorsBtn.addEventListener('click', () => resolveRound("scissors", getCompHand()));
randomBtn.addEventListener('click', () => resolveRound(getRndHand(), getCompHand()));


//resolve a single round//
function resolveRound(userHand, compHand) {

    if (userScore === winningScore || computerScore === winningScore) {
        if (userScore > computerScore) {
            gameResult.textContent = "You win the match!";
        } else gameResult.textContent = "You lose the match!";

    } else {

        handsPicked.textContent = `you picked ${userHand} against computer's ${compHand}`;

        if (userHand === compHand) {
            roundResult.textContent = "It's a draw!";

        } else if (userHand === "rock" && compHand === "paper") {
            computerScore++;
            computerScoreSpan.textContent = `${computerScore}`
            roundResult.textContent = "You lose!";

        } else if (userHand === "paper" && compHand === "scissors") {
            computerScore++;
            computerScoreSpan.textContent = `${computerScore}`
            roundResult.textContent = "You lose!";

        } else if (userHand === "scissors" && compHand === "rock") {
            computerScore++;
            computerScoreSpan.textContent = `${computerScore}`
            roundResult.textContent = "You lose!";

        } else {
            userScore++;
            userScoreSpan.textContent = `${userScore}`
            roundResult.textContent = "You win!";
        }
    }
}



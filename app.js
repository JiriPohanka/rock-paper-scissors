/*let userScore = document.getElementById("#user-score").innerHTML;
let computerScore = document.getElementById("#computer-score").innerHTML;
*/

let userScore = 0;
let computerScore = 0;


//there are 3 hands to choose from//
const handChoice = ["rock", "paper", "scissors"];

//user inputs their hand at prompt//
const getUserHand = function() {
    return window.prompt("Rock, paper or scissors?", getRndHand());
}

//generate a hand randomly//ý
const getRndHand = function() {
    return handChoice[Math.floor(Math.random()*3)];
}

//computer's hand is generated at random//
const getCompHand = () => getRndHand();
console.log(getCompHand())


//resolve a single round//
function resolveRound(userHand, compHand) { 
    console.log("UserHand:" + userHand + " and compHand:" + compHand)

    if (userHand === compHand) {
        console.log("It's a draw!");

    } else if (userHand === "rock" && compHand === "paper") {
        console.log("User loses");
         computerScore++;

    } else if (userHand === "paper" && compHand === "scissors") {
        console.log("User loses");
         computerScore++;

    } else if (userHand === "scissors" && compHand === "rock") {
        console.log("User loses");
        computerScore++;

    } else {
        console.log("User wins");
        userScore++;
    }

    console.log(`user score: ${userScore} : comp score: ${computerScore}`)
}


const runGame = function() {
    for (let i = 0; i <= 4; i++) {
    resolveRound(getUserHand(), getCompHand());

    }
}

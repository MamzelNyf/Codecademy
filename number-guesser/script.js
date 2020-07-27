let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// return a random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
//alert if humanGuess <0 or >9
const checkHumanGuess = (number) => {
    if (number > 9 || number < 0) {
        window.alert('Choose a number between 0 and 9');
    }
}
const getAbsoluteDistance = (x, y) => {
    Math.abs(x - y);
}
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    checkHumanGuess(humanGuess);
    // const humanDiff = Math.abs(secretTarget - humanGuess);
    // const computerDiff = Math.abs(secretTarget - computerGuess);
    // if humanDiff <= computerDiff {
    //   return true;
    // } else {
    //   return false
    // }
    // this is a shorthand for if/else with boolean values.
    return getAbsoluteDistance(secretTarget, humanGuess) <= getAbsoluteDistance(secretTarget, computerGuess);
}
// alert(compareGuesses());
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}
const advanceRound = () => currentRoundNumber++;
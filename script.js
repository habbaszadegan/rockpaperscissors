// Start a new Git repo for your project.
// Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). 
    // This game is going to be played completely from the console, 
    // so don’t worry about putting anything else in there.
// Your game is going to play against the computer, so begin with a function called getComputerChoice that 
    // will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make 
    // the computer’s play. Tip: use the console to make sure this is returning the expected output before 
    // moving to the next step!

// Generate a random number between 0 and 1 using the Math.random() function.
// Multiply the random number by 3.
// Find the floor of the result from step 2.
// Use the result from step 3 to determine the computer's choice:
// If the result is 0, the computer's choice is "rock".
// If the result is 1, the computer's choice is "paper".
// If the result is 2, the computer's choice is "scissors".

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() *3);

    switch (randomChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// console.log (getComputerChoice());

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
    // the playerSelection and computerSelection - and then return a string that declares the winner of the 
    // round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any 
    // other variation).
// Important note: you want to return the results of this function call, not console.log() them. 
    // You’re going to use what you return later on, so let’s test this function by using console.log 
    // to see the results:
let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();
console.log(promptInput);

function playRound(playerSelection, computerSelection) {
    // FIRST ALGORITHM: BROKEN
    // take player selection. R for rock, P for paper, S for scissors.
    // Bards suggestion: use an if statement to assign players choice into a new variable.
    // define the winning and losing scenarios from the players viewpoint in variables
    // create a variable to increment and store points won
    // use if statements to decide who gets a point and record that point

    // SECOND ALGORITHM: Incomplete?
    // take player input.
    // Bards suggestion: use an if statement to assign players choice into a new variable.
    // do the same with computer choice
    // assign winning and losing and tie situations to a new variable
    // use if statment to store and increment points and output winning and losing message

    // playerSelection = promptInput.charAt(0) + promptInput.slice(1);

    // if (playerSelection === "rock") {
    //     let pRock = "rock";
    // } else if (playerSelection === "paper") {
    //     let pPaper = "paper";
    // } else if (playerSelection === "scissors") {
    //     let cScissors = "scissors";
    // } else {
    //     return "Invalid input. Please choose Rock, Paper or Scissors";
    // }

    // if (computerSelection === "rock") {
    //     let cRock = "rock";
    // } else if (computerSelection === "paper") {
    //     let cPaper = "paper";
    // } else {
    //     let cScissors = "scissors";
    // }

    // let win = pRock && cScissors || pPaper && cRock || pScissors && cPaper;
    // let lose = pRock && cPaper || pPaper && cScissors || pScissors && cRock;
    // let tie = pRock == cRock || pPaper == cPaper || pScissors == cScissors;

    // if (win) {
    //     return `You win!`;
    // } else if (lose) {
    //     return `You lose :(`;
    // } else {
    //     return `It's a tie :O`;
    // }

    // THIRD ALGORITHM
    // Take user input.
    // use an if statement to see who won.

    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (
        playerSelection == "rock" && computerSelection == "paper" || 
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
    ) {
        return `You lose :( ${computerSelection} beats ${playerSelection}`
    } else if (
        playerSelection == "rock" && computerSelection == "rock" || 
        playerSelection == "paper" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "scissors"
    ){
        return "It's a tie :O"
    } else {
        return "Please input rock, paper, or scissors";
    }
    
    // define winning and losing and tie siutations in a variable
    // use if statement to increment score and output win message
    

    // let pRock = playerSelection = "Rock";
    // let pPaper = playerSelection = "Paper";
    // let pScissors = playerSelection = "Scissors";
    // let cRock = computerSelection = "Rock";
    // let cPaper = computerSelection = "Paper";
    // let cScissors = computerSelection = "Scissors";

    // Next I will create a variable containing a tie situation, and an if statement for winning and losing and ties
}

console.log(playRound(promptInput, getComputerChoice()));

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }
 
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game 
    // that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about 
    // loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
    // If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in 
    // the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return 
    // value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.
function game () {

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

    function firstRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();
        // console.log(promptInput);

        let pScore = 0;
        let cScore = 0;

        function playRound(playerSelection, computerSelection) {
            // THIRD ALGORITHM
            // Take user input.
            // use an if statement to see who won.

            if (playerSelection == "rock" && computerSelection == "scissors" || 
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "scissors" && computerSelection == "paper") {
                    pScore ++;
                    return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
            } else if (
                playerSelection == "rock" && computerSelection == "paper" || 
                playerSelection == "paper" && computerSelection == "scissors" ||
                playerSelection == "scissors" && computerSelection == "rock"
            ) {
                cScore++;
                return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
            } else if (
                playerSelection == "rock" && computerSelection == "rock" || 
                playerSelection == "paper" && computerSelection == "paper" ||
                playerSelection == "scissors" && computerSelection == "scissors"
            ){
                return "It's a tie :O";
            } else {
                return "Please input rock, paper, or scissors";
            }
        }

        console.log (playRound(promptInput, getComputerChoice()));
        console.log (pScore);
    }

    console.log (firstRound());
}

console.log (game());

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game 
    // that keeps score and reports a winner or loser at the end.
//Just call your playRound function 5 times in a row.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return 
    // value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.
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

    let pScore = 0;
    let cScore = 0;

    function firstRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        function playRound(playerSelection, computerSelection) {

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
    }

    console.log (firstRound());

    function secondRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        function playRound(playerSelection, computerSelection) {

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
    }

    console.log (secondRound());

    function thirdRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        function playRound(playerSelection, computerSelection) {

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
    }

    console.log (thirdRound());

    function fourthRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        function playRound(playerSelection, computerSelection) {

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
    }

    console.log (fourthRound());

    function fifthRound () {
        let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        function playRound(playerSelection, computerSelection) {

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
    }

    console.log (fifthRound());

    if (pScore > cScore) {
        console.log(`Player wins ${pScore} to ${cScore}! Woop Woop!`);
    } else if (pScore < cScore) {
        console.log(`Computer wins ${cScore} to ${pScore}. Womp Womp.`);
    } else {
        console.log(`It's a tie. Play again?`);
    }
}


console.log (game());
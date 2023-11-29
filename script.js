function game () {

    function getComputerChoice () {
        let randomChoice = Math.floor(Math.random() *3);

        switch (randomChoice) {
            case 0:
                return "Rock";
                break;
            case 1:
                return "Paper";
                break;
            case 2:
                return "Scissors";
                break;
        }
    }

    const buttons = document.querySelectorAll('.btn');

    const results = document.querySelector('#results');

    
    for (const button of buttons) {
        button.addEventListener('click', () => {
            const playerChoice = button.textContent; // Capture player's choice
            playRound(playerChoice, getComputerChoice());
        });
    }

    let pScore = 0;
    let cScore = 0;

    function playRound(playerSelection, computerSelection) {
        console.log(playerSelection, computerSelection);

        if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
            playerSelection == 'Paper' && computerSelection == 'Rock' ||
            playerSelection == 'Scissors' && computerSelection == 'Paper') {
                pScore++;
                results.textContent = `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
        } else if (
            playerSelection == 'Rock' && computerSelection == 'Paper' || 
            playerSelection == 'Paper' && computerSelection == 'Scissors' ||
            playerSelection == 'Scissors' && computerSelection == 'Rock'
        ) {
            cScore++;
            results.textContent = `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
        } else if (
            playerSelection == 'Rock' && computerSelection == 'Rock' || 
            playerSelection == 'Paper' && computerSelection == 'Paper' ||
            playerSelection == 'Scissors' && computerSelection == 'Scissors'
        ) {
            results.textContent = "It's a tie :O";
        }

        if (pScore == 5) {
            results.textContent = `Player wins ${pScore} to ${cScore}! Woop Woop!`;
            pScore = 0;
            cScore = 0;
        } else if (cScore == 5) {
            results.textContent = `Computer wins ${cScore} to ${pScore}. Womp Womp.`;
            pScore = 0;
            cScore = 0;
        }
    }


    
}


console.log(game());


// OUTDATED CODE



    // console.log (playRound(button, getComputerChoice()));

    
    // function firstRound () {
    //     let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

        // function playRound(playerSelection, computerSelection) {

        //     if (playerSelection == "rock" && computerSelection == "scissors" || 
        //         playerSelection == "paper" && computerSelection == "rock" ||
        //         playerSelection == "scissors" && computerSelection == "paper") {
        //             pScore ++;
        //             return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
        //     } else if (
        //         playerSelection == "rock" && computerSelection == "paper" || 
        //         playerSelection == "paper" && computerSelection == "scissors" ||
        //         playerSelection == "scissors" && computerSelection == "rock"
        //     ) {
        //         cScore++;
        //         return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
        //     } else if (
        //         playerSelection == "rock" && computerSelection == "rock" || 
        //         playerSelection == "paper" && computerSelection == "paper" ||
        //         playerSelection == "scissors" && computerSelection == "scissors"
        //     ){
        //         return "It's a tie :O";
        //     } else {
        //         return "Please input rock, paper, or scissors";
        //     }
        // }

        // console.log (playRound(promptInput, getComputerChoice()));
    // }

    // console.log (firstRound());

    // function secondRound () {
    //     let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     function playRound(playerSelection, computerSelection) {

    //         if (playerSelection == "rock" && computerSelection == "scissors" || 
    //             playerSelection == "paper" && computerSelection == "rock" ||
    //             playerSelection == "scissors" && computerSelection == "paper") {
    //                 pScore ++;
    //                 return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "paper" || 
    //             playerSelection == "paper" && computerSelection == "scissors" ||
    //             playerSelection == "scissors" && computerSelection == "rock"
    //         ) {
    //             cScore++;
    //             return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "rock" || 
    //             playerSelection == "paper" && computerSelection == "paper" ||
    //             playerSelection == "scissors" && computerSelection == "scissors"
    //         ){
    //             return "It's a tie :O";
    //         } else {
    //             return "Please input rock, paper, or scissors";
    //         }
    //     }

    //     console.log (playRound(promptInput, getComputerChoice()));
    // }

    // console.log (secondRound());

    // function thirdRound () {
    //     let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     function playRound(playerSelection, computerSelection) {

    //         if (playerSelection == "rock" && computerSelection == "scissors" || 
    //             playerSelection == "paper" && computerSelection == "rock" ||
    //             playerSelection == "scissors" && computerSelection == "paper") {
    //                 pScore ++;
    //                 return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "paper" || 
    //             playerSelection == "paper" && computerSelection == "scissors" ||
    //             playerSelection == "scissors" && computerSelection == "rock"
    //         ) {
    //             cScore++;
    //             return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "rock" || 
    //             playerSelection == "paper" && computerSelection == "paper" ||
    //             playerSelection == "scissors" && computerSelection == "scissors"
    //         ){
    //             return "It's a tie :O";
    //         } else {
    //             return "Please input rock, paper, or scissors";
    //         }
    //     }

    //     console.log (playRound(promptInput, getComputerChoice()));
    // }

    // console.log (thirdRound());

    // function fourthRound () {
    //     let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     function playRound(playerSelection, computerSelection) {

    //         if (playerSelection == "rock" && computerSelection == "scissors" || 
    //             playerSelection == "paper" && computerSelection == "rock" ||
    //             playerSelection == "scissors" && computerSelection == "paper") {
    //                 pScore ++;
    //                 return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "paper" || 
    //             playerSelection == "paper" && computerSelection == "scissors" ||
    //             playerSelection == "scissors" && computerSelection == "rock"
    //         ) {
    //             cScore++;
    //             return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "rock" || 
    //             playerSelection == "paper" && computerSelection == "paper" ||
    //             playerSelection == "scissors" && computerSelection == "scissors"
    //         ){
    //             return "It's a tie :O";
    //         } else {
    //             return "Please input rock, paper, or scissors";
    //         }
    //     }

    //     console.log (playRound(promptInput, getComputerChoice()));
    // }

    // console.log (fourthRound());

    // function fifthRound () {
    //     let promptInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     function playRound(playerSelection, computerSelection) {

    //         if (playerSelection == "rock" && computerSelection == "scissors" || 
    //             playerSelection == "paper" && computerSelection == "rock" ||
    //             playerSelection == "scissors" && computerSelection == "paper") {
    //                 pScore ++;
    //                 return `You win! ${playerSelection} beats ${computerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "paper" || 
    //             playerSelection == "paper" && computerSelection == "scissors" ||
    //             playerSelection == "scissors" && computerSelection == "rock"
    //         ) {
    //             cScore++;
    //             return `You lose :( ${computerSelection} beats ${playerSelection}. Score: Player ${pScore}, Computer ${cScore}`;
    //         } else if (
    //             playerSelection == "rock" && computerSelection == "rock" || 
    //             playerSelection == "paper" && computerSelection == "paper" ||
    //             playerSelection == "scissors" && computerSelection == "scissors"
    //         ){
    //             return "It's a tie :O";
    //         } else {
    //             return "Please input rock, paper, or scissors";
    //         }
    //     }

    //     console.log (playRound(promptInput, getComputerChoice()));
    // }

    // console.log (fifthRound());

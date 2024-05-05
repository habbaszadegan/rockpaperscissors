function game () {

    function getComputerChoice () {
        let randomChoice = Math.floor(Math.random() *3);

        switch (randomChoice) {
            case 0:
                return "Rock";
                break;
            case 1:z
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

// From the second time I did this assignment:

// function getComputerChoice() {
    
//     let randomChoice = Math.floor(Math.random() * 3);

//     switch (randomChoice) {
//         case 0:
//             return 'rock';
//         case 1:
//             return 'paper';
//         case 2:
//             return 'scissors';
//     }
// }

// function getPlayerChoice () {

//     let playerChoice = prompt('Rock, Paper, or Scissors?', '').toLowerCase();

//     while (playerChoice != 'rock' && playerChoice !='paper' && playerChoice != 'scissors') {
//         playerChoice = prompt('Wrong entry. Try again');
//     }

//     return playerChoice;
// }

// function playGame() {

//     let playerScore = 0;
//     let computerScore = 0;

//     function playRound (humanChoice, computerChoice) {

//         if (humanChoice == 'rock' && computerChoice == 'scissors' ||
//             humanChoice == 'scissors' && computerChoice == 'paper' ||
//             humanChoice == 'paper' && computerChoice == 'rock') {
//                 playerScore++;
//                 return `Player wins! Player score: ${playerScore} Computer score: ${computerScore}`;
//         } else if (computerChoice == 'rock' && humanChoice == 'scissors' ||
//             computerChoice == 'scissors' && humanChoice == 'paper' ||
//             computerChoice == 'paper' && humanChoice == 'rock') {
//                 computerScore++;
//                 return `Computer wins! Player score: ${playerScore} Computer score: ${computerScore}`;
//         } else {
//             return `It's a tie! Player score: ${playerScore} Computer score: ${computerScore}`;
//         }
//     }

//     while (playerScore != 5 && computerScore != 5) {    // Repeatedly plays the game until 5 wins occur
//         console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     }
// }

// playGame();




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

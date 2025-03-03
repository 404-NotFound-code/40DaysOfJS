/*
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function startGame(){
    const userChoice = prompt("Enter your choice(rock, paper, scissor): ");
    const convertLower1 = userChoice.toLowerCase();

    let computerChoice;
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            computerChoice = 'rock';
            break;
        
        case 1:
            computerChoice = 'paper';
            break;
        
        case 2:
            computerChoice = 'scissor';
            break;
        default:
            computerChoice = 'Invalid';
    }

    console.log("User's choice: ", userChoice);
    console.log("Computer choice: ", computerChoice);
    
    if (userChoice === computerChoice ) {
        console.log("It's Tie!!!");
    } else if ((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && userChoice === 'paper')){
        console.log("You Won!!!");
    } else{
        console.log("You Lose!!!");
    }

    const playAgain = prompt('Do you want to play again? (yes/no): ');
    const convertLower2 = playAgain.toLowerCase();

    switch (playAgain){
        case 'yes':
            startGame();
            break;
        case 'no':
            console.log('Thanks for playing');
            break;
    }
}

startGame();



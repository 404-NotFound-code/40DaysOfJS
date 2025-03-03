// Define guessNumber() function
function guessNumber() {
    let secretNum = Math.floor((Math.random() * 10) + 1);

    let userInput = 0;
    let attempt = 0;
    
    while (secretNum !== userInput){
        let userInput = parseInt(prompt('To play the game enter a number between 1 to 10: '));   

        if (userInput === secretNum){
            attempt += 1;
            alert(`Your guess is CORRECT!!! in ${attempt} attempts`);
            
            const playAgain = prompt('Do you want to play again (y/n)...').toLowerCase();

            if (playAgain === 'y') {
                guessNumber();
            } else if (playAgain === 'n') {
                break;
            }
        } else if (userInput > secretNum){
            alert("Guess lower ⬇️");
            attempt += 1;
        } else if (userInput < secretNum){
            alert("Guess upper ⬆️");
            attempt += 1; 
        } 
            
    }  
        
}

guessNumber();



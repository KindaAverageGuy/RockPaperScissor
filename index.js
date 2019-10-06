// Generates the computers answer used in the game function for loop
let computerPlay = function(){
    return (Math.floor(Math.random() * 3) >= 2) ? 'rock' :
        (Math.floor(Math.random() * 3) >= 1) ? 'scissor' : 'paper';   
}

// function is for tracking the Player and Computer wins and generating a response with the results.
 let game =function() { 
    
    let playerWins = 0;
    let computerWins = 0;

    for (round = 1; round <6 ; round++){
        console.log(`${playRound(prompt('Rock,Paper or is it Scissor?'),computerPlay())}`)
        console.log(`ROUND ${round}! ${5-round} to go!`)
        
    }
    console.log(`Player Wins: ${playerWins} Computer Wins: ${computerWins}`)

    // contains the responses and answers for the game results.
    function playRound(playerSelection, computerSelection) {
        let rPlayerSelection = playerSelection.toLowerCase();
     
        if (rPlayerSelection === 'rock')
            if (computerSelection === 'rock'){
                return 'Draw! No points!';
            } else if  (computerSelection === 'paper') {
                computerWins++
                return 'You lose! Paper Beats Rock!';
            } else {
                playerWins++
                return 'You Win! Rock beats scissors!';
            }

        else if (rPlayerSelection === 'paper')
            if (computerSelection === 'rock') {
                playerWins++
                return 'You Win! Paper beats rock!';
            } else if (computerSelection === 'paper') {
                return 'Draw! No points!';
            } else {
                computerWins++
                return 'You lose! Scissors beats paper!';
            }

        else (rPlayerSelection === 'scissor')
            if (computerSelection === 'rock') {
                computerWins++
                return 'You lose! Rock beats scissors!';
            } else if (computerSelection === 'paper') {
                playerWins++
                return 'You win! Scissors beats paper!';
            } else {
                return 'Draw! No points!';
            }
        }
}
// Starts it all
game();
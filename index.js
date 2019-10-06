// Function will be called by computer
let computerPlay = function(){
    return (Math.floor(Math.random() * 3) >= 2) ? 'rock' :
        (Math.floor(Math.random() * 3) >= 1) ? 'scissor' : 'paper';   
}

// This function will compare and declare the winner using other functions
let result = function(playerSelection, computerSelection) {
    let revisedPlayerSelection = playerSelection.toLowerCase();
    let revisedNumericSelection = ''

    if (revisedPlayerSelection === 'rock')
        revisedNumericSelection = 3;
    else if (revisedPlayerSelection === 'scissor')
        revisedNumericSelection = 2;
    else
        revisedNumericSelection = 1;


return revisedNumericSelection;
}

console.log(result('pApEr', computerPlay()));
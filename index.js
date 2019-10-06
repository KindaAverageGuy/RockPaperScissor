let computerPlay = function(){
    return (Math.floor(Math.random() * 3) >= 2) ? "Rock" :
        (Math.floor(Math.random() * 3) >= 1) ? "Scissor" : "Paper";   
}
console.log(computerPlay());

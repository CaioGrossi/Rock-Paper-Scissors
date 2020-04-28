function computerPlay () {
    let play = Math.random()

    if (play <= 0.33)
        return "rock"
    if (play > 0.33 && play <= 0.66)
        return "paper"
    else
        return "scissors"
}


function playRound (playerSelection, computerSelection) {

    let div = document.querySelector("#result");
    let winner;

    if (playerSelection == computerSelection) {
        div.textContent = "It's a tie";
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
    }
    
    else {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
    }

    updateScore(winner);
}

function resetGame () {

    let score = document.querySelectorAll("#placar span");
    let result = document.querySelector("#result");

    score.forEach(score => score.textContent = 0);
    result.textContent = "Play!";
}


function updateScore (winner) {
    
    let score = document.querySelector(`#${winner}`)
    score.textContent++;
}

function game () {
    
    let botoes = document.querySelectorAll("#botoes button");

    botoes.forEach(botao => botao.addEventListener("click", event => {

        if (event.target.id == "reset")
            resetGame()
        else
            playRound(event.target.id, computerPlay());
    }))
}

game()
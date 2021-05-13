let playerSelection;
let computerSelection;
let msg = document.querySelector('.log-msg')
let userScore = 0;
let computerScore = 0;

let user = document.getElementById("user");
let computer = document.getElementById("computer");

let userScoreCount = document.getElementById("user-score")
let computerScoreCount = document.getElementById("computer-score")
let scoreBoard = document.querySelector('.scoreboard')
const key = document.querySelector('.key');
const log = document.querySelector('.log');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function playRound(playerSelection) {
    computerSelection = computerPlay();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        draw();
        msg.innerText = 'You are tied';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        msg.innerText = 'Paper covers rock, You Lose';
        lose();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        win();
        msg.innerText = 'Rock beats scissors, You Win!';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        msg.innerText = 'Papper covers rock, You win!';
        win();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        msg.innerText = 'Scissors cut paper, You Lose.'
        lose();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        msg.innerText = 'Papper covers rock, You win!'
        win();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        msg.innerText = 'Rock beats scissors, You Lose'
        lose();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        msg.innerText = 'Scissors cut paper, You win!'
        win();
    }

}

function playerPlay() {
    rock.addEventListener('click', function() {
        playRound(rock.id);

    });
    paper.addEventListener('click', function() {
        playRound(paper.id);


    });
    scissors.addEventListener('click', function() {
        playRound(scissors.id);

    });
}
playerPlay();

function computerPlay() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = option[Math.floor(Math.random() * option.length)];
    return choice;
}

function win() {
    userScore = ++userScore;
    userScoreCount.innerText = `${userScore}`
    user.classList.add('win-glow');
    user.addEventListener('transitionend', removeTransition);
}

function lose() {
    computerScore = ++computerScore;
    computerScoreCount.innerText = `${computerScore}`
    computer.classList.add('win-glow');
    computer.addEventListener('transitionend', removeTransition);
    if (computerScore === 5) {
        declareWinner();
    }
}

function draw() {

}

function declareWinner() {
    if (userScore > computerScore) {
        msg.innerText = 'You Win!'
    } else {
        msg.innerText = 'You Lose.'

    }

}

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('win-glow');
}


/* let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log('You are tied');
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log('Paper covers rock, You Lose')
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log('Rock beats scissors, You Win!')
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log('Papper covers rock, You win!')
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log('Scissors cut paper, You Lose.')
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log('Papper covers rock, You win!')
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log('Rock beats scissors, You Lose')
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log('Scissors cut paper, You win!')
    }
}
// 1 game
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

//player input.


//computer selection.
function computerPlay() {
    let option = ['rock', 'paper', 'scissors'];
    let choice = option[Math.floor(Math.random() * option.length)];
    return choice;
} */
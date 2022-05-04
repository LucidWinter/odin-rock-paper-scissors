//keeps tracks of rounds won
let playerWin = 0;
let computerWin = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You tied! You both selected ${playerSelection}`;
    } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissor')) {

        playerWin++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerWin++;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function checkWinner() {
    if (playerWin > computerWin) {
        return 'You won against the computer';
    } else {
        return 'You lost to the computer';
    }
}

function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    result.innerText = '';
    result.append(playRound(playerSelection, computerSelection));

    playerScore.innerText = '';
    playerScore.append(playerWin);

    computerScore.innerText = '';
    computerScore.append(computerWin);

    if (playerWin === 5 || computerWin === 5) {
        result.innerText = '';
        result.append(checkWinner());
        buttons.forEach(button => button.removeEventListener('click', game));
    }
}

buttons.forEach(button => button.addEventListener('click', game));




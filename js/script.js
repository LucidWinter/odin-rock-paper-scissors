function userPlay() {
    let userChoice = prompt('Please enter in Rock, Paper or Scissor')

    return userChoice.toLowerCase()
}

function computerPlay() {
    let rand = Math.floor(Math.random() * 3)
    let computerChoice

    switch (rand) {
        case 0:
            return computerChoice = 'rock'
        case 1:
            return computerChoice = 'paper'
        case 2:
            return computerChoice = 'scissor'
    }
}

function playGame(playerSelection, computerSelection) {
    let winner

    if (playerSelection === computerSelection) {
        return winner = `You tied! You both selected ${playerSelection}`
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {

        return winner = `You lost! ${computerSelection} beats ${playerSelection}`
    } else {
        return winner = `You win! ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playGame(playerSelection, computerSelection))


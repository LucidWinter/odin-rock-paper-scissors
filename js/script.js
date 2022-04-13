function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3) + 1
    let computerChoice = ''

    if (randomSelection === 1) {
        return computerChoice = 'rock'
    } else if (randomSelection === 2) {
        return computerChoice = 'paper'
    } else {
        return computerChoice = 'scissor'
    }
}

console.log(computerPlay());
'use strict'
// console.log("Hello, World!");
// alert("Hello, World!");

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  const i = Math.trunc(Math.random() * 3)

  const choices = ['rock', 'paper', 'scissors']

  return choices[i]
}

const playRound = function (playerChoice, computerChoice) {
  if (
    (computerChoice === 'rock' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'scissors') ||
    (computerChoice === 'scissors' && playerChoice === 'rock')
  ) {
    playerScore += 1
    return `You win this round. Your score is ${playerScore}, mine is ${computerScore}`
  } else if (playerChoice === computerChoice) {
    return `It's a draw! Your score is ${playerScore}, mine is ${computerScore} `
  } else {
    computerScore += 1
    return `You lose this round. Your score is ${playerScore}, mine is ${computerScore}`
  }
}

for (let round = 1; round <= 5; round++) {
  const playerChoice = prompt(
    `Round ${round} Choose: rock, paper, or scissors`
  ).toLowerCase()
  const computerChoice = getComputerChoice()

  console.log(`Round: ${round}`)
  console.log(`You chose ${playerChoice}`)
  console.log(`Computer chose ${computerChoice}`)
  console.log(playRound(playerChoice, computerChoice))

  console.log('-----------------------')
}

if (playerScore > computerScore) {
  console.log(
    `You win! You had ${playerScore} points. I had ${computerScore} points`
  )
} else if (playerScore < computerScore) {
  console.log(
    `You lose! You had ${playerScore} points. I had ${computerScore} points`
  )
} else {
  console.log(`It was a draw. Wanna go again?`)
}

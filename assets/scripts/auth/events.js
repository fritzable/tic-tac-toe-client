
// Store spaces as an array of empty strings
const gameBoard = ['', '', '', '', '', '', '', '', '']
let playerTurnIs = 'X'
// Function that takes an array index and replaces empty string with string of X
const placeX = squareIndex => {
  // If space is empty
  if (gameBoard[squareIndex] === '') {
  // Write X in space
    gameBoard[squareIndex] = 'X'
    playerTurnIs = 'O'
  }
}

// Function that takes an array index and replaces empty string with string of O
const placeO = squareIndex => {
  // If space is empty
  if (gameBoard[squareIndex] === '') {
  // Write O in space
    gameBoard[squareIndex] = 'O'
    playerTurnIs = 'X'
  }
}

// Function that examines the board for a win condition and prints which player won
// const isGameWon = gameBoard =>

// Function that examines the board for a draw condition and prints draw
// const isGameDraw = gameBoard =>

// Function that runs on click, and places a mark in a square
const userClicked = event => {
  console.log(event.target)
  const index = event.target.id
  if (playerTurnIs === 'X') {
    placeX(index)
  } else if (playerTurnIs === 'O') {
    placeO(index)
  }
  console.log(gameBoard)
  console.log(playerTurnIs)
}

module.exports = {
  userClicked
}

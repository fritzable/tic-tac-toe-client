
// Store spaces as an array of empty strings
const gameBoard = ['', '', '', '', '', '', '', '', '']

// Function that takes an array index and replaces empty string with string of X
const placeX = squareIndex => {
  // If space is empty
  if (gameBoard[squareIndex] === '') {
  // Write X in space
    gameBoard[squareIndex] = 'X'
  }
}

// Function that takes an array index and replaces empty string with string of O
// const placeO = squareIndex =>

// Function that examines the board for a win condition and prints which player won
// const isGameWon = gameBoard =>

// Function that examines the board for a draw condition and prints draw
// const isGameDraw = gameBoard =>

// Function that runs on click, and places a mark in a square
// const userClicked = event => {
//  console.log('clicked')
// }

const userClicked0 = event => {
  console.log('clicked')
  const index = 0
  placeX(index)
  console.log(gameBoard)
}

module.exports = {
//  userClicked,
  userClicked0
}

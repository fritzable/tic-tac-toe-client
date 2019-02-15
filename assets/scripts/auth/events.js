// const ui = require('./auth/ui.js')

// Store spaces as an array of empty strings
const gameBoard = ['', '', '', '', '', '', '', '', '']

// Store turn as a variable
let playerTurnIs = 'X'

// Function to display current player turn
const currentPlayer = () => {
  $('#user-message').text(`Player ${playerTurnIs}, it is your turn.`)
  $('.square').trigger('reset')
}

// Function that takes an array index and replaces empty string with string of X
const placeX = squareIndex => {
  // If space is empty
  if (gameBoard[squareIndex] === '') {
  // Write X in space
    gameBoard[squareIndex] = 'X'
    playerTurnIs = 'O'
    currentPlayer()
  }
}

// Function that takes an array index and replaces empty string with string of O
const placeO = squareIndex => {
  // If space is empty
  if (gameBoard[squareIndex] === '') {
  // Write O in space
    gameBoard[squareIndex] = 'O'
    playerTurnIs = 'X'
    currentPlayer()
  }
}

// Function to check for three in a row
const threeInRowX = (gameBoard) => {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  ((gameBoard[3] === 'X') && (gameBoard[4] === 'X') && (gameBoard[5] === 'X')) ||
  ((gameBoard[6] === 'X') && (gameBoard[7] === 'X') && (gameBoard[8] === 'X'))) {
    return true
  }
}

const threeInRowO = (gameBoard) => {
  if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    return true
  }
}

// Function to check for three in a column
const threeInColumnX = (gameBoard) => {
  if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    return true
  }
}

const threeInColumnO = (gameBoard) => {
  if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    return true
  }
}

// Function to check for three in diagonal
const threeInDiagonalO = (gameBoard) => {
  if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[4] === 'O' && gameBoard[2] === 'O')) {
    return true
  }
}

const threeInDiagonalX = (gameBoard) => {
  if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[4] === 'X' && gameBoard[2] === 'X')) {
    return true
  }
}

// Function that examines the board for a win condition and prints which player won
const isGameWon = (gameBoard) => {
  if (threeInRowX(gameBoard) || threeInRowO(gameBoard) || threeInColumnX(gameBoard) ||
    threeInColumnO(gameBoard) || threeInDiagonalO(gameBoard) || threeInDiagonalX(gameBoard)) {
    console.log('win')
  }
}

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
  console.log(threeInRowX)
  isGameWon(gameBoard)
}

module.exports = {
  userClicked,
  playerTurnIs,
  currentPlayer
}

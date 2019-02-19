const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

// Store spaces as an array of empty strings
let gameBoard = ['', '', '', '', '', '', '', '', '']

// Store turn as a variable
let playerTurnIs = 'X'

// Function to display current player turn
const currentPlayer = () => {
  $('#game-message').text(`Player ${playerTurnIs}, it is your turn.`)
}

// Function that takes an array index and replaces empty string with string of X
const placeX = squareIndex => {
  // If space is not empty
  if (gameBoard[squareIndex] !== '') {
    $('#game-message').text(`That spot's taken; try another.`)
  } else if (gameBoard[squareIndex] === '') {
  // Write X in space
    gameBoard[squareIndex] = 'X'
    $(event.target).text(`${playerTurnIs}`)
    playerTurnIs = 'O'
    console.log('event.target is ' + event.target)
    currentPlayer()
    store.game.cells[squareIndex] = 'X'
    api.updateGame(event.target)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

// Function that takes an array index and replaces empty string with string of O
const placeO = squareIndex => {
  // If space is not empty
  if (gameBoard[squareIndex] !== '') {
  // Display message that move is invalid
    $('#game-message').text(`That spot's taken; try another.`)
    console.log('tried to place an O over a taken spot')
  } else if (gameBoard[squareIndex] === '') {
  // Write O in space
    gameBoard[squareIndex] = 'O'
    $(event.target).text(`${playerTurnIs}`)
    playerTurnIs = 'X'
    currentPlayer()
    store.game.cells[squareIndex] = 'O'
    api.updateGame(event.target)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
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
  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    return true
  }
}

const threeInColumnO = (gameBoard) => {
  if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
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

// Function that examines the board for a win condition and prints game over.
const isGameWon = (gameBoard) => {
  if (threeInRowX(gameBoard) || threeInRowO(gameBoard) ||
    threeInColumnX(gameBoard) || threeInColumnO(gameBoard) ||
    threeInDiagonalO(gameBoard) || threeInDiagonalX(gameBoard)) {
    $('#game-message').text(`Winner. Game Over.`)
    store.game.over = true
    // Disable further clicking.
    $('.square').off('click', userClicked)
    // Show new game button
    $('#new-game-button').show()
    api.updateGame(event.target)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

// Function that examines for a draw condition and prints draw.
const isGameDraw = gameBoard => {
  if ((!threeInRowX(gameBoard) && !threeInRowO(gameBoard) &&
    !threeInColumnX(gameBoard) && !threeInColumnO(gameBoard) &&
    !threeInDiagonalO(gameBoard) && !threeInDiagonalX(gameBoard)) &&
    (gameBoard.every(space => space !== ''))) {
    $('#game-message').text(`Draw. Game Over.`)
    // Disable further clicking.
    store.game.over = true
    $('.square').off('click', userClicked)
    // Show new game button
    $('#new-game-button').show()
    api.updateGame(event.target)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

// Function that resets game board on new game click
const newGame = () => {
  event.preventDefault()
  playerTurnIs = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  store.game.cells = ['', '', '', '', '', '', '', '', '']
  $('.square').text('[]')
  $('.row').show()
  $('#user-message').show()
  $('#game-message').show()
  currentPlayer()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  $('.square').on('click', userClicked)
  console.log(gameBoard)
}

// Function that runs GET request for list of games
const getGames = () => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}
// Function that runs on click, and places a mark in a square
const userClicked = event => {
  $('#user-message').text('')
  console.log('player turn is ' + playerTurnIs)
  const index = event.target.id
  if (playerTurnIs === 'X') {
    placeX(index)
  } else if (playerTurnIs === 'O') {
    placeO(index)
  }
  console.log(gameBoard)
  console.log(playerTurnIs)
  isGameWon(gameBoard)
  isGameDraw(gameBoard)
}

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)
  $('#game-message').show()
  $('#game-message').text(`Player ${playerTurnIs}, it is your turn.`)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  console.log('form', form)

  const formData = getFormFields(form)
  console.log('formData', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  userClicked,
  playerTurnIs,
  currentPlayer,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  newGame,
  getGames
}

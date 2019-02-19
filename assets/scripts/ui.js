'use strict'

const store = require('./store.js')
const api = require('./api.js')

const signUpSuccess = (responseData) => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign up')
}

const signInSuccess = (responseData) => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed in')
  $('.row').show()
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#game-message').show()
  $('#game-message').text(`Player X, it is your turn.`)
  // save the token
  store.user = responseData.user
  $('form').trigger('reset')
  api.createGame()
    .then(createGameSuccess)
    .catch(createGameFailure)
}

const signInFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign in')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
  $('#game-message').hide()
  $('.row').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = () => {
  $('#user-message').text('Error on sign out')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').text('Error on change password')
}

const createGameSuccess = (responseData) => {
  store.game = responseData.game
}

const createGameFailure = () => {
  $('#user-message').text('Game failed to create')
}

const getGamesSuccess = (responseData) => {
  $('#user-message').text('Success. See below for games')
  $('#games-content').html('')
  responseData.games.forEach(game => {
    const gamesHtml = (`
    <h4>Game ID: ${game.id}</h4>
    <p>Game board: ${game.cells}</p>
    <p>Game over? ${game.over}</p>
    <br>
    `)
    $('#games-content').append(gamesHtml)
  })
}

const getGamesFailure = () => {
  $('#user-message').text('Could not get games')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure
}

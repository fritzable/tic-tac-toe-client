'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
const config = require('./config.js')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.row').hide()

  $('#new-game-button').hide()

  $('#user-message').hide()

  $('#game-message').hide()

  $('#change-password-form').hide()

  $('#sign-out-form').hide()

  $('.square').on('click', events.userClicked)

  $('#new-game-button').on('submit', events.newGame)

  events.currentPlayer()

  $('#sign-up-form').on('submit', events.onSignUp)

  $('#sign-in-form').on('submit', events.onSignIn)

  $('#change-password-form').on('submit', events.onChangePassword)

  $('#sign-out-form').on('submit', events.onSignOut)
})

module.exports = {

}

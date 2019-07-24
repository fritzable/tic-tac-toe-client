'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example' )

$(() => {
  $('.container').hide()

  $('#new-game-button').hide()

  $('#get-games-button').hide()

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

  $('#get-games-button').on('submit', events.getGames)
})

module.exports = {

}

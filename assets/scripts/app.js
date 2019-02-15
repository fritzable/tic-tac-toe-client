'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.square').on('click', events.userClicked)
  events.currentPlayer()
})

module.exports = {

}

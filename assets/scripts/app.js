'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.square-zero').on('click', events.userClicked0)
  $('.square-one').on('click', events.userClicked)
  $('.square-two').on('click', events.userClicked)
  $('.square-three').on('click', events.userClicked)
  $('.square-four').on('click', events.userClicked)
  $('.square-five').on('click', events.userClicked)
  $('.square-six').on('click', events.userClicked)
  $('.square-seven').on('click', events.userClicked)
  $('.square-eight').on('click', events.userClicked)
})

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
const config = require('./config.js')
const getFormFields = require('../../lib/get-form-fields.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.square').on('click', events.userClicked)
  events.currentPlayer()
  $('#sign-up-form').on('submit', event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    $.ajax({
      url: config.apiUrl + '/sign-up',
      method: 'POST',
      data: data
    })
  })
})

module.exports = {

}

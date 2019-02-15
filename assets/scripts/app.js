'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.square').on('click', events.userClicked)
  events.currentPlayer()

  // $('#0').on('click', function (event) {
  //   events.placeX()
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#1').on('click', function (event) {
  //   events.placeO()
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#2').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#3').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#4').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#5').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#6').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#7').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
  // $('#8').on('click', function (event) {
  //   $(event.target).text(`${events.playerTurnIs}`)
  // })
})

module.exports = {

}

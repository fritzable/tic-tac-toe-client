'use strict'

const store = require('./store.js')

const signUpSuccess = (responseData) => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in')
  // save the token
  store.user = responseData.user
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').text('Error on sign in')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

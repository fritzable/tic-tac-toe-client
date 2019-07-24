'use strict'
// config
let apiUrl
const apiUrls = {
  production: 'https://game-project-api.herokuapp.com/',
  development: 'https://game-project-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

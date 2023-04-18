import jwt_decode from 'jwt-decode'

export default {
  logMessage(message) {
    console.log('Message: ' + message)
    return
  },
  isTokenValid(jwt) {
    console.log('pre token decode')
    try {
      var jwtObj = jwt_decode(jwt)
    } catch (err) {
      console.log('JWT decode error')
      return false
    }
    console.log('post token decode')
    var currentTime = Date.now() / 1000
    if (currentTime > jwtObj.exp) {
      return false
    } else {
      return true
    }
  },
  getAuthTokens(authCode) {
    const getTokenURL = tokenURL + authCode;
    // Need to change this jquery to the new 'fetch()' function
    $.getJSON(getTokenURL, function (data) {
      console.log('Access token: \n' + data.access_token) // TODO: remove debug message
      console.log('Refresh token: \n' + data.refresh_token) // TODO: remove debug message
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)
      var accObj = jwt_decode(data.access_token)
      console.log('Username: \n' + accObj.user) // TODO: remove debug message
      localStorage.setItem('username', accObj.user)
      window.location.replace(homePath)
    }).fail(function () {
      console.log('getJSON failed for getting tokens')
    })
  },
}

// function getNumber() {
//   return 10
// }

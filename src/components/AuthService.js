import decode from 'jwt-decode';

export default class AuthService {
  // initialize important variables
  constructor(domain) {
    this.domain = domain || 'http://localhost:5000' // get api server domain
    this.fetch = this.fetch.bind(this) // react binding stuff
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(username, password) {
    // get token from api serving using fetch api
    return this.fetch(`$(this.domain)/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token)  // setting the token in localStorage
      return Promise.resolve(res)  
    })
  }

  loggedIn() {
    // check if there is saved token and it's still valid
    const token = this.getToken() // getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {  // checking if token expired
        return true;
      } else {
        return false;
      }
    }
    catch (error) {
        return false;
      }
    }

    setToken(idToken) {
      localStorage.getItem("id_token")
    }

    getToken() {
      // retrieve the user token from local storage
      return localStorage.getItem('id_token')
    }

    logout() {
      // clear user token and profile data from localstorage
        localStorage.removeItem('id_token')
    }

    getProfile() {
      // using jwt-decode npm package to decode the token
      return decode(this.getToken());
    }

    fetch(url, options) {
      // performs api calls sending the required authentication headers
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }

      // Setting Authorization header
      // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
      if (this.loggedIn()) {
          headers['Authorization'] = 'Bearer ' + this.getToken()
      }

      return fetch(url, {
          headers,
          ...options
      })
          .then(this._checkStatus)
          .then(response => response.json())  
    }

  _checkStatus(response) {
    // raises an error in case response sttus is not a succes
    if (response.status >= 200 && response.status < 300) { // success status lies between 200
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}

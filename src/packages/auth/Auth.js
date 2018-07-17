export default function (Vue) {
  Vue.auth = {

    // Set token and expiration returned from api

    setToken: (token, expiresIn) => {
      localStorage.setItem('token', token);
      localStorage.setItem('expiresIn', expiresIn);
    },

    // Get token stored in localStorage, return null if there is no token

    getToken: () => {
      let token = localStorage.getItem('token');
      let expiresIn = localStorage.getItem('expiresIn');

      if ( !token || !expiresIn )
        return null;

      if (Date.now() > parseInt(expiresIn)) {
        this.destroyToken();
        return null;
      } else {
        return token;
      }
    },

    // Remove token from localStorage

    destroyToken: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
    },

    // Check if a token was stored when a user logs in, if there is none return false
    // and don't authenticate the user

    isAuthenticated: () => {
      if (this.getToken())
        return true;
      else
        return false;
    }
  }

  // Create $auth property which returns the functions above
  // so we can access it as this.$auth.* to call the function to be used
  // e.g this.$auth.setToken()

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth;
      }
    }
  })
}

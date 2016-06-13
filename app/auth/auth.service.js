(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

  function authService($firebaseAuth, firebaseDataService) {
    var auth = $firebaseAuth(firebaseDataService.root);

    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail
    };

    return service;

    /////////////

    function register(user) {
      return auth.$createUser(user);
    }

    function login(user) {
      return auth.$authWithPassword(user);
    }

    function logout() {
      auth.$unauth();
    }

    function isLoggedIn() {
      return auth.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
  }
})();

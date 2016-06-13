(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

  function authService($firebaseAuth, firebaseDataService) {
    var auth = $firebaseAuth(firebaseDataService.root);

    var service = {
      register: register,
      login: login
    };

    return service;

    /////////////

    function register(user) {
      return auth.$createUser(user);
    }

    function login(user) {
      return auth.$authWithPassword(user);
    }
  }
})();

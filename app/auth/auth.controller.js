(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth', '$state', 'FIREBASE_URL', 'authService'];

  function AuthController($firebaseAuth, $state, FIREBASE_URL, authService) {
    var vm = this;
    var firebaseRef = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(firebaseRef);

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      return authService.login(user)
        .then(function(loggedInUser) {
          $state.go('mutantList')
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function logout() {
      auth.$unauth();
      $state.go('home');
    }
  }

})();

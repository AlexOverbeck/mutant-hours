(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };

    vm.error = null;
    vm.register = register;
    vm.login = login;

    function register(user) {
      return authService.register(user)
        .then(function() {
          return vm.login(user);
        })
        .then(function() {
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return authService.login(user)
        .then(function(loggedInUser) {
          $state.go('mutantList')
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
  }

})();

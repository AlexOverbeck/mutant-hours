(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth', '$state'];

  function AuthController($firebaseAuth, $state) {
    var vm = this;
    var firebaseRef = new Firebase('https://mutant-school.firebaseio.com/');
    var auth = $firebaseAuth(firebaseRef);

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    function register(user) {
      return auth.$createUser(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      return auth.$authWithPassword(user)
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

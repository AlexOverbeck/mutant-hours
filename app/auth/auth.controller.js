(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth'];

  function AuthController($firebaseAuth) {
    var vm = this;
    var firebaseRef = new Firebase('https://mutant-school.firebaseio.com/');
    var auth = $firebaseAuth(firebaseRef);

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;
    vm.login = login;

    function register(user) {
      return auth.$createUser(user)
        .then(function(user) {
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      return auth.$authWithPassword(user)
        .then(function(user) {
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

})();

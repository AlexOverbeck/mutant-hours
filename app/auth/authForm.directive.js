(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '=',
        formName: '@',
        submitAction: '&'
      }
    };
  }

  function AuthFormController() {
    var vm = this;
  }

})();

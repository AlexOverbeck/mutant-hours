(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .directive('xtMutantForm', xtMutantForm);

  function xtMutantForm() {
    return {
      templateUrl: 'app/mutantList/directives/mutantForm.html',
      restrict: 'E',
      controller: MutantFormController,
      controllerAs: 'vm',
      scope: {}
    };
  }

  MutantFormController.$inject = ['mutantService'];

  function MutantFormController(mutantService) {

  }
})();

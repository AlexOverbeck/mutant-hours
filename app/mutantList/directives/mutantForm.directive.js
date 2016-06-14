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
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      // don't have reference to this firebaseArray yet
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }
  }
})();

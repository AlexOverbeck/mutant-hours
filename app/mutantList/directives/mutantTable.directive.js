(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .directive('xtMutantTable', xtMutantTable);

  function xtMutantTable() {
    return {
      templateUrl: 'app/mutantList/directives/mutantTable.html',
      restrict: 'E',
      bindToController: true,
      controller: MutantTableController,
      controllerAs: 'vm',
      scope: {
        mutants: '='
      }
    };
  }

  MutantTableController.$inject = ['textMessageService'];

  function MutantTableController(textMessageService) {
    var vm = this;

    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
    vm.toggleComplete = toggleComplete;

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }

    function toggleComplete(mutant){
      vm.mutants.$save(mutant);
    }
  }

})();

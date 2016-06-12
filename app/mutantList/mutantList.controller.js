(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'textMessageService'];

  function MutantListController(mutantService, textMessageService) {
    var vm = this;

    vm.mutants = mutantService.mutants;
    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
    vm.toggleComplete = toggleComplete;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }

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

(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'textMessageService', 'user'];

  function MutantListController(mutantService, textMessageService, user) {
    var vm = this;

    vm.mutants = mutantService.mutantsByUser(user.uid);
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

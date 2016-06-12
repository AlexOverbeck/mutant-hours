(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['firebaseDataService', 'mutantService'];

  function MutantListController(firebaseDataService, mutantService) {
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
      var newText = {
        name: mutant.name,
        phoneNumber: mutant.phone,
        topic: mutant.topic
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }

    function toggleComplete(mutant){
      vm.mutants.$save(mutant);
    }
  }

})();

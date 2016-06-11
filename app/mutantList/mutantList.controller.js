(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['$firebaseArray'];

  function MutantListController($firebaseArray) {
    var vm = this;

    var fireMutants = new Firebase('https://mutant-school.firebaseio.com/mutants');
    var fireTexts = new Firebase('https://mutant-school.firebaseio.com/texts');

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.complete = false;
      this.notified = false;
    }

    vm.mutants = $firebaseArray(fireMutants);
    vm.addMutant = addMutant;
    vm.newMutant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
    vm.toggleComplete = toggleComplete;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new Mutant();
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
      fireTexts.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }

    function toggleComplete(mutant){
      vm.mutants.$save(mutant);
    }
  }

})();

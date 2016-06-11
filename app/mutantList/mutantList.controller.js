(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['$firebaseArray'];

  function MutantListController($firebaseArray) {
    var vm = this;

    var fireMutants = new Firebase('https://mutant-school.firebaseio.com/mutants');

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

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new Mutant();
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }
  }

})();

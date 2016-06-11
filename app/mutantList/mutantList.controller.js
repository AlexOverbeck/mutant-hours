(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  function MutantListController() {
    var vm = this;

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.complete = false;
      this.notified = false;
    }

    vm.mutants = ['cyclops', 'rogue', 'wolverine'];
    vm.addMutant = addMutant;
    vm.newMutant = new Mutant();

    function addMutant() {
      vm.mutants.push(vm.newMutant);
      vm.newMutant = new Mutant();
    }
  }

})();

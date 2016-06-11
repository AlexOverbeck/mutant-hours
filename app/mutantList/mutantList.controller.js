(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  function MutantListController() {
    var vm = this;

    vm.mutants = ['cyclops', 'rogue', 'wolverine'];
    vm.addMutant = addMutant;

    function addMutant() {
      vm.mutants.push('professor x');
    }
  }

})();

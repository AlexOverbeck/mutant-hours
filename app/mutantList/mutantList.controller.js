(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'user'];

  function MutantListController(mutantService, user) {
    var vm = this;

    vm.mutants = mutantService.mutantsByUser(user.uid);

  }

})();

(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('mutantList', {
      url: '/mutantlist',
      templateUrl: 'app/mutantList/mutantList.html',
      controller: 'MutantListController',
      controllerAs: 'vm',
      resolve: {
        user: resolveUser
      }
    });
  }

  resolveUser.$inject = ['authService'];

  function resolveUser(authService) {
    return authService.auth.$requireAuth();
  }
})();

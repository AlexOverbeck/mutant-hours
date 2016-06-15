(function() {
  'use strict';

  angular
    .module('app.mutantList')
    .directive('xtMutantTable', xtMutantTable);

  function xtMutantTable() {
    return {
      templateUrl: 'app/mutantList/directives/mutantTable.html',
      restrict: 'E',
    };
  }
  
})();

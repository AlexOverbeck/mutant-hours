(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('mutantService', mutantService);

  mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function mutantService($firebaseArray, firebaseDataService) {
    var service = {
      Mutant: Mutant,
      mutants: $firebaseArray(firebaseDataService.root.child('mutants'))
    };

    return service;

    /////////////

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.complete = false;
      this.notified = false;
    }
  }

})();

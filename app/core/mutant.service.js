(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('mutantService', mutantService);

  mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function mutantService($firebaseArray, firebaseDataService) {
    var service = {
      Mutant: Mutant,
      mutantsByUser: mutantsByUser
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

    function mutantsByUser(uid) {
      return $firebaseArray(firebaseDataService.users.child(uid).child('mutants'));
    }
  }

})();

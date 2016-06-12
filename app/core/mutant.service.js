(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('mutantService', mutantService);

  function mutantService() {
    var service = {
      Mutant: Mutant
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

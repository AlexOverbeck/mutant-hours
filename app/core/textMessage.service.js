(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('textMessageService', textMessageService);

  textMessageService.$inject = ['firebaseDataService'];

  function textMessageService(firebaseDataService) {
    var service = {
      sendText: sendText
    };

    return service;

    /////////////

    function sendText(mutant, mutants) {
      var newText = {
        name: mutant.name,
        phoneNumber: mutant.phone,
        topic: mutant.topic
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      mutants.$save(mutant);
    }
  }
})();

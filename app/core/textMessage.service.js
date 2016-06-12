(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('textMessageService', textMessageService);

  function textMessageService() {
    var service = {
      sendText: sendText
    };

    return service;

    /////////////

    function sendText(mutant) {
      var newText = {
        name: mutant.name,
        phoneNumber: mutant.phone,
        topic: mutant.topic
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }
})();

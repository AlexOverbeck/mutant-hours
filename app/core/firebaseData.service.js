(function (){
  'use strict';

  angular
    .module('app.core')
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['FIREBASE_URL'];

  function firebaseDataService(FIREBASE_URL) {
    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root,
      users: root.child('users'),
      emails: root.child('emails'),
      texts: root.child('texts')
    };

    return service;
  }
})();

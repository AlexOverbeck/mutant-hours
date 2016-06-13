(function() {
  'use strict';

  angular.module('mutantApp', [
    // Angular modules
    'ui.router',

    // Third-party modules
    'firebase',

    // Custom modules
    'app.home',
    'app.mutantList',
    'app.auth',
    'app.core',
    'app.layout'
  ]);

})();

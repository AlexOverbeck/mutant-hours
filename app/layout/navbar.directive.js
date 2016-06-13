(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('xtNavbar', xtNavbar);

  function xtNavbar() {
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E'
    };
  }
})();

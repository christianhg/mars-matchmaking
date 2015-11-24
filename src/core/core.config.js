(function() {
  'use strict';

  angular
    .module('mars-matchmaking.core')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
  }
})();

(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.step1')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('register.step1', {
        url: '/1',
        templateUrl: 'register.step1.view.html'
      });
  }
})();

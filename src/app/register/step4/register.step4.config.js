(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.step4')
    .config(config);

  function config($stateProvider) {
      $stateProvider
          .state('register.step4', {
              url: '/4',
              templateUrl: 'register.step4.view.html'
          });
  }
})();

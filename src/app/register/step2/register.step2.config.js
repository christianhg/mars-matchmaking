(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.step1')
    .config(config);

  function config($stateProvider) {
      $stateProvider
          .state('register.step2', {
              url: '/2',
              templateUrl: 'register.step2.view.html',
              // controller: 'RegisterStep2Controller',
              // controllerAs: 'vm',
              // data: {
              //     pageTitle: 'Mars Matchmaking > Register > 2'
              // }
          });
  }
})();

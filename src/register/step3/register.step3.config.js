(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.step3')
    .config(config);

  function config($stateProvider) {
      $stateProvider
          .state('register.step3', {
              url: '/3',
              templateUrl: 'register/step3/register.step3.view.html',
              // controller: 'RegisterStep3Controller',
              // controllerAs: 'vm',
              // data: {
              //     pageTitle: 'Mars Matchmaking > Register > 3'
              // }
          });
  }
})();

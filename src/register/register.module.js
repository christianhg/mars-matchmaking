(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register', [
      'mars-matchmaking.register.step1',
      'mars-matchmaking.register.step2',
      'mars-matchmaking.register.step3',
      'mars-matchmaking.register.step4',
      'mars-matchmaking.register.widgets'
    ]);
})();

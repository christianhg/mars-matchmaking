(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register')
    .controller('RegisterController', RegisterController);

    function RegisterController($state, spaceInterests) {
      var vm = this;

      vm.spaceInterests = spaceInterests.get;

      $state.go('register.step1');
    }
})();

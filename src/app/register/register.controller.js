(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register')
    .controller('RegisterController', RegisterController);

    function RegisterController($state, spaceInterests) {
      var vm = this;

      vm.spaceInterests = [];

      activate();

      function activate() {
        return getSpaceInterests();
      }

      function getSpaceInterests() {
        vm.spaceInterests = spaceInterests.getSpaceInterests();
        return vm.spaceInterests;
      }

      $state.go('register.step1');
    }
})();

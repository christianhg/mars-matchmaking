(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register')
    .controller('RegisterController', RegisterController);

    function RegisterController(spaceInterests) {
      var vm = this;

      vm.spaceInterests = spaceInterests.get;  
    }
})();

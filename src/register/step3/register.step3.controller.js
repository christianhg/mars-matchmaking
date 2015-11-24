(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.step3')
    .controller('RegisterStep3Controller', RegisterStep3Controller);

    function RegisterStep3Controller(spaceInterests) {
      var vm = this;

      vm.spaceInterests = spaceInterests.get;

    }
})();

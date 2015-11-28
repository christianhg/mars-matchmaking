(function() {
  'use strict';

  angular
    .module('mars-matchmaking.core')
    .controller('CoreController', CoreController);

  function CoreController($scope, $state) {
    var vm = this;

    $scope.$on('$stateChangeSuccess', function(event, state) {
      vm.pageTitle = 'Mars Matchmaking > ' + state.data.pageTitle;
    });
  }
})();

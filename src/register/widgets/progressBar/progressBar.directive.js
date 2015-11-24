(function () {
  'use strict';

  angular
    .module('mars-matchmaking.register.widgets')
    .directive('progressBar', progressBar);

  function progressBar() {
    var directive = {
      templateUrl: 'register/widgets/progressBar/progressBar.view.html',
      restrict: 'E',
      scope: {
        label: "@",
        value: "@",
        success: "@"
      },
      controller: ProgressBarController
    };

    return directive;

    /**
     * @ngInject
     */
    function ProgressBarController($scope) {
    
    }
  }
})();

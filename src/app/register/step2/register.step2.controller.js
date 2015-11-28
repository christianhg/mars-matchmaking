(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register.step2')
    .controller('RegisterStep2Controller', RegisterStep2Controller);

  function RegisterStep2Controller($scope) {
    var step2 = this;

    step2.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1
    };
    step2.minDate = new Date(1915, 1, 1);
    step2.maxDate = new Date();
    step2.status = {
      opened: false
    };
    step2.openCalendar = openCalendar;

    function openCalendar($event) {
      step2.status.opened = true;
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('mars-matchmaking.register')
    .factory('spaceInterests', spaceInterests);

    function spaceInterests() {
      return {
        getSpaceInterests: getSpaceInterests
      };

      function getSpaceInterests() {
        return [
          {
            "name": "Constellations",
            "value": "constellations"
          },
          {
            "name": "Monkeys",
            "value": "monkeys"
          },
          {
            "name": "Religion",
            "value": "religion"
          },
          {
            "name": "Time travel",
            "value": "time_travel"
          },
          {
            "name": "Xenomorphs",
            "value": "xenomorphs"
          }
        ];
      }
    }
})();

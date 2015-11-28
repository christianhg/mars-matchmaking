(function () {
	'use strict';

	angular
		.module('mars-matchmaking.register')
		.config(config);

	function config($stateProvider) {
		$stateProvider
			.state('register', {
				url: '/register',
				templateUrl: 'register.view.html',
				controller: 'RegisterController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Mars Matchmaking > Register',
					pageClass: 'page-register'
				}
			});
	}
})();

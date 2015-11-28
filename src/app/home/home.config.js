(function () {
	'use strict';

	angular
		.module('mars-matchmaking.home')
		.config(config);

	function config($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/home.view.html',
				controller: 'HomeController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Mars Matchmaking',
					pageClass: 'page-home'
				}
			});
	}
})();

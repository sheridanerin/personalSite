angular.module('mySiteApp', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'js/Templates/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'js/Templates/aboutTmpl.html',
				controller: 'aboutCtrl'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'js/Templates/projectsTmpl.html',
				controller: 'projectsCtrl'
			})
			.state('resume', {
				url: '/resume',
				templateUrl: 'js/Templates/resumeTmpl.html',
				controller: 'resumeCtrl'
			})
			.state('whatPeopleSay', {
				url: '/whatpeoplesay',
				templateUrl: 'js/Templates/whatPeopleSayTmpl.html',
				controller: 'whatPeopleSayCtrl'
			});

			$urlRouterProvider.otherwise('/');


});
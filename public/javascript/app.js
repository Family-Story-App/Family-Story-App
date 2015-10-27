(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial','truncate'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('Login',{
			url: '/login',
			templateUrl: 'views/Login-Reg.html',
		}).state('EditStory',{
			url: '/edit_story/:id',
			templateUrl: 'views/EditStory.html',
		}).state('AddStory',{
			url: '/add_story',
			templateUrl: 'views/AddStory.html'
		}).state('EditFamily',{
			url: '/edit_family/:id',
			templateUrl: 'views/EditFamily.html',
		}).state('AddFamily',{
			url: '/add_family',
			templateUrl: 'views/AddFamily.html'
		}).state('Story',{
			url: '/story/:id',
			templateUrl: 'views/Story.html'
		}).state('Family',{
			url: '/family',
			templateUrl: 'views/Family.html'
		}).state('Profile',{
			url: '/profile',
			templateUrl: 'views/UserProfile.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthFactory');
	}
})();

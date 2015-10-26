(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('Login',{
			url: '/login',
			templateUrl: 'views/Login-Reg.html',
		}).state('EditStory',{
			url: '/edit_story/:id',
			templateUrl: 'views/Edit.html',
		}).state('AddStory',{
			url: '/add_story',
			templateUrl: 'views/Add.html'
		}).state('EditFamily',{
			url: '/edit_family/:id',
			templateUrl: 'views/EditFam.html',
		}).state('AddFamily',{
			url: '/add_family',
			templateUrl: 'views/AddFam.html'
		}).state('Story',{
			url: '/story/:id',
			templateUrl: 'views/Story.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();

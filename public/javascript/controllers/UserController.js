// displaying ind profile
//  add edit functionality for profile

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {

		var vm = this;
		vm.title = 'Welcome to our App!';


	}
})();

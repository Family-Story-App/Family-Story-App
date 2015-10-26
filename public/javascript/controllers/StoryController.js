// edit story
// add/create story
// delete story

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryController', StoryController);
	function StoryController(HomeFactory, $stateParams, $state) {

		var vm = this;
		vm.title = 'Welcome to our App!';



	}
})();

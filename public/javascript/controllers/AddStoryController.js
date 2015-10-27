// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);
	function AddStoryController($state,HomeFactory) {

		var vm = this;
		vm.title = 'Welcome to our App!';


	}
})();

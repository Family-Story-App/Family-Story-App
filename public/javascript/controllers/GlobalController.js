// handle login & registration
//  tracking user throughut states

(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);
	function GlobalController(HomeFactory, $state) {
		console.log("Instantiated");
		var vm = this;
		vm.title = 'Welcome to our App!';


  }
})();

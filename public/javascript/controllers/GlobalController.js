// handle login & registration
//  tracking user throughut states

(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);
	function GlobalController(UserFactory, $state) {

		var vm = this;
		vm.title = 'Welcome to our App!';


  }
})();

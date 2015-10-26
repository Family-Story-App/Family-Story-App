// edit family
// add/create family
// delete family
(function() {
	'use strict';
	angular.module('app')
	.controller('FamilyController', FamilyController);
	function FamilyController(HomeFactory, $state, $stateParams) {

		var vm = this;
		vm.title = 'Welcome to our App!';


	}
})();

// displaying ind profile
//  add edit functionality for profile

(function() {
	'use strict';
	angular.module('app')
	.controller('UserController', UserController);
	function UserController(UserFactory, $stateParams, $state) {

		var vm = this;
		vm.user = {};
//if(vm.user.photo === null){
//vm.user.photo = "genericphotourl"
//}





	}
})();

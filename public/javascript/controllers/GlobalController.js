// handle login & registration
//  tracking user throughut states

(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);
	function GlobalController(HomeFactory, UserFactory, $state) {
		console.log("Instantiated");
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.isLogin = true; //switch between the login and register view on the login_register.html page
		vm.user = {};
		vm.status = UserFactory.status;

		vm.logout = function() {
			UserFactory.logout();
			$state.go('Landing');
		};

		vm.registerUser = function() {
			UserFactory.registerUser(vm.user).then(function() {
				$state.go('Home');
			});
		}; 
		vm.loginUser = function(){
			console.log('login');
			UserFactory.loginUser(vm.user).then(function(){
				$state.go('Home');
			});
		};


  }
})();

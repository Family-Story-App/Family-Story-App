// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController($state, HomeFactory) {

// console.log("being run");
		var vm = this;
		var familyS = false;
		vm.stories = {};
		HomeFactory.getFamilies().then(function(res){
			vm.family = res;
		});


	}
})();

// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController($state, HomeFactory) {

// console.log("being run");
		var vm = this;
		vm.stories = {};
		HomeFactory.getFamilies().then(function(res){
			vm.family = res;
		});


	}
})();

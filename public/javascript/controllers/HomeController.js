// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
	function HomeController(HomeFactory,$state) {

		var vm = this;
		HomeFactory.getStories().then(function(res){
			vm.stories = res;
		});


	}
})();

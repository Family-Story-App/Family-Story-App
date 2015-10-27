// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
	function HomeController($state, HomeFactory) {
		document.getElementById('searchTest').addEventListener("focus", function (event) {
			console.log("Clicked");
		})
		var vm = this;
		// HomeFactory.getStories().then(function(res){
		// 	vm.stories = res;
		// });


	}
})();

// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
<<<<<<< HEAD
	function HomeController(HomeFactory,$state) {

=======
	function HomeController($state, HomeFactory) {
		document.getElementById('searchTest').addEventListener("focus", function (event) {
			console.log("Clicked");
		})
>>>>>>> 328cc5144db98580a8e361246bdf878178489f45
		var vm = this;
		// HomeFactory.getStories().then(function(res){
		// 	vm.stories = res;
		// });


	}
})();

// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);
	function AddStoryController($state) {

		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.ShowForm = false;
		vm.story = {};

		vm.addStory = function(){
			HomeFactory.createStory(vm.story).then(function(res){
				$state.go('Story');
				vm.story = res;
			});

		};





	}
})();

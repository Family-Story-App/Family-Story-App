// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);
	function AddStoryController($state,HomeFactory) {

		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.ShowForm = false;
		vm.story = {};
		vm.Story = [];



		console.log('Add Story Control');
	vm.AddStory = function(){
		HomeFactory.createStory(vm.story).then(function(res){
			$state.go('Story');
		});
	};





	}
})();

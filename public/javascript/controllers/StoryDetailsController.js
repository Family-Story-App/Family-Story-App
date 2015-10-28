// tracking and displaying ind story
//  add comments   / fam pswd to join

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {

		var vm = this;
		// vm.title = 'Welcome to our App!';
		vm.story = {};
		vm.Story = [];
		vm.showComment = false;
		vm.NoComment = false;
		vm.YesComment = false;

		if(!$stateParams.id) $state.go('Home');
		HomeFactory.getStoryById($stateParams.id).then(function(res){
			vm.story = res;
		});


		vm.showStory = function(){
			HomeFactory.getStories(vm.story, $stateParams.id).then(function(res){
				for (var i = 0; i < Story.length; i++) {
					if(Story[i]._id === vm.story){
						return vm.story;
					}
				}
				vm.story = res;
			});
		};
vm.showStory();

	vm.ShowCom = function(){
		vm.showComment = true;
		vm.NoComment = true;
		vm.YesComment = true;
	};
	vm.HideCom = function(){
		vm.showComment = false;
		vm.NoComment = false;
		vm.YesComment = false;
	};

	}
})();

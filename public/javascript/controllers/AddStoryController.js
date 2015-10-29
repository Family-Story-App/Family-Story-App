// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);

	function AddStoryController($state,UserFactory,HomeFactory) {
		var vm = this;

		vm.newStory = {};
		vm.status = UserFactory.status;
		vm.user ={};

UserFactory.getUserFamily(vm.status._id).then(function(res){
	vm.user = res;
	// console.log(vm.user.family);
});

vm.addStory = function(){
	UserFactory.addStory(vm.newStory, vm.status._id).then(function(res){
		vm.story = res;
	$state.go('Home');
});
	};

	vm.createStory = function(){
		HomeFactory.createStory(vm.newStory, vm.status._id).then(function(res){
			vm.story = res;
		$state.go('Home');
	});
		};






	}
})();

// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);

	function AddStoryController($state,UserFactory) {
		var vm = this;

		vm.newStory = {};
		vm.status = UserFactory.status;


vm.addStory = function(){
	UserFactory.addStory(vm.newStory, vm.status._id).then(function(res){
		vm.story = res;
	$state.go('Home');
});
	};






	}
})();

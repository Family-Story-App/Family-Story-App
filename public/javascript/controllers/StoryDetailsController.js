// tracking and displaying ind story
//  add comments   / fam pswd to join

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {

		var vm = this;
		// vm.title = 'Welcome to our App!';
		vm.astory = {};
		vm.Story = [];
		vm.showComment = false;
		vm.NoComment = false;
		vm.YesComment = false;

		if(!$stateParams.id) $state.go('Home');
		HomeFactory.getStoryById($stateParams.id).then(function(res){
			console.log(res);
			vm.astory = res;
		});


	vm.addCom = function(){
		HomeFactory.postCom().then(function(res){

		});
	};

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

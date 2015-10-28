// tracking and displaying ind story
//  add comments   / fam pswd to join

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {
		var vm = this;
		vm.astory = {};
		vm.Story = [];
		vm.comment = {};
		vm.showComment = false;
		vm.NoComment = false;
		vm.YesComment = false;


 	console.log('running');
		if(!$stateParams.id) $state.go('Home');
		HomeFactory.getStoryById($stateParams.id).then(function(res){
			console.log(res);
			vm.astory = res;
		});

vm.EditStory = function(){

};

	vm.addCom = function(){
			console.log("adding comment");
		HomeFactory.postCom(vm.comment).then(function(res){
				console.log('comment added');
			vm.comment = res.body;
			console.log(res.body);
			if(!$stateParams.id) $state.go('Home');
			HomeFactory.getStoryById($stateParams.id).then(function(res){
				console.log(res);
				vm.astory = res;
			});
		});
		vm.comment = {};
	};
	vm.showCom = function(){
		HomeFactory.displayCom(vm.comment).then(function(res){
			vm.comment = res;
			console.log(res);
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

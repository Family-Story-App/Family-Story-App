// edit story
// add/create story
// delete story

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryController', StoryController);
	function StoryController(HomeFactory, $stateParams, $state) {

		var vm = this;
		vm.title = 'Welcome to our App!';

	// if(!$stateParams.id) $state.go('Home');
	// HomeFactory.getStoryById($stateParams.id).then(function(res){
	// 	console.log(res);
	// 	vm.astory = res;
	// });



	// vm.editStory = function(){
  //     HomeFactory.putStory(vm.story).then(function(){
	// 		console.log('ok');
  //     });
  //   };


	}
})();

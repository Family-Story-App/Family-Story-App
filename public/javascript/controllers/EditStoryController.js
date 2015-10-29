// displaying ind profile
//  add edit functionality for profile

(function() {
	'use strict';
	angular.module('app')
	.controller('EditStoryController', EditStoryController);
	function EditStoryController(HomeFactory, $stateParams, $state) {

	var vm = this;
	vm.story = {};
	vm.edittedStory = {};

  HomeFactory.getStoryById($stateParams.id).then(function(res){
        vm.story = res;
	  });

    vm.editStory = function(){
    HomeFactory.editStory(vm.story).then(function(){
    
    $state.go('Home');
    });
  };

		vm.deleteStory = function(story){
			console.log('delete me!');
			HomeFactory.removeStory(story._id).then(function(){
				vm.story.splice(vm.story.indexOf(id), 1);
			});
		};


    	}
    })();

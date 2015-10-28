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

    vm.editStory = function(storyId, story){
    HomeFactory.putStory({IDofStoryToEdit: storyId, edittedStory: story }).then(function(){
			vm.edittedStory = null;
    $state.go('Home');
                });
              };

		vm.deleteStory = function(story){
			HomeFactory.removeStory(story._id).then(function(){
				vm.story.splice(vm.story.indexOf(id), 1);
			});
		};


    	}
    })();

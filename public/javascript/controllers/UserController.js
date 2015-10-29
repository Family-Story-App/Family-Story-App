// displaying ind profile
//  add edit functionality for profile

(function() {
	'use strict';
	angular.module('app')
	.controller('UserController', UserController);
	function UserController(UserFactory, HomeFactory, $stateParams, $state) {

		var vm = this;
		vm.userFam = {};
		vm.userStory={};
		// vm.userFam.family = [];
		vm.status = UserFactory.status;

//if(vm.user.photo === null){
//vm.user.photo = "genericphotourl"
//}

//Get all of a user's stories for DISPLAY PAGE
UserFactory.getFamStories($stateParams.id).then(function(res){

	vm.famStory = res;
});

UserFactory.getUserFamily($stateParams.id).then(function(res){
	// console.log("finished making a post call to factory");
	// console.log(res + "res");
	console.log(res);
	vm.userFam = res;
});
// console.log(vm.userFam.family[0] + 'vm.userFam.family');

vm.deleteFamily = function(familyToDelete){
	console.log("Heading to factory");
	HomeFactory.deleteFamily(familyToDelete._id)
	.then(function(){
		console.log("Made it back to controller. about to splice!");
		vm.userFam.family.splice(vm.userFam.family.indexOf(familyToDelete),1);
	});
};

vm.deleteStory = function(storyToDelete){
	console.log("Heading to factory");
	HomeFactory.deleteStory(storyToDelete)
	.then(function(){
		console.log("Made it back to controller. about to splice!");
		vm.userStory.story.splice(vm.userStory.story.indexOf(storyToDelete),1);
	});
};


	}
})();

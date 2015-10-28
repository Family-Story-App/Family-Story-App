// displaying ind profile
//  add edit functionality for profile

(function() {
	'use strict';
	angular.module('app')
	.controller('UserController', UserController);
	function UserController(UserFactory, $stateParams, $state) {

		var vm = this;
		vm.userFam = {};
		// vm.userFam.family = [];
		vm.status = UserFactory.status;

//if(vm.user.photo === null){
//vm.user.photo = "genericphotourl"
//}

//Get all of a user's stories for DISPLAY PAGE
UserFactory.getUserStories($stateParams.id).then(function(res){

	vm.userStory = res;
});

UserFactory.getUserFamily($stateParams.id).then(function(res){
	// console.log("finished making a post call to factory");
	// console.log(res + "res");
	console.log(res);
	vm.userFam = res;
});
// console.log(vm.userFam.family[0] + 'vm.userFam.family');
vm.editStory = function(){

};


	}
})();

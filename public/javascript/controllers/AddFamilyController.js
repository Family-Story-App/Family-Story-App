// edit family
// add/create family
// delete family
(function() {
	'use strict';
	angular.module('app')
	.controller('AddFamilyController', AddFamilyController);
	function AddFamilyController(UserFactory, $state, $stateParams) {
console.log("add controller going");
		var vm = this;
		vm.newFamily = {};
		vm.family = {};
		vm.status = UserFactory.status;

		UserFactory.getUserFamily(vm.status._id).then(function(res){
			vm.user = res;

vm.addFamily = function(){
	// console.log("about to go to factory");
	// console.log(vm.status);
	UserFactory.addFamily(vm.newFamily, vm.status._id).then(function(res){
		console.log(res + "res");
		console.log(res.familyName + " res in cotroller");
		vm.family = res;

		// vm.saveFamMember(vm.family);
		// UserFactory.saveFamMember(vm.family, vm.status).then(function(res){

		// vm.family._id = $stateParams.familyId;
		// console.log(vm.family._id);
		// console.log("made it back to controller");
		// $state.go('Family({familyId: vm.family._id})');
	$state.go('Home');
});
// });
	};

// vm.saveFamMember = function(){
// 	// console.log("fam " +family );
// 	UserFactory.saveFamMember(vm.family, vm.status).then(function(res){
// 		vm.family.member.push(vm.user.username);
// 	});
// };

});
}
})();

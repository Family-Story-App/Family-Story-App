// edit family
// add/create family
// delete family
(function() {
	'use strict';
	angular.module('app')
	.controller('AddFamilyController', AddFamilyController);
	function AddFamilyController(UserFactory, $state, $stateParams) {

		var vm = this;
		vm.newFamily = {};
		vm.status = UserFactory.status;


vm.addFamily = function(){
	// console.log("about to go to factory");
	console.log(vm.status);
	UserFactory.addFamily(vm.newFamily, vm.status._id).then(function(res){
		vm.family = res;
		// vm.family._id = $stateParams.familyId;
		// console.log(vm.family._id);
		// console.log("made it back to controller");
		// $state.go('Family({familyId: vm.family._id})');
	$state.go('Home');
});
	};


}
})();

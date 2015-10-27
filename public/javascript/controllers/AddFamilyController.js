// edit family
// add/create family
// delete family
(function() {
	'use strict';
	angular.module('app')
	.controller('FamilyController', FamilyController);
	function FamilyController(HomeFactory, $state, $stateParams) {

		var vm = this;
		vm.newFamily = {};

vm.addFamily = function(){
	// console.log("about to go to factory");
	HomeFactory.addFamily(vm.newFamily).then(function(res){
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

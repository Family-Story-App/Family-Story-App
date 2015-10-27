(function() {
	'use strict';
	angular.module('app')
	.controller('FamilyController', EditFamilyController);
	function EditFamilyController(HomeFactory, $state, $stateParams) {

		var vm = this;
		vm.family = {};

HomeFactory.getFamilyById($stateParams.familyId).then(function(res){
        vm.family = res;
      });

vm.editFamily = function(){
HomeFactory.editFamily(vm.family).then(function(){
$state.go('Home');
            });
          };
  }
  })();

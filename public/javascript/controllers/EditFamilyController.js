(function() {
	'use strict';
	angular.module('app')
	.controller('EditFamilyController', EditFamilyController);


function EditFamilyController(HomeFactory, $state, $stateParams) {
  console.log("im here");
  var vm = this;
  vm.family = {};

  HomeFactory.getFamilyById($stateParams.id).then(function(res){
  	console.log("made it back to controller");

          vm.family = res;
        });

  vm.editFamily = function(){
  HomeFactory.editFamily(vm.family).then(function(){
  $state.go('Home');
              });
            };


}
})();

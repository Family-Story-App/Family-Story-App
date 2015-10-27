// display all content

(function() {
	'use strict';
	angular.module('app')
	.controller('AddStoryController', AddStoryController);
	function AddStoryController($state) {

		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.ShowForm = false;
		vm.story = {};
		vm.Story = [];


		vm.test = {
			title: 'The Best Mom Ever',
			photo: 'http://www.publicdomainpictures.net/pictures/20000/velka/mother-kissing-baby-87129433012057t.jpg',
			body: 'This is a picture of my dear mother Gloria and me twenty years ago'
		};
		vm.addStory = function(){
			HomeFactory.createStory(vm.story).then(function(res){
				// $state.go('Story');
				vm.story = res;
			});

		};





	}
})();

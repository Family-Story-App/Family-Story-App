// tracking and displaying ind story
//  add comments   / fam pswd to join

(function() {
	'use strict';
	angular.module('app')
	.controller('StoryDetailsController', StoryDetailsController);
	function StoryDetailsController(HomeFactory, $stateParams, $state) {

		var vm = this;
		// vm.title = 'Welcome to our App!';
		vm.story = {};
		vm.Story = [];

		vm.test = {
			title: 'The Best Mom Ever',
			photo: 'http://www.publicdomainpictures.net/pictures/20000/velka/mother-kissing-baby-87129433012057t.jpg',
			body: 'This is a picture of my dear mother Gloria and me twenty years ago!'
		};
		console.log(vm.test.photo);

		vm.showStory = function(){
			HomeFactory.getStories().then(function(res){
				console.log(res);
				vm.story = res;
			});
		};
vm.showStory();


	}
})();

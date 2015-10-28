(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};

			// creates story from add story state
		o.createStory = function(story){
			console.log('making story in factory');
			var q = $q.defer();
			console.log(story);
			$http.post('/api/story/', story).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		// Shows stories on home page
o.getStories = function(){
	var q = $q.defer();
	$http.get('/api/story').then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

<<<<<<< HEAD

o.editStory = function(){

=======
o.getStoryById = function(id){
	var q = $q.defer();
	$http.get('/api/story/'+ id).then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};


o.getStory = function(storyId ){
console.log('Getting the id from factory');
	var q = $q.defer();
	$http.get('/api/story/' + storyId).then(function(res){
		q.resolve();
	});
	return q.promise;
};
o.putStory = function(story){
	var q = $q.defer();
	$http.put('/api/story/' + story.id, story).then(function(){
		q.resolve();
	});
	return q.promise;
};
function getAuth() {
		return {
			headers: {
				Authorization: "Bearer " + localStorage.getItem('token')
			}
		};}

//Functions regarding Families
o.addFamily = function(family){
	var q = $q.defer();
	$http.post('/api/family/', family)
	.then(function(res){
	q.resolve(res.data);
	});
 return q.promise;
>>>>>>> 5bc32e9393dc9e6ec001e6157a205b7a608d0dbc
};

//Functions regarding Families
// o.addFamily = function(family){
// 	var q = $q.defer();
// 	$http.post('/api/family/', family)
// 	.then(function(res){
// 	q.resolve(res.data);
// 	});
//  return q.promise;
// };

o.getFamilyById = function(id){
	var q = $q.defer();
	$http.get('/api/family/' + id)
	.then(function(res){
		q.resolve(res.data);
	});
};

o.editFamily = function(family){
	var q = $q.defer();
	$http.put('/api/family/'+family._id,family)
	.then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
};


		return o;
	}
})();

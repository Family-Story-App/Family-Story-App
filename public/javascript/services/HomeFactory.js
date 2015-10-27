(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};


		o.createStory = function(story){
			console.log('making story in factory');
			var q = $q.defer();
			console.log(story);
			$http.post('/api/story/add', story).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

o.getStories = function(){
	var q = $q.defer();
	$http.get('/api/story')
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

//Functions regarding Families
o.addFamily = function(family){
	var q = $q.defer();
	$http.post('/api/family/', family)
	.then(function(res){
	q.resolve(res.data);
	});
 return q.promise;
};

o.getFamilyById = function(id){
	var q = $q.defer();
	$http.get('/api/family/' + id)
	.then(function(res){
		q.resolve(res.data);
	});
};


		return o;
	}
})();

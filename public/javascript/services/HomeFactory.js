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

		o.deleteStory = function(id){
			var q = $q.defer();
		$http.delete('/api/story/' + id)
		.then(function(){
			q.resolve();
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

o.removeStory = function(id){
	var q = $q.defer();
	$http.deleteStory('/api/story/' + id).then(function(){
		q.resolve();
	});
	return q.promise;
};
o.editStory = function(story){
	var q = $q.defer();
	$http.put('/api/story/'+story._id,story)
	.then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
};



o.getStoryById = function(id){
	var q = $q.defer();
	$http.get('/api/story/'+ id).then(function(res){
		console.log('made it back');
		q.resolve(res.data);
	});
	return q.promise;
};

// 		// dup  ^
// o.getStory = function(storyId ){
// console.log('Getting the id from factory');
// 	var q = $q.defer();
// 	$http.get('/api/story/' + storyId).then(function(res){
// 		q.resolve();
// 	});
// 	return q.promise;
// };
// ---------------------------------------------
o.putStory = function(story){
	var q = $q.defer();
	$http.put('/api/story/', story).then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.postCom = function(comment){
	var q = $q.defer();
	// console.log(storyId);
	console.log(comment);
	console.log('post here');
	$http.post('/api/story/', comment).then(function(res){
		q.resolve(res.data);
		console.log("I'm posted");
	});
	return q.promise;
};


o.displayCom = function(){
	console.log('display here');
var q = $q.defer();
	$http.get('/api/story').then(function(res){
		q.resolve(res.data);
		console.log("I'm displayed");
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
	console.log("made it to factory!");
	var q = $q.defer();
	$http.get('/api/family/' + id)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.editFamily = function(family){
	var q = $q.defer();
	$http.put('/api/family/'+family._id,family)
	.then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
};

o.deleteFamily = function(id){
	var q = $q.defer();
$http.delete('/api/family/' + id)
.then(function(){
	q.resolve();
});
return q.promise;
};

		return o;
	}
})();

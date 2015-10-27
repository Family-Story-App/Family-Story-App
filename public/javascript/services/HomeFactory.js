(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};

		o.createStory = function(story){
			var q = $q.defer();
			$http.post('/story', story).then(function(res){
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





		return o;
	}
})();

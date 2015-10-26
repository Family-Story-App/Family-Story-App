(function() {
	'use strict';
	angular.module('app')
	.factory('AuthFactory', AuthFactory);


	function AuthFactory($window) {
	var o = {
    request: function(config){
        if($window.localStorage.getItem('token')) {
          config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
        }
        return config;
      }
    };
		return o;
	}
})();

(function() {
    "use strict";
    angular.module('app')
    .factory('UserFactory', UserFactory);
    function UserFactory($http, $q) {
      var o = {};
      o.status = {};


      if(getToken()){
        setUser();
      }

      o.logout = function(){
        removeToken();
        o.status.username = null;
        o.status._id = null;
      };
      o.registerUser = function(user) {
          console.log(user);
        var q = $q.defer();
        $http.post('/api/user/register', user).then(function(res) {
          setToken(res.data);
          setUser();
          var user = getUser();
          o.status.username = user.username;
          o.status._id = user._id;
          q.resolve(res.data);
        });
        return q.promise;
      };
      o.loginUser = function(user) {
        console.log("Second stop of DF journey");
        var q = $q.defer();
        $http.post('/api/user/login', user).then(function(res) {
          console.log("Fifth stop");
          setToken(res.data); //puts the token on localStorage
          setUser();
          var user = getUser();
          o.status.username = user.username;
          o.status._id = user._id;
          q.resolve(res.data);
        });
        return q.promise;
      };
      function setUser(){
        var user = JSON.parse(urlBase64Decode(getToken().split('.')[1]));
        o.status.username = user.username;
        o.status._id = user._id;
        console.log(o.status);
      }
      function removeUser(){
        o.status.username = null;
        o.status._id = null;

      }
      function getToken() {
        return localStorage.getItem('token');
      };
      function setToken(token) {
        return localStorage.setItem('token',token);
      };
      function removeToken() {
        return localStorage.removeItem('token');
      };
      function logout() {
        removeToken();
        removeUser();
      };


      function urlBase64Decode(str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
          case 0: { break; }
          case 2: { output += '=='; break; }
          case 3: { output += '='; break; }
          default: {
            throw 'Illegal base64url string!';
          }
        }
        return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
      }

      function getUser() {
        return JSON.parse(urlBase64Decode(getToken().split('.')[1]));
      };


o.addFamily = function(family,id){
var q = $q.defer();
$http.post('/api/user/' +id+ '/add_family', family)
.then(function(res){
q.resolve(res.data);
});
// console.log(q.promise.family.id);
  return q.promise;
      };

o.addStory = function(story,id){
var q = $q.defer();
// console.log(story + 'story');
// console.log(id + 'id');
$http.post('/api/user/' +id+ '/add_story', story)
.then(function(res){
q.resolve(res.data);
 });
return q.promise;
};

o.getUserStories = function(id){
  var q = $q.defer();
  $http.get('/api/user/'+id+'/story')
  .then(function(res){
    q.resolve(res.data);
    // console.log(res.data + 'res.data from factory being sent back to controller');
  });
  // console.log(q.promise + "q.promise from factory");
  return q.promise;
};


o.getFamStories = function(id){
  var q = $q.defer();
  $http.get('/api/family/'+id+'/story')
  .then(function(res){
    q.resolve(res.data);
    // console.log(res.data + 'res.data from factory being sent back to controller');
  });
  // console.log(q.promise + "q.promise from factory");
  return q.promise;
};
o.getUserFamily = function(id){
  // console.log("just got to factory about to go to route");
  var q = $q.defer();
  // console.log(user._id + " user._id in factory");
  $http.get('/api/user/'+id+'/family')
  .then(function(res){
    q.resolve(res.data);
    // console.log(res.data + 'res.data from factory being sent back to controller');
  });
  console.log(q.promise + "q.promise from factory");
  return q.promise;
};

o.saveFamMember = function(family,member){
  console.log("made it to the factory!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(family.members + "family.members");
  console.log(family + "family");
  console.log(family.id+ "family.id");
  console.log(member._id + "member.id");
  var q = $q.defer();
  $http.post('/api/family/' +family.id+ '/add_user', member)
  .then(function(res){
  q.resolve(res.data);
  });
    return q.promise;
};

      return o;
  }
  })();

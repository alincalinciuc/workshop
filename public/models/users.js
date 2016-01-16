(function() {
  
  "use strict";

  function UsersFactory($resource) {

    function Users() {}

    Users.prototype = {

      login: function(username, pass) {

        var email = $resource('https://workshop-assist.herokuapp.com/auth/login',{},  {headers: { 'Content-Type': 'application/json' }});
        return email.save({"username":username, "password": pass}).$promise;
      },

      isAuthenticated: function() {
        var email = $resource('/api/authenticated');
        return email.get().$promise;
      }

    };

    return Users;
  }
  
  UsersFactory
    .$inject = ['$resource'];
  
  angular
    .module('mainApp')
    .factory('UsersFactory', UsersFactory)

}());
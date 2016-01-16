(function() {

  'use strict';

  function UsersCtrl($scope, UsersFactory, $state) {

    var self = this,
      user = new UsersFactory();

    self.login = function() {

      var username = self.username || "",
        password = self.password || "";

      var login = user.login(username, password);

      login
        .then(function() {
          $state.go('admin');
        });

    }

    return ($scope.user = self);

  }

  UsersCtrl
    .$inject = ['$scope', 'UsersFactory', '$state'];
    

  angular
    .module('mainApp')
    .controller('UsersCtrl', UsersCtrl);

})();
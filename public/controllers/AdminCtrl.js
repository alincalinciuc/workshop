(function() {

  'use strict';

  function AdminCtrl($scope) {
      var self = this;




      return ($scope.AdminCtrl = self);
  }

  AdminCtrl
    .$inject = [
      '$scope'
    ];
    
  angular
    .module('mainApp')
    .controller('AdminCtrl', AdminCtrl);

})();
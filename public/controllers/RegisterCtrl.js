(function() {

    'use strict';

    function RegisterCtrl($scope) {
        var self = this;




        return ($scope.RegisterCtrl = self);
    }

    RegisterCtrl
        .$inject = [
        '$scope'
    ];

    angular
        .module('mainApp')
        .controller('RegisterCtrl', RegisterCtrl);

})();
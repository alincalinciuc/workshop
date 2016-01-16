(function() {

    'use strict';

    function DashboardCtrl() {
       var self=this;

        return (self);
    }

    DashboardCtrl
        .$inject = [];


    angular
        .module('mainApp')
        .controller('DashboardCtrl', DashboardCtrl);

})();
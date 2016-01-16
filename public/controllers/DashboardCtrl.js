/**
 * Created by alincalinciuc on 16/01/16.
 */
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
(function() {

    'use strict';

    function DashboardCtrl($scope) {
        var self=this;

        var columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];

        var rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];

        self.gridUsers = {
            columnDefs: columnDefs,
            rowData: rowData
        };

        return ($scope.DashboardCtrl = self);
    }


    DashboardCtrl
        .$inject = [
            '$scope'
        ];


    angular
        .module('mainApp')
        .controller('DashboardCtrl', DashboardCtrl);

})();
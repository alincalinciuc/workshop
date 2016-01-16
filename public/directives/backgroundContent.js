/**
 * Created by alincalinciuc on 16/01/16.
 */
(function() {
    'use strict';

    function backgroundContent() {

        return {
            replace: true,
            restrict: 'E',
            templateUrl: "public/views/background-content.html",
        };
    }

    angular
        .module('mainApp')
        .directive('backgroundContent', backgroundContent);

}());

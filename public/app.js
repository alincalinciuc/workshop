(function() {
    'use strict';

    angular
        .module('mainApp', [
            'ngResource',
            'ui.router',
            'permission'
        ]);

    // register the interceptor as a service
    angular
        .module('mainApp').factory('myHttpInterceptor', function($q) {
        return {
            // optional method
            'request': function(config) {
                // do something on success
                
                return config;
            },

            // optional method
            'requestError': function(rejection) {
                // do something on error
                if (canRecover(rejection)) {
                    return responseOrNewPromise
                }
                return $q.reject(rejection);
            },

            // optional method
            'response': function(response) {
                if (response.data.user !== undefined){
                    var AuthToken = response.data.user.session;
                    document.cookie="connect.sid="+AuthToken;
                    console.log(AuthToken);
                }
                return response;
            },

            // optional method
            'responseError': function(rejection) {
                // do something on error
                if (canRecover(rejection)) {
                    return responseOrNewPromise
                }
                return $q.reject(rejection);
            }
        };
    });


    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "public/views/dashboard.html",
                controller: 'DashboardCtrl'
            })
            .state('login', {
                url: "/login",
                templateUrl: "public/views/login.html",
                controller: 'UsersCtrl'
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "public/views/admin.html",
                controller: 'AdminCtrl',
                data: {
                    permissions: {
                        only: ['master', 'user']
                    }
                }
            })
        $httpProvider.interceptors.push('myHttpInterceptor');
    }

    config
        .$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function run(Permission, $q, UsersFactory) {

        Permission
            .defineRole('master', function() {

                var user = new UsersFactory();
                var deferred = $q.defer();

                user
                    .isAuthenticated()
                    .then(function(data) {

                        if (data.isAuthenticated === true) {

                            deferred.resolve();

                        } else {

                            deferred.reject();
                        }
                    });

                return deferred.promise;
            })
    }

    run
        .$inject = ['Permission', '$q', 'UsersFactory'];

    angular
        .module('mainApp')
        .config(config)
        .run(run);

}());

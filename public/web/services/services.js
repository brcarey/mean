define(['angular',
        'web/services/NotificationsService',
        'cookies',
        'resource'], function (angular,
                               notificationsService
        ) {
            'use strict';
            
            var services = angular.module('App.services', ['ngResource', 'ngCookies'])
                .factory('Notifications', notificationsService);
                //.run(['$http', '$cookies', '$location', 'redirectService', '$rootScope', '$window', function ($httpProvider, $cookies, $location, $rootScope, $window) {
                //
                //}]);

            return services;
        });



define(['angular'], function () {
    'use strict';
    var HomeController = function ($scope, $http, $location, Notifications) {
        $http.get('/api/user').success(function (user) {
            if (user.id !== undefined) {
                $scope.message = 'Welcome ' + user.displayName;
            } else {
                Notifications.info('You must login before accessing your home page');
                $location.path('/login');
            }            
        }).error(function() {
            $location.path('/login');
        });       
    };
    HomeController.$inject = ['$scope', '$http', '$location', 'Notifications'];
    return HomeController;
});
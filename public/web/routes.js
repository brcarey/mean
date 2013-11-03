define([
        'web/app',
        'web/helpers/RouteHelper'
], function (app, routeHelper) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider, $route) {
        var paths = ['/', 'login'];
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'web/templates/index.html'
            })
            .when('/login', {
                templateUrl: 'web/templates/login.html'
            })
            .otherwise(
                {
                    redirectTo: function(routeParams, path, search) {
                        return routeHelper.makeRoutesCaseInsensitive(routeParams, path, search, paths);
                    }
                }
            );
    }]);
});

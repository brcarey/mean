define([
    'angular',
    'web/controllers/NotificationsController',
    'web/controllers/HomeController'
], function (angular, NotificationsController, HomeController) {
        'use strict';
        var controllers = angular.module('App.controllers', ['App.services']);
        controllers.controller('NotificationsController', NotificationsController);
        controllers.controller('HomeController', HomeController);

        return controllers;
    });


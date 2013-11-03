define(['web/controllers/NotificationsController',
        'angular',
        'resource',
        'mocks',
        'web/app',
        'web/services/services',
        'web/directives/directives',
        'web/controllers/controllers'
], function (NotificationsController) {
    describe('NotificationsController', function() {
        describe('Given we have a NotificationsController', function() {
            var controller,
                scope;

            beforeEach(module('App'));

            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller(NotificationsController, { $scope: scope });
            }));

            describe('When there are no notifications to display', function() {
                it('Should not display the notifications container', function() {
                    scope.notifications = [];
                    scope.$root.$digest();
                    expect(scope.showNotifications).toBe(false);
                });
            });
            
            describe('When there are notifications to display', function () {
                it('Should display the notifications container', function () {
                    scope.notifications = [];
                    scope.notifications.push({ message: 'some message', type: 'info' });
                    scope.$root.$digest();
                    expect(scope.showNotifications).toBe(true);
                });
            });
        });
    });
});
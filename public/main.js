requirejs.config({
    baseUrl: '',

    paths: {
        underscore: 'assets/underscore/underscore',
        angular: 'assets/angular/angular',
        resource: 'assets/angular-resource/angular-resource',
        cookies: 'assets/angular-cookies/angular-cookies',
        moment: 'assets/momentjs/moment',
        jquery: 'assets/jquery/jquery',
        bootstrap: 'assets/bootstrap/bootstrap',
        'jquery-ui': 'assets/jquery/jquery-ui'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        'angular': {
            exports: 'angular'
        },
        'states': {
            deps: ['angular'],
            exports: 'states'
        },
        'resource': {
            deps: ['angular']
        },
        'cookies': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']  
        },
        'jquery-ui': {
            deps: ['jquery']
        }
    },
    priority: [
		['jquery', 'angular', 'bootstrap']
	]
});

requirejs(['angular', 
            'resource',
            'cookies',
            'underscore',
            'jquery',
            'web/services/services',
            'web/directives/directives',
            'web/controllers/controllers',
            'web/routes',
            'web/app'
           ],   function (angular) {
               angular.element(document).ready(function () {
                   angular.bootstrap(document, ['App']);
               });
           });

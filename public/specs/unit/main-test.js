(function (window, require) {
    "Use strict";
    var file, requireModules;
    requireModules = [];

    for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (file.substring(file.length - 8, file.length) === '.spec.js') {
                requireModules.push(file);
            }
        }
    }

    // Our own weblication including dependencies
    requireModules.push("web/app");
    requireModules.push('mocks');
    requireModules.push('sinon');
    require({
        // !! Testacular serves files from '/base'
        baseUrl: '/base',

        paths: {
            angular: 'bower_components/angular/angular',
            mocks: 'specs/unit/bower_components/angular-mocks/angular-mocks',
            sinon: 'specs/unit/bower_components/sinon/lib/sinon',
            underscore: 'bower_components/underscore/underscore',
            resource: 'bower_components/angular-resource/angular-resource',
            cookies: 'bower_components/angular-cookies/angular-cookies',
            moment: 'bower_components/moment/moment',
            jquery: 'bower_components/jquery/jquery'
        },

        shim: {
            underscore: {
                exports: '_'
            },
            'angular': {
                exports: 'angular',
                deps: [
                    'jquery'
                ]
            },
            'resource': {
                deps: ['angular']
            },
            'cookies': {
                deps: ['angular']
            },
            'mocks': { deps: ['angular'], 'exports': 'mocks' },
            'app': {
                deps: [
                    'underscore',
                    'cookies',
                    'jquery',
                    //'web/routes',
                    'web/services/services',
                    'web/directives/directives',
                    'web/controllers/controllers'
                ]
            },
            'sinon': {
                exports: 'sinon'
            }
        },
        priority: ['angular']
    }, requireModules, function () {
        window.__karma__.start();
    }, function (err) {
    });
}(window, requirejs));


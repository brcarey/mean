var requirejs = require('requirejs');
var define = require('requirejs').define;

requirejs.config({
    nodeRequire: require
});

requirejs(['express',
        'fs',
        'config/app',
        'config/express',
        'config/routes',
        'config/passport'], function (express, fs) {
        });
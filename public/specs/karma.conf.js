module.exports = function(karma) {
    karma.set({
        basePath: '../',

        frameworks: ['jasmine', 'requirejs'],

        files: [
            { pattern: 'specs/unit/main-test.js', included: true },
            { pattern: 'specs/unit/bower_components/**/*.js', included: false },
            { pattern: 'bower_components/**/*.js', included: false },
            { pattern: 'web/**/*.js', included: false },
            //{ pattern: 'app/**/*.js', included: false },
            { pattern: 'specs/unit/**/*.js', included: false }
        ],

        // list of files to exclude
        exclude: [],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        browsers: ['Chrome'],

        // test results reporter to use
        // possible values: dots || progress
        reporters: ['progress'],

        // web server port
        port: 9018,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,
    });
};

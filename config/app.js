define(['express', 'passport', 'mongoose', 'mean-logger', 'config/config'], function(express, passport, mongoose, logger, config) {
    var app = express();

    //Start the app by listening on <port>
    var port = process.env.PORT || config.port;
    app.listen(port);
    console.log('Express app started on port ' + port);

    //Initializing logger
    logger.init(app, passport, mongoose);

    return app;
});
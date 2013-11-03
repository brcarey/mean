define(['async', 
        'config/app', 
        'passport', 
        'config/middlewares/auth',
        'app/controllers/users',
        'app/controllers/articles',
        'config/config'], function (async, app, passport, auth, users, articles, config) {
            //User Routes
            app.get('/signin', users.signin);
            app.get('/signup', users.signup);
            app.get('/signout', users.signout);

            //Setting up the users api
            app.post('/users', users.create);

            app.post('/users/session', passport.authenticate('local', {
                failureRedirect: '/signin',
                failureFlash: 'Invalid email or password.'
            }), users.session);

            app.get('/users/me', users.me);
            app.get('/users/:userId', users.show);

            //Setting the facebook oauth routes
            app.get('/auth/facebook', passport.authenticate('facebook', {
                scope: ['email', 'user_about_me', 'read_stream'],
                failureRedirect: '/#/login'
            }));

            app.get('/auth/facebook/callback', passport.authenticate('facebook', {
                successRedirect: '/#/',
                failureRedirect: '/#/login'
            }));

            //Setting the github oauth routes
            app.get('/auth/github', passport.authenticate('github', {
                failureRedirect: '/signin'
            }), users.signin);

            app.get('/auth/github/callback', passport.authenticate('github', {
                failureRedirect: '/signin'
            }), users.authCallback);

            //Setting the twitter oauth routes
            app.get('/auth/twitter', passport.authenticate('twitter', {
                failureRedirect: '/signin'
            }), users.signin);

            app.get('/auth/twitter/callback', passport.authenticate('twitter', {
                failureRedirect: '/signin'
            }), users.authCallback);

            //Setting the google oauth routes
            app.get('/auth/google', passport.authenticate('google', {
                failureRedirect: '/signin',
                scope: [
                    'https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email'
                ]
            }), users.signin);

            app.get('/auth/google/callback', passport.authenticate('google', {
                failureRedirect: '/signin'
            }), users.authCallback);

            //Finish with setting up the userId param
            app.param('userId', users.user);

            //Article Route
            app.get('/articles', articles.all);
            app.post('/articles', auth.requiresLogin, articles.create);
            app.get('/articles/:articleId', articles.show);
            app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
            app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

            //Finish with setting up the articleId param
            app.param('articleId', articles.get);

            //Home route
            app.get('/', function (req, res) {
                res.sendfile(config.root + '/public/index.html'); //needs to come from config or be derived somehow
            });
});
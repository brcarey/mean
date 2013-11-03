define(['mongoose', 'async', 'underscore', 'app/models/article'], function(mongoose, async, _) {
    var Article = mongoose.model('Article');
    
    /**
     * Find article by id
     */
    var get = function (req, res, next, id) {
        Article.load(id, function (err, article) {
            if (err) return next(err);
            if (!article) return next(new Error('Failed to load article ' + id));
            req.article = article;
            next();
        });
    };
    
    /**
     * Create a article
     */
    var create = function (req, res) {
        var article = new Article(req.body);
        article.user = req.user;

        article.save(function (err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    article: article
                });
            } else {
                res.jsonp(article);
            }
        });
    };

    /**
     * Update a article
     */
    var update = function (req, res) {
        var article = req.article;

        article = _.extend(article, req.body);

        article.save(function (err) {
            res.jsonp(article);
        });
    };
    

    /**
     * Delete an article
     */
    var destroy = function (req, res) {
        var article = req.article;

        article.remove(function (err) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(article);
            }
        });
    };

    /**
     * Show an article
     */
    var show = function (req, res) {
        res.jsonp(req.article);
    };

    /**
     * List of Articles
     */
    var all = function (req, res) {
        Article.find().sort('-created').populate('user', 'name username').exec(function (err, articles) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(articles);
            }
        });
    };

    return {
        get: get,
        create: create,
        update: update,
        destroy: destroy,
        show: show,
        all: all
    };
});
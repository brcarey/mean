define(['path', 'module'], function(path, module) {
    var rootPath = path.normalize(path.dirname(module.uri) + '/../..');
    return {
        root: rootPath,
        port: process.env.PORT || 3000,
        db: process.env.MONGOHQ_URL
    };
});
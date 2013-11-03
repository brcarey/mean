define(['underscore', 'fs', 'config/env/all', 'module', 'path'], function(_, fs, all, module, path) {
    //var config = JSON.parse(fs.readFileSync(path.dirname(module.uri) + '/../config/env/' + process.env.NODE_ENV + '.json', 'utf8'));
    var config = JSON.parse(fs.readFileSync(path.dirname(module.uri) + '/../config/env/development.json', 'utf8'));
    _.extend(all, config || {});
    return all;
});
define(['mongoose', 'config/config'], function(mongoose, config) {
    var db = mongoose.connect(config.db);
    return db;
});
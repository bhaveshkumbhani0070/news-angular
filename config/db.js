var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://rodonguser:rodonguser@db.laonresources.com/rodong?authSource=admin"; //process.env.MONGODB_URI;
exports.connect = function(callback) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.log('err', err);
            callback(false);
        } else {
            callback(db);
            // db.close();
        }
    });
};
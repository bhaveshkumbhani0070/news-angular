var express = require('express');
var router = express.Router();
var pool = require('../config/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Express RESTful API');
});

router.get('/api/news', function(req, res, next) {
    var value = req.query.value;
    var field = req.query.field;

    // console.log('value', value);
    // console.log('field', field);

    pool.connect(function(db) {
        if (db) {
            console.log('connected');
            news = db.collection('news');

            switch (field) {
                case "no":
                    var query = { "no": { $regex: '.*' + value + '.*', $options: 'i' } };
                    break;
                case "author":
                    var query = { author: { $regex: '.*' + value + '.*', $options: 'i' } };
                    break;
                case "date":
                    var query = { date: new Date(value) }
                    break;
                case "title":
                    var query = { title: { $regex: '.*' + value + '.*', $options: 'i' } }
                    break;
                    // case "tags_title":
                    //     var query = { tags_title: value }
                    //     break;
                default:
                    break;
            }

            // console.log('query', query);

            news.find(query).toArray(
                function(err, data) {
                    if (!err) {
                        console.log('total', data.length);
                        res.send({ code: 200, status: 'success', message: 'data get', 'data': data });
                        return;
                    } else {
                        console.log('Errr', err);
                        return;
                    }
                });
        } else {
            console.log('Error');
        }
    });
})
router.get('/api/latestNews', function(req, res, next) {
    pool.connect(function(db) {
        if (db) {
            console.log('connected');
            news = db.collection('news');
            news.find().sort({ "date": -1 }).limit(20).toArray(
                function(err, data) {
                    if (!err) {
                        console.log('total', data.length);
                        res.send({ code: 200, status: 'success', message: 'data get', 'data': data });
                        return;
                    } else {
                        console.log('Errr', err);
                        return;
                    }
                });
        } else {
            console.log('Error', err);
        }
    });
})


module.exports = router;
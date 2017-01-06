var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("success");
});


router.get('/add', function(req, res, next) {
    res.render('course/add', {title:"keke"});
});


router.get('/edit', function(req, res, next) {
    res.render('course/edit', { title: 'HandleB' });
});


router.get('/list', function(req, res, next) {
    res.render('course/list', { title: 'HandleB' });
});


router.get('/search', function(req, res, next) {
    res.render('course/search', { title: 'HandleB' });
});

module.exports = router;




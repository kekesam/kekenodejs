/*
* 对应模块是：[model]
* */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("success");
});


router.get('/add', function(req, res, next) {
    res.render('[model]/add', { title: 'HandleB' });
});


router.get('/edit', function(req, res, next) {
    res.render('[model]/edit', { title: 'HandleB' });
});


router.get('/list', function(req, res, next) {
    res.render('[model]/list', { title: 'HandleB' });
});


router.get('/search', function(req, res, next) {
    res.render('[model]/search', { title: 'HandleB' });
});


module.exports = router;




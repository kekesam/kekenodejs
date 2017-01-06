/*
* 对应模块是：content
* */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("success");
});


router.get('/add', function(req, res, next) {
    res.render('content/add', {
        layout:"metro",
        data:{
            username:"keke",
            age:30,
            address:"湖南长沙"
        },
        students:[
            {name:"xiaoshu",age:30},
            {name:"zhangs",age:10},
            {name:"lisi",age:20},
        ],
        link:"http://www.mengkedu.com",
        books:["java","javascript","shuxue"]
    });
});


router.get('/edit', function(req, res, next) {
    res.render('content/edit', { title: 'HandleB' });
});


router.get('/list', function(req, res, next) {
    res.render('content/list', { title: 'HandleB' });
});


router.get('/search', function(req, res, next) {
    res.render('content/search', { title: 'HandleB' });
});


module.exports = router;




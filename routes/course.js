//
// var courseDao = require("./CourseDao");
// module.exports = {
//
//     add:function(req, res,next) {
//         //保存数据库
//         courseDao.save("xxxxx");
//         res.json({success:true});
//
//         //res.render('course/add',{title:"keke"});
//     },
//
//     edit:function(req, res,next) {
//         //保存数据库
//         courseDao.edit("xxxxx");
//         res.json({success:true});
//         //查询数据库
//         //res.render('course/edit');
//     },
//
//     list:function(req, res,next) {
//         //保存数据库
//         var JSONArr = courseDao.find("");
//         //查询数据库
//         res.render('course/list');
//     },
//
//     search:function(req, res,next) {
//         //查询数据库
//         var JSONArr = courseDao.search("");
//     }
// };

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'HandleB' });
});

router.get('/course/add', function(req, res, next) {
    res.render('course/add', { title: 'HandleB' });
});

router.get('/course/edit', function(req, res, next) {
    res.render('course/edit', { title: 'HandleB' });
});

router.get('/course/list', function(req, res, next) {
    res.render('course/list', { title: 'HandleB' });
});

router.get('/course/search', function(req, res, next) {
    res.render('course/search', { title: 'HandleB' });
});

module.exports = router;




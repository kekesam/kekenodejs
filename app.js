var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//路由
var index = require('./routes/index');
var users = require('./routes/users');
global.courses = require('./routes/course');

//引入handlebars的模板对象
var handlebars = require("express3-handlebars").create({
  defaultLayout:"main",
  extname:".html"
});


var app = express();
// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

app.engine("html",handlebars.engine);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
    console.log("每次执行的时候都会进入哦......"+req.url);
    next();
});

app.use('/', index);
app.use('/users', users);
var arr = [courses];
for(var j=0;j<arr.length;j++) {
    var length = arr[j].stack.length;
    for (var i = 0; i < length; i++) {
        var route = arr[j].stack[i].route;
        app.use(route.path, arr[j]);
    }
};

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//构建模块
//var build = require("./core/build").create("content");

//路由
var core = require("./core/core");

//引入handlebars的模板对象
var handlebars = require("express3-handlebars").create({
  defaultLayout:"main",
  extname:".html",
  helpers:{
      section:function(name,options){
        if(!this._sections)this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
      format:function(date,options){
          return new Date(date).toLocaleString();
      }
  }
});


var app = express();
// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

app.disable("x-powered-by");
app.engine("html",handlebars.engine);
app.set('view engine', 'html');
/*app.set("view cache",true);*/

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

//路由注册
core.create(app);

//handlbars的局部文件 partial
app.use(function(req,res,next){
  if(!res.locals.commons)res.locals.partials = {};
    res.locals.partials.header = {};
    res.locals.partials.footer = {};
    next();
});

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
var express = require('express');
var router = express.Router();

/* GET home page2. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HandleB' });
});

module.exports = router;

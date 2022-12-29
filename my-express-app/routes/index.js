var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('/aaa')
  res.type('html');
  res.render('index', { title: 'Express' });
  // res.send('12345')
});
module.exports = router;

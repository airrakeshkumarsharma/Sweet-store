var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource1');
});
//router.post('/sweet/add-data', function (req, res, next) {
 //res.send('12345');
//})
module.exports = router;

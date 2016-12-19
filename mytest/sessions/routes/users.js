var express = require('express');
var router = express.Router();

/* GET users listing. */

exports.users = function(req,res){
	res.render("index",{title:"dsafafagfag"});
}
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });

module.exports = router;

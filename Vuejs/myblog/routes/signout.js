﻿var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;


//GET /signout 登出
router.get('/', function(req, res, next){
	res.send(req.flash());
});

module.exports = router;



var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;


//GET /signout 登出
router.get('/', function(req, res, next){
	// res.send(req.flash());
	
	//清空session中用户信息
	req.session.user = null;
	req.flash('success', '登出成功');
	//登出后成功跳转到主页
	res.redirect('/posts');	
	
});

module.exports = router;



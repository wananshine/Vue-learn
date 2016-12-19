var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin µÇÂ¼Ò³
router.get('/', checkNotLogin);
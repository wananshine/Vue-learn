var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin ��¼ҳ
router.get('/', checkNotLogin);
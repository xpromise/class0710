//引入express模块
var express = require('express');
//引入用来处理路径的path模块
var path = require('path');
//创建路由器对象
var router = express.Router();
//业务逻辑
//用户注册页面
router.get('/regist', function (req, res) {
  //返回注册页面给用户
  res.sendFile(path.resolve(__dirname, 'public/regist.html'));
})
//用户登录页面
router.get('/login', function (req, res) {
  //返回登录页面给用户
  res.sendFile(path.resolve(__dirname, 'public/login.html'));
})
//暴露出去
module.exports = router;
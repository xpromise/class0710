//引入express模块
var express = require('express');
//引入cookie-parser
var cookieParser = require('cookie-parser');
//引入模型对象
var Users = require('../model/users');
//创建路由器对象
var router = express.Router();

//使用第三方中间件
router.use(cookieParser());

//业务逻辑
//用户注册页面
router.get('/regist', function (req, res) {
  //返回注册页面给用户
  res.render('regist', {errMsg: {}});
})
//用户登录页面
router.get('/login', function (req, res) {
  //返回登录页面给用户
  res.render('login', {errMsg: {}});
})
//个人中心页面
router.get('/userCenter', function (req, res) {
  //返回个人中心页面给用户
  //不能随便访问，必须有过登录行为才能访问
  //判断用户的登录行为
  var id = req.session.user_id;
  
  if (id) {
    //判断id是否存在且合法
    Users.findOne({_id: id}, function (err, data) {
      if (!err && data) {
        res.render('userCenter', {data: data});
      } else {
        //id不存在或者方法出错误了
        res.redirect('/login');
      }
    })
  } else {
    //cookie不存在，用户没有登录过, 返回登录页面
    res.redirect('/login');
  }
})
//暴露出去
module.exports = router;
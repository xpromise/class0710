//引入express模块
var express = require('express');
//用来解析请求体第三方中间件
var bodyParser = require('body-parser');
//引入模型对象
var Users = require('../model/users');
//创建路由器对象
var router = express.Router();
//路由器对象就是小型的app应用对象（当作app使用）
//使用路由器对象设置中间件或者路由
//作用：用来分类管理路由和中间件，用来提取路由和中间件

//第三方中间件
router.use(bodyParser.urlencoded({extended: true}));

//应用级中间件
function regTest(req, res, next) {
  // 1. 获取请求参数
  var username = req.body.username;
  var pwd = req.body.pwd;
  var email = req.body.email;
  var type = req.body.type;
  
  var usernameReg = /^[0-9A-Za-z_]{5,10}$/;  //用户名可以包含英文数字下划线，长度为5-10位
  var pwdReg = /^[0-9A-Za-z_]{6,18}$/;  //密码可以包含英文数字下划线，长度为6-18位
  var emailReg = /^[0-9A-Za-z_]{3,10}@[0-9A-Za-z_]{2,6}\.com$/;
  
  //定义错误对象
  var errMsg = {
    username: username,
    email: email
  };
  
  if (!usernameReg.test(username)) {
    //用户名不符合规范
    errMsg.usernameErr = '用户名不符合规范，可以包含英文数字下划线，长度为5-10位';
  }
  //验证密码
  if (!pwdReg.test(pwd)) {
    //密码不符合规范
    errMsg.pwdErr = '密码不符合规范，密码可以包含英文数字下划线，长度为6-18位';
  }
  //验证邮箱
  if (type && !emailReg.test(email)) {
    //邮箱不符合规范
    errMsg.emailErr = '邮箱不符合规范';
  }
  //将错误对象设置到res对象，后面的路由、中间件就能共享
  res.errMsg = errMsg;
  //调用堆栈中下一个中间件函数
  next();
}
//注册路由
router.post('/regist', regTest, function (req, res) {
  /*
    1. 获取请求参数
    2. 验证密码和确认密码是否一致
    3. 使用正则表达式验证用户填写的信息是否符合规则
    4. 去数据库中查找账号是否存在
    5. 不存在，注册，将数据保存在数据库中
   */
  // 1. 获取请求参数
  var username = req.body.username;
  var pwd = req.body.pwd;
  var rePwd = req.body.rePwd;
  var email = req.body.email;
  var errMsg = res.errMsg;
  // 2. 验证密码和确认密码是否一致
  if (pwd !== rePwd) {
    //密码和确认密码不一致
    errMsg.rePwdErr = '密码和确认密码不一致，请重新输入';
  }
  //判断errMsg是否有错误，如果有错误，就返回给用户错误信息
  if (errMsg.usernameErr || errMsg.pwdErr || errMsg.rePwdErr || errMsg.emailErr) {
    //将错误对象渲染到页面上，返回给用户
    res.render('regist', {errMsg: errMsg});
    return;
  }
  
  // 4. 去数据库中查找账号是否存在
  Users.findOne({username: username}, function (err, data) {
    if (!err) {
      //方法没有问题
      if (data) {
        //找到了指定用户
        errMsg.usernameErr = '用户名已存在';
        res.render('regist', {errMsg: errMsg});
      } else {
        //没有找到指定用户
        // 5. 不存在，注册，将数据保存在数据库中
        Users.create({username: username, pwd: pwd, email: email}, function (err) {
          if (!err) {
            //注册成功，跳转到登录页面
            res.redirect('/login');
          } else {
            //方法出了问题
            errMsg.networkErr = '注册失败，网络不稳定，请刷新一下~';
            res.render('regist', {errMsg: errMsg});
          }
        })
      }
    } else {
      //方法出错了
      errMsg.networkErr = '注册失败，网络不稳定，请刷新一下~';
      res.render('regist', {errMsg: errMsg});
    }
  })
  
})
//登录路由
router.post('/login', regTest, function (req, res) {
  /*
    1. 获取请求参数
    2. 使用正则表达式验证用户填写的信息是否符合规则
    3. 去数据库中查找用户名和密码是否正确
    4. 全部正确才能登录成功
   */
  // 1. 获取请求参数
  var username = req.body.username;
  var pwd = req.body.pwd;
  var errMsg = res.errMsg;
  
  //判断errMsg是否有错误，如果有错误，就返回给用户错误信息
  if (errMsg.usernameErr || errMsg.pwdErr) {
    //将错误对象渲染到页面上，返回给用户
    errMsg.err = '登录失败，用户名或密码错误';
    res.render('login', {errMsg: errMsg});
    return;
  }
  
  // 3. 去数据库中查找用户名和密码是否正确
  Users.findOne({username: username, pwd: pwd}, function (err, data) {
    if (!err) {
      if (data) {
        res.send('登录成功');
      } else {
        errMsg.err = '登录失败，用户名或密码错误';
        res.render('login', {errMsg: errMsg});
      }
    } else {
      errMsg.err = '网络不稳定，请刷新一下~';
      res.render('login', {errMsg: errMsg});
    }
  })
  
})

//将路由器对象暴露出去
module.exports = router;
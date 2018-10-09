var express = require('express');
//用来解析请求体第三方中间件
var bodyParser = require('body-parser');
//连接数据库
require('./db');
//引入模型对象
var Users = require('./model/users');
var app = express();
//内置中间件
app.use(express.static('public'));
//第三方中间件
app.use(bodyParser.urlencoded({extended: true}));

//注册路由
app.post('/regist', function (req, res) {
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
  // 2. 验证密码和确认密码是否一致
  if (pwd !== rePwd) {
    //密码和确认密码不一致
    res.send('密码和确认密码不一致，请重新输入');
    return;
  }
  // 3. 使用正则表达式验证用户填写的信息是否符合规则
  var usernameReg = /^[0-9A-Za-z_]{5,10}$/;  //用户名可以包含英文数字下划线，长度为5-10位
  var pwdReg = /^[0-9A-Za-z_]{6,18}$/;  //密码可以包含英文数字下划线，长度为6-18位
  var emailReg = /^[0-9A-Za-z_]{3,10}@[0-9A-Za-z_]{2,6}\.com$/;
  
  //验证用户名
  if (!usernameReg.test(username)) {
    //用户名不符合规范
    res.send('用户名不符合规范，可以包含英文数字下划线，长度为5-10位');
    return;
  }
  //验证密码
  if (!pwdReg.test(pwd)) {
    //密码不符合规范
    res.send('密码不符合规范，密码可以包含英文数字下划线，长度为6-18位');
    return;
  }
  //验证邮箱
  if (!emailReg.test(email)) {
    //邮箱不符合规范
    res.send('邮箱不符合规范');
    return;
  }
  // 4. 去数据库中查找账号是否存在
  Users.findOne({username: username}, function (err, data) {
    if (!err) {
      //方法没有问题
      if (data) {
        //找到了指定用户
        res.send('用户名已存在');
      } else {
        //没有找到指定用户
        // 5. 不存在，注册，将数据保存在数据库中
        Users.create({username: username, pwd: pwd, email: email}, function (err) {
          if (!err) {
            //注册成功，跳转到登录页面
            res.redirect('/login.html');
          } else {
            //方法出了问题
            res.send('注册失败，网络不稳定，请刷新一下~');
          }
        })
      }
    } else {
      //方法出错了
      res.send('网络不稳定，请刷新一下~');
    }
  })
  
  
})

//登录路由
app.post('/login', function (req, res) {

})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
var express = require('express');
//引入session模块
var session = require('express-session');
//引入连接mongo模块
var MongoStore = require('connect-mongo')(session);
//引入路由器模块
var userRouter = require('./router/userRouter');
var uiRouter = require('./router/uiRouter');
//连接数据库
require('./db');
var app = express();
//配置模板资源目录
app.set('views', 'views');
//配置模板引擎
app.set('view engine', 'ejs');
//配置session中间件
/*
   当请求来的时候，会自动解析其中的cookie，如果里面有session_id会自动去数据库中查找对应的session对象
   将找到的session对象挂载到req.session上
   
   当你通过req.session.xxx = xxx，设置session对象里面的数据，将数据保存在session对象中，并保存在数据库中，
   自动设置cookie包含该session对象session_id返回给用户
 */
app.use(session({
  secret: 'hello atguigu class0710',   //参与session加密的
  saveUninitialized: false, // 直到某些数据保存下来之前不要创建session对象
  resave: false, // 如果没有修改session对象就不重新保存session
  store: new MongoStore({
    url: 'mongodb://localhost:27017/exec',
    touchAfter: 24 * 3600 // session对象只在24小时内更新一次，无论有多少请求
  })
}));

//应用路由器
app.use(userRouter);
app.use(uiRouter);

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
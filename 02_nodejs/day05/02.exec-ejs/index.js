var express = require('express');
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
//内置中间件
// app.use(express.static('public'));
//应用路由器
app.use(userRouter);
app.use(uiRouter);

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
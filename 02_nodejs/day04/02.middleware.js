var express = require('express');
//引入body-parser第三方中间件
var bodyParser = require('body-parser');
var app = express();
/*
  express框架基于路由和中间件开发的。
  中间件middleware：本质是一个函数
  组成：
    1. request  请求信息
    2. response 响应信息
    3. next 调用堆栈中的下一个中间件函数
  作用：
    1. 执行任意代码
    2. 修改请求request/响应response对象
    3. 接受请求、处理请求、返回响应
    4. 调用堆栈中的下一个中间件函数
  应用：
    1. 应用级中间件
      修改请求request/响应response对象，过滤非法请求（防盗链）
    2. 第三方中间件
      修改请求request/响应response对象 body-parser cookie-parser
    3. 内置中间件
      服务器内部代码/资源默认对外都是不可见的
      通过express.static()可以向外暴露静态资源
    4. 路由器中间件
      Router 分类管理路由
    
 */

//内置中间件
app.use(express.static('public'));

//第三方中间件
//解析请求体数据为对象，将其挂载到req.body上
app.use(bodyParser.urlencoded({extended: true}));

//中间件
// 默认情况下，能够接受处理所有的请求，不会再执行后面的中间件函数/路由
// 调用next方法才能接下来执行后面的中间件函数/路由
/*app.use(function (req, res, next) {
  console.log('中间件触发了');
  //一次请求中所有的中间件和路由共享同一个req和res对象
  req.myText = 123;
  console.log(req.headers.host);
  //防盗链
  if (req.headers.host !== 'localhost:3000') {
    res.end('error');
  }
  // 执行后面的中间件函数/路由
  next();
})*/

function middleware(req, res, next) {
  console.log('中间件触发了');
  //一次请求中所有的中间件和路由共享同一个req和res对象
  req.myText = 123;
  console.log(req.headers.host);
  //防盗链
  if (req.headers.host !== 'localhost:3000') {
    res.end('error');
  }
  // 执行后面的中间件函数/路由
  next();
}

app.get('/', middleware, function (req, res) {
  console.log('路由触发了');
  console.log(req.myText);
  
  res.end('111');
})

app.post('/', function (req, res) {
  console.log(req.query); // {}
  console.log(req.body); // undefined  { username: 'sunwukong', password: '123123' }
  
  res.end('post路由返回的响应');
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了');
  else console.log(err);
})
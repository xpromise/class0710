var express = require('express');
//引入cookie-parser
var cookieParser = require('cookie-parser');
var app = express();

//使用第三方中间件
//将cookie解析成一个对象，挂载到req.cookies
app.use(cookieParser());
/*
  浏览器设置cookie
    document.cookie 读写二合一
 */

app.get('/testCookie1', function (req, res) {
  //设置cookie
  res.cookie('user_id', '123456', {maxAge: 1000 * 3600 * 24 * 7});
  res.end('这是服务器返回的响应1~');
})

app.get('/testCookie2', function (req, res) {
  //获取cookie
  console.log(req.cookies);
  res.end('这是服务器返回的响应2~');
})

app.get('/testCookie3', function (req, res) {
  //删除cookie
  // res.clearCookie('user_id');
  res.cookie('user_id', 'xxxx', {maxAge: 0});
  res.end('这是服务器返回的响应3~');
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})
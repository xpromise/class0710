//引入express模块
var express = require('express');
//创建app应用对象
//app有且只有一个
var app = express();
//设置路由，用来处理业务逻辑
/*
  请求地址：
    http://localhost:3000     localhost本机默认域名
    http://127.0.0.1:3000     127.0.0.1本机默认ip地址
    http://192.168.32.50:3000  192.168.32.50本机局域网ip地址
      互联网中会为连上网络的设备/机器分配一个ip地址，为了简化ip地址，就有了域名地址
      DNS解析  ---  将输入域名地址解析为ip地址
      
    http://localhost:3000/index.html
    协议名://域名/ip地址:端口号/资源名
    
    默认端口号
      http   80
      https  443
    
    默认资源名
      index.html
    
 */
app.get('/', function (request, response) {
  //接受请求参数
  var query = request.query;
  console.log(query); // { username: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应~~~' + query.username + '</h1>');
})
app.get('/123', function (request, response) {
  //接受请求参数
  var query = request.query;
  console.log(query); // { username: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应~~~' + query.username + '</h1>');
})
app.get('/465', function (request, response) {
  //接受请求参数
  var query = request.query;
  console.log(query); // { username: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应~~~' + query.username + '</h1>');
})
//监听一个端口号
app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
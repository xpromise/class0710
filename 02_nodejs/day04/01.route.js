//引入express模块
var express = require('express');
//模块专门用来处理路径问题
var path = require('path');
//创建app应用对象
var app = express();
//设置路由
/*
  路由：
    指应用程序端点 (URI) 的定义以及端点响应客户端请求的方式。
    功能：
      1. 如何定义请求地址
      2. 接受请求、处理请求、返回响应
    组成：
      1. HTTP请求方式（GET, POST, PUT, DELETE...）
      2. 请求地址/路径  '/'  '/shop' ....
      3. 若干个回调函数/句柄
 */
app.get('/', function (req, res) {
  /*
    request 请求信息
      req.query  查询字符串（位于请求地址中）
      req.params 获取请求地址占位符数据
      req.url 请求地址路径部分
      req.headers 获取请求头信息
      req.body 获取请求体
      req.get() 获取指定请求头信息
    response 响应信息
      res.download(资源相对路径) 返回响应，提供资源客户端会自动下载本地文件
      res.sendFile(资源绝对路径) 返回响应，提供资源客户端会自动打开显示

      res.end()  返回响应，快速返回响应
      res.json() 返回响应，将返回响应的内容转化成json字符串返回
      res.redirect() 返回响应，请求重定向到新的网址，并且默认状态码为302
      res.send() 返回响应，会根据响应的内容，自动的添加相应的响应头
      
      res.set()  设置响应头
      res.get()  获取响应头
      res.status() 设置响应状态码
      注意：所有响应只能返回一次，不能设置多个返回响应
   */
  // console.log(req.headers);
  
  // var filePath = path.resolve(__dirname, '../day03/public/index.html');  // C:\Users\web\Desktop\0710\class0710\02_nodejs\day03\public\index.html
  // console.log(filePath);
  // res.download('../day03/public/index.html');
  // res.sendFile(filePath);
  // res.send('这是根路由返回的响应');
  
  // res.end('error');
  // res.json({name: '孙悟空', age: 18});
  // res.redirect('http://www.atguigu.com');
  // res.redirect('http://localhost:3000/test');
  // res.redirect('/test');
  
  res.set('X-TEST', '123456');
  console.log(res.get('X-TEST'));
  
  res.status(500).send({name: '孙悟空', age: 18});
  
})
app.post('/', function (req, res) {

})

app.get('/test', function (req, res) {
  res.send('这是test路由返回的响应');
})

app.get('/jiudian/:id', function (req, res) {
  console.log(req.params);  // { id: '123456' }  { id: '78953135' }
  res.send('这是shop/:id路由返回的响应');
})

app.get(/\/shop\/[0-9]+/, function (req, res) {
  console.log(req.url);  // /shop/123456   /shop/78945615
  res.send('这是正则路由返回的响应');
})

//监听端口号
app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
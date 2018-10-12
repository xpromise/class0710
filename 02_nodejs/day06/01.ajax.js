var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.get('/testAjax', function (req, res) {
  console.log(req.query);
  res.send('这是服务器返回的响应');
})

app.use(bodyParser.urlencoded({extended: true}));

app.post('/testAjax', bodyParser.text(), function (req, res) {
  /*
    Content-Type: text/plain;charset=UTF-8
    解析： bodyParser.text()
    Content-Type: application/x-www-form-urlencoded
    解析： bodyParser.urlencoded()
    Content-Type: application/json
    解析： bodyParser.json()
    如果是流
    解析：bodyParser.raw()
   */
  console.log('*********');
  console.log(req.body);  // {"username":"sunwukong","pwd":123456}
  res.send('这是服务器返回的响应');
})

app.get('/testJSONP', function (req, res) {
  //获取请求参数
  var callback = req.query.callback;
  //去数据库中查找数据
  var data = {
    username: 'sunwukong',
    age: 18
  }
  //jsonp  json with padding
  console.log(callback + '(' + JSON.stringify(data) + ')');
  //getData({"username":"sunwukong","age":18})
  //返回响应
  res.send(callback + '(' + JSON.stringify(data) + ')');

})

app.get('/testCors', function (req, res) {
  /*
    cors：官方提供的解决方案
      特点：
        1. 兼容性较差
        2. 能够满足所有的请求方式
   */
  
  //设置响应头
  // res.set('Access-Control-Allow-Origin', '*');  //允许所有网址跨域
  res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send('这是cors返回的响应');
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
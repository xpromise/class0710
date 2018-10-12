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

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
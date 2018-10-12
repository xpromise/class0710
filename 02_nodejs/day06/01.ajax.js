var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/testAjax', function (req, res) {
  console.log(req.query);
  res.send('这是服务器返回的响应');
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
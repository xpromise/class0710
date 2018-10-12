var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/ajax', function (req, res) {
  console.log('接受到了前端请求~');
  setTimeout(function () {
    res.send('9527');
  }, 10000)
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
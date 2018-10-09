var express = require('express');
var app = express();
//内置中间件
app.use(express.static('public'));

//注册路由
app.post('/regist', function (req, res) {
  /*
    1. 获取请求参数
    2. 验证密码和确认密码是否一致
    3. 使用正则表达式验证用户填写的信息是否符合规则
    4. 去数据库中查找账号是否存在
    5. 不存在，注册，将数据保存在数据库中
   */
})

//登录路由
app.post('/login', function (req, res) {

})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
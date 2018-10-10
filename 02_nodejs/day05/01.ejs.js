var express= require('express');
var app = express();
/*
  ejs: 高效js模板引擎，用来编译解析设置模板语法
  
  使用：
    1. 下载
      npm i ejs
    2. 配置模板资源目录
      app.set('views', '模板资源目录');
    3. 配置使用模板引擎
      app.set('view engine', 'ejs');
    4. 渲染模板资源
      res.render('要渲染的模板资源', {要渲染到模板资源的数据});
 */
// 配置模板资源目录
app.set('views', './views');
// 配置使用模板引擎
app.set('view engine', 'ejs');

app.get('/ejsTest', function (req, res, next) {
  //定义数据
  var data = [{
    username: '<h1>孙悟空</h1>',
    age: 19
  }, {
    username: '<h1>孙悟空</h1>',
    age: 20
  }, {
    username: '<h1>孙悟空</h1>',
    age: 21
  }]
  //返回响应，将ejs模板资源编译好后返回给客户端
  // res.render('index.ejs', {data: data, flag: true});
  res.render('index', {data: data, flag: true});
})

app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
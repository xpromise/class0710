/*
  此模块用来连接数据库
 */
//引入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
//绑定事件监听
mongoose.connection.once('open', function (err) {
  if (!err) {
    console.log('数据库连接成功了~');
  } else {
    console.log(err);
  }
})

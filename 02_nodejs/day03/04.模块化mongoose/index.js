/*
  主模块
 */
//引入连接数据库的模块
require('./db/db');
//引入模型对象
var Students = require('./model/students');

//使用模型对象
Students.findOne({}, function (err, data) {
  if (!err && data) {
    //修改文档对象
    data.age += 1;
    //保存数据
    data.save();
  } else {
    console.log(err);
  }
})

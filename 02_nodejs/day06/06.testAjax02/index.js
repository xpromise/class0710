var express = require('express');
require('./db');
var Cities = require('./model/cities');
var app = express();

//获取省份信息
app.get('/getProvince', function (req, res) {
  //去数据库中查询所有省份的数据
  Cities.find({level: 1}, {name: 1, province: 1, _id: 0}, function (err, data) {
    if (!err && data.length) {
      //找到了数据并且方法没有出错, 返回响应
      res.json({status: '1', data: data});
    } else {
      //返回响应
      res.json({status: '0'});
    }
  })
})

//获取城市信息
app.get('/getCity', function (req, res) {
  //获取省份信息
  var province = req.query.province;
  //去数据库中查询所有省份的数据
  Cities.find({level: 2, province: province}, {name: 1, city: 1, _id: 0}, function (err, data) {
    if (!err && data.length) {
      //找到了数据并且方法没有出错, 返回响应
      res.json({status: '1', data: data});
    } else {
      res.json({status: '0'});
    }
  })
})

//获取区县信息


app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了');
  else console.log(err);
})
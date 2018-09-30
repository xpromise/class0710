/*
  简单读取文件：
    fs.readFile(path[, options], callback)
      - path
      - options 可选值
        - flags
        - encoding
      - callback 回调函数
        - err  错误对象
        - data 读取的内容
 */

var fs = require('fs');

fs.readFile('test2.txt', function (err, data) {
  if (!err) {
    console.log(data);  //buffer
    console.log(data.toString());
  } else {
    console.log(err);
  }
})
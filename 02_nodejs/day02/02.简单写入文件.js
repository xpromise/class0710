/*
  简单写入文件：
    fs.writeFile(file, data[, options], callback)
      - file 文件路径
      - data 写入的内容 string/buffer
      - options 可选值
        - encoding
        - mode
        - flag
      - callback 回调函数
        - err
 */
var fs = require('fs');

var buf = Buffer.from('hello atguigu');

fs.writeFile('test1.txt', buf, function (err) {
  if (!err) {
    console.log('文件写入成功');
  } else {
    console.log(err);
  }
})
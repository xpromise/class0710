/*
  流式读取文件：
    fs.createReadStream(path[, options])
      - path
      - options
        flags <string> 详见支持的文件系统flag。默认为 'r'。
        encoding <string> 默认为 null。
        fd <integer> 默认为 null。
        mode <integer> 默认为 0o666。
        autoClose <boolean> 默认为 true。
        start <integer>
        end <integer> 默认为 Infinity。
        highWaterMark <integer> 默认为 64 * 1024。  每次读取的最大值 64kb
 */

var fs = require('fs');

//创建可读流
var rs = fs.createReadStream('C:\\Users\\web\\Desktop\\简单读取文件.avi');
//创建可写流
var ws = fs.createWriteStream('./test.avi');

//绑定事件监听
rs.on('open', function () {
  console.log('可读流 文件打开了');
})

rs.on('close', function () {
  console.log('可读流 文件关闭了');
  ws.end();  //关闭可写流
})

ws.on('open', function () {
  console.log('可写流 文件打开了');
})

ws.on('close', function () {
  console.log('可写流 文件关闭了');
})

//读取文件
rs.on('data', function (data) {
  // console.log(data);
  // console.log(data.length); // 65536 = 64 * 1024
  ws.write(data);
  /*if (data.length < 65536) {
    ws.end();  //关闭可写流
  }*/
})
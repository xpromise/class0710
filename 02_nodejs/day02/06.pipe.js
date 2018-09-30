
var fs = require('fs');

//创建可读流
var rs = fs.createReadStream('C:\\Users\\web\\Desktop\\简单读取文件.avi');
//创建可写流
var ws = fs.createWriteStream('./test.avi');

//给可读流和可写流架一个管道
rs.pipe(ws);
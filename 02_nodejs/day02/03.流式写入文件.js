/*
  流式写入文件：
    fs.createWriteStream(path[, options])
      - path 文件路径
      - options
        - flags <string> 详见支持的文件系统flag。默认为 'w'。
        - encoding <string> 默认为 'utf8'。
        - fd <integer> 默认为 null。
        - mode <integer> 默认为 0o666。
        - autoClose <boolean> 默认为 true。  是否在写入完成后自动关闭流
        - start <integer>  写入的起始位置
 */
//引入fs模块
var fs = require('fs');
//创建可写流
var ws = fs.createWriteStream('test2.txt');

//绑定事件监听
ws.on('open', function () {
  console.log('文件打开成功了~');
})
ws.on('close', function () {
  console.log('文件关闭成功了~');
})

//写入内容
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');

//手动结束写入
// ws.close();
ws.end();  //当方法调用时，会关闭流，会自动关闭文件




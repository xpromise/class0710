/*
  fs文件系统：同步写入文件
  步骤：
    1. 打开文件
      fs.openSync(path, flags[, mode])
      - path 打开文件的路径
      - flags 要对文件进行的操作  'w'  'r'  'a'追加
      - mode 可选值，默认值：0o666 设置文件的操作权限
        0o111 文件可执行
        0o222 文件可写入
        0o444 文件可读取
        0o666 文件可读可写
      - 返回值 fd 文件描述符
      
    2. 写入文件
      fs.writeSync(fd, string[, position[, encoding]])
        - fd 文件描述符
        - string 要写入的内容
        - position 要写入文件的起始位置 可选值，默认值0
        - encoding 文件的编码方式 可选值，默认值utf8
        
    3. 关闭文件
      fs.closeSync(fd)
        - fd 文件描述符
 */

var fs = require('fs');

//打开文件
var fd = fs.openSync('test.txt', 'w', 0o666);
console.log(fd); // 3
//写入文件
fs.writeSync(fd, '今天天气真晴朗', 0, 'utf8');
//关闭文件
fs.closeSync(fd);


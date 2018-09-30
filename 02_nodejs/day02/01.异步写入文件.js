/*
  异步写入文件：
    1. 打开文件
      fs.open(path, flags[, mode], callback)
        - path 文件路径
        - flags 要对文件执行的操作 'w' 'r'  'a'
        - mode 设置文件的权限 默认值0o666 '0666'
        - callback 回调函数
          - err <Error>
            - 方法出错了，就会是一个错误对象{}
            - 方法没出错，就是null
            - 错误优先机制，优先处理错误信息（今后node中的回调函数，默认第一个参数就是err）
          - fd 文件描述符
    2. 写入文件
      fs.write(fd, string[, position[, encoding]], callback)
        - fd 文件描述符
        - string 写入文件内容
        - position 可选值，要写入文件的起始位置，默认值0
        - encoding 可选值，文件内容的编码方式，默认值utf8
        - callback 回调函数
          - err
          - written 写入内容字节大小
          - string 写入内容
    3. 关闭文件
      fs.close(fd, callback)
 */
//引入模块
var fs = require('fs');
//打开文件
fs.open('test.txt', 'w', function (err, fd) {
  if (!err) {
    //方法没有出错
    console.log(err, fd); // null 3
    //写入文件
    fs.write(fd, '马上就要国庆了~', function (err, written, string) {
      if (!err) {
        console.log(written, string);
      } else {
        console.log(err);
      }
      //不管写入成功/失败，都要关闭文件
      //关闭文件
      fs.close(fd, function (err) {
        if (!err) {
          console.log('文件关闭成功了');
        } else {
          console.log(err);
        }
      })
    })
  } else {
    //方法出错了
    console.log(err);
  }
})


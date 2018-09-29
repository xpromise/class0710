

/*
  创建buffer
 */

// var buf = new Buffer(10);  不建议使用，被废弃了，性能差

/*var buf = Buffer.allocUnsafe(10);  // 里面可能包含敏感数据，性能最好
/!*
  00 - ff     16进制
  0 - 255     10进制
  00000000 - 11111111  2进制
  
  普通英文 1个字节
  中文  3个字节
  
  最小存储单元 bit 位
  1 byte = 8 bit
  1 kb = 1024 byte
  1 mb = 1024 kb
  1 gb = 1024 mb
 *!/
console.log(buf);
console.log(buf[0]);  //默认转化成10进制显示
console.log(buf.length);

buf.forEach(function (item, index) {
  console.log(item, index);
})

buf.fill(0);*/
// var buf = Buffer.alloc(10);  //里面都是0， 性能稍差

// var buf = Buffer.from('hello atguigu');
var buf = Buffer.from('尚硅谷');
console.log(buf);
console.log(buf.toString());


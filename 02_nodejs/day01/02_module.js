/*
  commonjs模块化：
    - 引入模块方法：require(模块路径)
      1. 模块路径必须以 ./ 或 ../ 开头，如果不是就会报错 Cannot find module 'module1'
      2. 默认补充模块的文件扩展名，只能补充 .js  .json  .node 三种文件扩展名，如果是其他文件就找不到
        - node中只能解析三种文件 js  json node。其他文件都解析不了，一旦引入就直接报错
      
    - 暴露模块方法：exports  module.exports
      exports   只能exports.xxx暴露内容
      module.exports 既能module.exports.xx暴露，也能module.exports = {}暴露
      
      模块暴露本质的是什么？
        就是module.exports指向的对象
 */

//引入其他模块的内容
var m1 = require('./module1');
var m2 = require('./module2');

// console.log(m1.add(10, 20));
console.log(m1); // {}
console.log(m2.sum(1, 2, 3, 4));


/*
var module = {
  exports: {}
}

var exports = module.exports;
exports.b = 123;

console.log(module.exports); // { b: 123 }

exports = {
  b: 123
}

console.log(module.exports);  // {}
*/

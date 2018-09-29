/*
  commonjs模块化：
    - 引入模块方法：require(模块路径)
      1. 自定义模块：模块路径必须以 ./ 或 ../ 开头，如果不是就会报错 Cannot find module 'module1'
         npm下载的模块和node自带的核心模块：直接写模块名
         
         模块查找规则：
          1. 如果是核心模块，核心模块在node安装的时候就已经提前编译好了，直接上node编译的内存中找到
          2. 路径是否以./ 或 ../ 开头
            如果是，就当自定义模块的规则区查找，去指定路径下找
            如果不是，去node_modules文件夹内找，如果找到就返回
              如果没找到，去上一级目录下node_modules文件夹内找，如果找到就返回
              如果没找到，一直往上找，一直找到磁盘根目录，如果找到就返回
              如果没找到，就会报错
         
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

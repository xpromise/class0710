
/*
  在node中，默认每一个js文件就是一个模块，每一个模块都会包裹一层函数。
  - 隐藏内部实现
  - 隔离变量
  - 通过expors/module.exports暴露内容，外部才能够看到
  
  function (exports, require, module, __filename, __dirname) { }
    exports: 暴露模块内容
    require: 引入模块
    module: module.exports 暴露模块内容
    __filename: 当前文件的绝对路径
    __dirname: 当前文件夹的绝对路径
 */

// console.log(this);  // {}
console.log(arguments.callee.toString());

console.log(__filename); // C:\Users\web\Desktop\0710\class0710\02_nodejs\day01\03_function_in_node.js
console.log(__dirname); // C:\Users\web\Desktop\0710\class0710\02_nodejs\day01
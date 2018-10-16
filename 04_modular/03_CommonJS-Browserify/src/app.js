/*
  主模块
    commonjs默认情况下浏览器是没办法编译识别的，我要想在浏览器端使用，
    需要借助工具帮我们将commonjs模块化语法编译成浏览器能识别的语法：browserify
      通过 npm i browserify -g 下载
      使用：
        browserify 入口文件路径 -o 输出文件路径
        browserify ./src/app.js -o ./build/build.js
     特点：同步加载，有缓存
 */
const m1 = require('./module1');
const {mul, count} = require('./module2');

console.log(mul(2, 5));
console.log(count(5, 2));
console.log(m1(2, 5));



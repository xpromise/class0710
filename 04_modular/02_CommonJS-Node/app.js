/*
  主模块
 */
const m1 = require('./src/module1');
const {mul, count} = require('./src/module2');

console.log(mul(2, 5));
console.log(count(5, 2));
console.log(m1(2, 5));



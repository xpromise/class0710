/*
主模块
 */

define((require, exports, module) => {
  console.log('主模块开始执行了~');
  //同步引入模块2
  // const {alerter} = require('./src/module2');
  
  //异步引入模块2
  require.async('./src/module2', ({alerter}) => {
    alerter();
  })
  
  console.log('模块2下面的代码');
})

console.log('********');
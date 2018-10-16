/*
  定义有依赖的模块
 */

define((require, exports, module) => {
  console.log('模块2开始执行了~');
  //引入模块1
  const m1 = require('./module1');
  //获取模块1数据
  const msg = m1();
  //定义当前模块的方法
  function alerter() {
    alert(msg);
  }
  //暴露出去
  exports.alerter = alerter;
})
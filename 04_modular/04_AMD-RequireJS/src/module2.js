/*
  定义有依赖的模块
  define([依赖的模块], (声明使用模块) => {})
 */

define(['module1'], m1 => {
  console.log('m2模块运行了~');
  //获取数据
  const msg = m1();
  //定义方法
  function alerter() {
    alert(msg);
  }
  //暴露出去
  return alerter;
})
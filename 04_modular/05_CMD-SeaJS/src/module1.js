/*
  定义没有依赖的模块
 */
define((require, exports, module) => {
  console.log('模块1开始执行了~');
  //定义数据
  const msg = 'hello atguigu';
  //定义方法
  function dataServer() {
    return msg.toUpperCase();
  }
  //暴露
  module.exports = dataServer;
})
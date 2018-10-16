/*
  定义没有依赖模块
  define(() => {})
 */

define(() => {
  console.log('m1模块运行了~');
  //初始化数据
  const msg = 'hello atguigu';
  //定义方法
  function dataServer() {
    return msg.toUpperCase();
  }
  //将模块内容暴露出去
  return dataServer;
})
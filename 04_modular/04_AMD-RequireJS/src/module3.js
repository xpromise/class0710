/*
  定义固定名字的模块
  define(模块名称, [依赖模块], () => {})
 */

define('math', [], () => {
  function add(x, y) {
    return x + y;
  }
  //暴露内容
  return add;
})
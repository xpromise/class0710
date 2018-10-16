/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */
//IIFE模式
((window) => {
  var obj = {
  
  }
  function add(x, y){
    return x + y;
  }
  
  function mul(x, y) {
    return x * y;
  }
  window.add = add;
  window.mul = mul;
})(window)





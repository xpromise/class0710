/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */


((window, $) => {
  var obj = {
  
  }
  function add(x, y){
    return x + y;
  }
  
  $('body').css('background', 'pink');
  
  function mul(x, y) {
    return x * y;
  }
  window.add = add;
  window.mul = mul;
})(window, jQuery)
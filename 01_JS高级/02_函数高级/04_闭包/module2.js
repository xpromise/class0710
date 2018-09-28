
(function (window) {
  
  var msg = 'hello atguigu';
  
  function doSomething() {
    console.log('doSomething()' + msg);
  }
  
  function doOtherthing() {
    console.log('doOtherthing()' + msg);
  }
  
  var module = {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  };
  
  window.module = module;
  
  // window.doSomething = doSomething;
  // window.doOtherthing = doOtherthing
  
})(window)
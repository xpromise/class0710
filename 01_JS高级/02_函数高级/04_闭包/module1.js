
function module() {
  
  var msg = 'hello atguigu';
  
  function doSomething() {
    console.log('doSomething()' + msg);
  }
  
  function doOtherthing() {
    console.log('doOtherthing()' + msg);
  }

  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
  
}
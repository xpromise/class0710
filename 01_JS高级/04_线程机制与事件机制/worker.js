function fibonacci(num) {
  return num < 3 ? 1 : fibonacci(num - 2) + fibonacci(num - 1);
}
//分线程要接受主线程的通知
//一旦主线程通知分线程，就立即触发onmessage函数
var onmessage = function (e) {
  console.log('分线程接受了主线程的消息');
  //接受主线程通知的内容
  // console.log(e);
  var value = e.data;
  //开始计算
  var number = fibonacci(value);
  //分线程将值发送给主线程
  postMessage(number);
}
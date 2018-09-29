/*
  node中的js：
    DOM: 不包含任何DOM
    BOM:
      没有window, 使用global
      console.log()
      setInterval()
      setTimeout()
    ES:
      基本实现了ES
 */

// console.log(global);
// console.log(window);  //window is not defined
/*
  setTimeout()
  setInterval()
  setImmediate()  立即执行函数
  Buffer()
  process.nextTick()  立即执行函数
  console
 */


process.nextTick(function () {
  console.log('process.nextTick()');
})

setTimeout(function () {
  console.log('setTimeout()');
}, 1000)

setImmediate(function () {
  console.log('setImmediate()');
})

/*
process.nextTick()
setTimeout()
setImmediate()

  node中事件轮询机制：使用libuv库实现
  事件轮询机制：
    timers：定时器阶段： 开始计时，当到点了会指定相应的回调函数
    pending callbacks：系统操作，TCP
    idle, prepare：准备工作
    poll： 轮询阶段   轮询队列
      如果轮询队列不为空，依次取出同步执行相应的回调函数，直到轮询队列为空，或者达到系统最大限制
      如果轮询队列为空
        如果之前设置过setImmediate函数
          直接进入下一个check阶段
        如果之前没有设置过setImmediate函数
          在poll阶段停留等待，
            直到轮询队列添加了回调函数，就会执行其中的函数
            如果定时器到点了，也会进入下一个check阶段
    check 负责执行setImmediate设置的回调函数
    close callbacks 关闭阶段
    
    process.nextTick能在任意阶段优先执行
 */
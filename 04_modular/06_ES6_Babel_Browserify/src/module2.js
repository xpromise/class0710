/*
  统一暴露
    export {xx: xx, yy: yy}
 */
function foo1() {
  console.log('foo1()');
}
function foo2() {
  console.log('foo2()');
}
//对象的简写方式
export {foo1, foo2};
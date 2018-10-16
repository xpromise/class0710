/**
 * 全局函数模式: 将不同的功能封装成不同的全局函数
 * 问题: Global被污染了, 很容易引起命名冲突
 */
function add(x, y){
  return x + y;
}

function mul(x, y) {
  return x * y;
}

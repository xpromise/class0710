
function add(x, y) {
  return x + y;
}

//暴露模块中的内容，只有暴露的内容其他模块才能使用
exports.add = add;
//报错，暴露的内容不存在
/*exports = {
  add: add
}*/

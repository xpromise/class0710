
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

//暴露出去
module.exports = {
  sum: sum
}
// module.exports.sum = sum;


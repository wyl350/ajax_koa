const R = require('./ramda')
const __ = R.__

// 二、数学运算
// add：返回两个值的和。
// subtract：返回第一个参数减第二个参数的差。
// multiply：返回两个值的积。
// divide：返回第一个参数除以第二个参数的商。

console.log(
  R.add(7)(10), // 17
  R.subtract(10)(8), // 2
  R.multiply(2)(5),  // 10
  R.divide(71)(100),// 0.71
);

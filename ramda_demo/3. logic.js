const R = require('./ramda')
const __ = R.__

// 三、逻辑运算

{// either：接受两个函数作为参数，只要有一个返回true，就返回true，否则返回false。相当于||运算。
  var gt10 = x => x > 10;
  var even = x => x % 2 === 0;
  var f = R.either(gt10, even);
  console.log(
    f(101), // true
    f(8), // true
  );
}

{// both：接受两个函数作为参数，只有它们都返回true，才返回true，否则返回false，相当于&&运算。
  var gt10 = x => x > 10;
  var even = x => x % 2 === 0;
  var f = R.both(gt10, even);
  console.log(
    f(15), // false
    f(30), // true
  );
}

{// allPass：接受一个函数数组作为参数，只有它们都返回true，才返回true，否则返回false。
  var gt10 = x => x > 10;
  var even = x => x % 2 === 0;
  var isEvenAndGt10 = R.allPass([gt10, even]);
  console.log(
    isEvenAndGt10(15), // false
    isEvenAndGt10(30), // true
  );
}

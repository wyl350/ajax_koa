
const R = require('./ramda')
const __ = R.__

// 一、比较运算

{// gt：判断第一个参数是否大于第二个参数。
  console.log(
    R.gt(2)(1), // true
    R.gt('a')('z'), // false
  )
}

{// gte：判断第一个参数是否大于等于第二个参数。
  console.log(
    R.gte(2)(2), // true
    R.gte('a')('z'), // false
  )
}

{// lt：判断第一个参数是否小于第二个参数。
  console.log(
    R.lt(2)(1), // false
    R.lt('a')('z'), // true
  )
}
{// lte：判断第一个参数是否小于等于第二个参数。
  console.log(
    R.lte(2)(2), // true
    R.lte('a')('z'), // true
  )
}

{// equals：比较两个值是否相等（支持对象的比较）。
  console.log(
    R.equals(1)(1), // true
    R.equals(1)('1'), // false
    R.equals([1, 2, 3])([1, 2, 3]), // true
    R.equals({ a: 1, b: 2 })({ a: 1, b: 2 }), // true
  );
  {
    var a = {};
    a.v = 'a';
    var b = {};
    b.v = 'b';
    console.log(
      a.v,
      b.v,
      R.equals(a)(b)
    );// false 
  }

  {  
    var a = {};
    a.v = a;
    var b = {};
    b.v = b;
    console.log(
      a.v,
      b.v,
      R.equals(a)(b)
    );// true
  }
}

{// eqBy：比较两个值传入指定函数的运算结果是否相等。
  console.log(
    R.eqBy(Math.abs, 5)(-5)// true
  );
}

// http://www.ruanyifeng.com/blog/2017/03/ramda.html
const R = require('./ramda')

let square = n => n * n;

console.log(
  R.map(square, [4, 8]),
  R.map(square)([4, 8]),
);

let mapSquare = R.map(square)
console.log(
  mapSquare([4, 8])
);

// O、R.__ 属性的用处。
{
  g = R.curry((a, b, c) => {
    return a + b + c
  })
  const _ = R.__
  console.log(
    'R.__ 属性的用处',
    g(1, 2, 3),
    g(_, 2, 3)(1),
    g(_, _, 3)(1)(2),
    g(_, _, 3)(1, 2),
    g(_, 2, _)(1, 3),
    g(_, 2)(1)(3),
    g(_, 2)(1, 3),
    g(_, 2)(_, 3)(1),
  );
} // 可以很方便的调整参数的顺序和位置。

// 一、比较运算
{
  console.log(
    '一、比较运算',
    '\n',
    R.gt(2)(1), // true
    '\n',
    R.gt('a')('z'), // false
    '\n',
    R.gte(2)(2), // true
    '\n',
    R.gte('a')('z'), // false
    '\n',
    R.lt(2)(1), // false
    '\n',
    R.lt('a')('z'), // true
    '\n',
    R.lte(2)(2), // true
    '\n',
    R.lte('a')('z'), // true
    '\n',
    R.eq(1)(1), // true
    '\n',
    R.eq(1)('1'), // false
    '\n',
    R.eq([1, 2, 3])([1, 2, 3]), // true
  );

}


// 二、数学运算
{
  console.log(
    '二、数学运算',
    '\n',
    R.add(7)(10), // 17
    '\n',
    R.subtract(10)(8), // 2
    '\n',
    R.multiply(2)(5),  // 10
    '\n',
    R.divide(71)(100),// 0.71
  );
}


// 三、逻辑运算
{
  let gt10 = x => x > 10;
  let even = x => x % 2 === 0;
  let f = R.either(gt10, even);
  console.log(
    '三、逻辑运算',
    '\n',
    'either',
    '\n',
    f(101), // true
    '\n',
    f(8), // true
  );
}

{
  let gt10 = x => x > 10
  let even = x => x % 2 === 0
  let f = R.both(gt10, even)
  console.log(
    'both',
    '\n',
    f(15), // false
    '\n',
    f(30), // true
  );
}
{
  let gt10 = x => x > 10;
  let even = x => x % 2 === 0;
  let isEvenAndGt10 = R.allPass([gt10, even]);
  console.log(
    'allPass',
    '\n',
    isEvenAndGt10(15), // false
    '\n',
    isEvenAndGt10(30), // true
  );

}

// 四、字符串方法
{
  console.log(
    '四、字符串方法',
    '\n',
    '\n',
    R.split('.')('a.b.c.xyz.d'),// ['a', 'b', 'c', 'xyz', 'd']
    '\n',
    R.test(/^x/)('xyz'), // true
    '\n',
    R.test(/^y/)('xyz'), // false
    '\n',
    R.match(/([a-z]a)/g)('bananas'),// ['ba', 'na', 'na']
    '\n',
    R.match(/a/)('b'),// []
    '\n',
    '\n',
    // R.match(/a/)(null),  // TypeError: null does not have a method named "match"
  );
}

// 五、函数
{
  console.log('五、函数')
  {
    let increaseOne = x => x + 1
    let negative = x => -1 * x
    let f = R.pipe(Math.pow, negative, increaseOne)
    console.log(
      '\n',
      f(3, 4),// -80 => -(3^4) + 1

    )
    console.log(
      R.compose(Math.abs, R.add(1), R.multiply(2))(-4), // 7
    );

  }
  {
    let sumOfArr = arr => {
      let sum = 0
      arr.forEach(i => sum += i)
      return sum
    }
    let lengthOfArr = arr => arr.length
    let average = R.converge(R.divide, [sumOfArr, lengthOfArr])

    console.log(
      average([1, 2, 3, 4]),
    )
  }

  {
    let toUpperCase = s => s.toUpperCase();
    let toLowerCase = s => s.toLowerCase();
    let strangeConcat = R.converge(R.concat, [toUpperCase, toLowerCase])
    console.log(
      strangeConcat("Yodel")
    );
    // "YODELyodel"
    // 相当于 R.concat('YODEL', 'yodel')
  }
}
// 六、
{
  const average = R.converge(R.divide, [R.sum, R.length])
  average([1, 2, 3, 4, 5, 6, 7]) //=> 4

  const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
  console.log(
    strangeConcat("Yodel") //=> "YODELyodel"
  )
}
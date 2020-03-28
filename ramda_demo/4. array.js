const R = require('./ramda')
const __ = R.__

// 四、字符串

{// split：按照指定分隔符将字符串拆成一个数组。
  console.log(
    R.split('.')('a.b.c.xyz.d')// ['a', 'b', 'c', 'xyz', 'd']
  );
}

{// test：判断一个字符串是否匹配给定的正则表达式。
  console.log(
    R.test(/^x/)('xyz'),// true
    R.test(/^y/)('xyz'),// false
  );
}

{// match：返回一个字符串的匹配结果。
  console.log(
    R.match(/([a-z]a)/g)('bananas'),// ['ba', 'na', 'na']
    R.match(/a/)('b'),// []
    // R.match(/a/)(null),// TypeError: null does not have a method named "match"
  );
}

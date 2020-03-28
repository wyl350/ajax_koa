const R = require('./ramda')
const __ = R.__

// 六、数组
// 6.1 数组的特征判断

{// contains：如果包含某个成员，返回true。针对数组和对象都是可用的。
  console.log(
    R.contains(3)([1, 2, 3]), // true
    R.contains(4)([1, 2, 3]),// false
    R.contains({ name: 'Fred' })([{ name: 'Fred' }]),// true
    R.contains([42])([[42]]) ,// true
  )
}

{// all：所有成员都满足指定函数时，返回true，否则返回false
  const equals3 = R.equals(3)
  console.log(
    R.all(equals3)([3, 3, 3, 3]), // true
    R.all(equals3)([3, 3, 1, 3]),// false
  )
}

{// any：只要有一个成员满足条件，就返回true。
  const lessThan0 = R.flip(R.lt)(0)
  const lessThan2 = R.flip(R.lt)(2)
  console.log(
    R.any(lessThan0)([1, 2]), // false
    R.any(lessThan2)([1, 2]), // true
  )
}

{// none：没有成员满足条件时，返回true。
  const isEven = n => n % 2 === 0
  console.log(
    R.none(isEven)([1, 3, 5, 7, 9, 11]),// true
    R.none(isEven)([1, 3, 5, 7, 8, 11]),// false
  )
}

// 6.2 数组的截取和添加

{// head：返回数组的第一个成员。
  console.log(
    R.head(['fi', 'fo', 'fum']), // 'fi'
    R.head([]),  // undefined
    R.head('abc'), // 'a'
    R.head('') ,// ''
  )
}

{// last：返回数组的最后一个成员。
  console.log(
    R.last(['fi', 'fo', 'fum']), // 'fum'
    R.last([]), // undefined
    R.last('abc'), // 'c'
    R.last(''), // ''
  )
}

{// tail：返回第一个成员以外的所有成员组成的新数组。
  console.log(
    R.tail([1, 2, 3]),  // [2, 3]
    R.tail([1, 2]),     // [2]
    R.tail([1]),        // []
    R.tail([]),         // []
    R.tail('abc'),  // 'bc'
    R.tail('ab'),  // 'b'
    R.tail('a'),    // ''
    R.tail(''),    // ''
  )
}

{// init：返回最后一个成员以外的所有成员组成的新数组。
  console.log(
    R.init([1, 2, 3]), // [1, 2]
    R.init([1, 2]),   // [1]
    R.init([1]),    // []
    R.init([]),      // []
    R.init('abc'), // 'ab'
    R.init('ab'), // 'a'
    R.init('a'), // ''
    R.init(''), // ''
  )
}

{// nth：取出指定位置的成员。
  const list = ['foo', 'bar', 'baz', 'quux']
  console.log(
    R.nth(1)(list), // 'bar'
    R.nth(-1)(list), // 'quux'
    R.nth(-99)(list), // undefined
    R.nth(2)('abc'), // 'c'
    R.nth(3)('abc'),// ''
  )
}

{// take：取出前 n 个成员。
  console.log(
    R.take(1)(['foo', 'bar', 'baz']), // ['foo']
    R.take(2)(['foo', 'bar', 'baz']), // ['foo', 'bar']
    R.take(3)(['foo', 'bar', 'baz']),// ['foo', 'bar', 'baz']
    R.take(4)(['foo', 'bar', 'baz']),// ['foo', 'bar', 'baz']
    R.take(3)('ramda'),          // 'ram'
  )
}

{// takeLast：取出后 n 个成员。
  console.log(
    R.takeLast(1)(['foo', 'bar', 'baz']), // ['baz']
    R.takeLast(2)(['foo', 'bar', 'baz']), // ['bar', 'baz']
    R.takeLast(3)(['foo', 'bar', 'baz']), // ['foo', 'bar', 'baz']
    R.takeLast(4)(['foo', 'bar', 'baz']), // ['foo', 'bar', 'baz']
    R.takeLast(3)('ramda'),               // 'mda'
  )
}

{// slice：从起始位置（包括）开始，到结束位置（不包括）为止，从原数组截取出一个新数组。
  console.log(
    R.slice(1, 3)(['a', 'b', 'c', 'd']), // ['b', 'c']
    R.slice(1, Infinity)(['a', 'b', 'c', 'd']), // ['b', 'c', 'd']
    R.slice(0, -1)(['a', 'b', 'c', 'd']), // ['a', 'b', 'c']
    R.slice(-3, -1)(['a', 'b', 'c', 'd']), // ['b', 'c']
    R.slice(0, 3)('ramda'),// 'ram'
  )
}

{// remove：移除开始位置后的n个成员。
  console.log(
    R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]), // [1,2,6,7,8]
    R.remove(2)(3)([1, 2, 3, 4, 5, 6, 7, 8]), // [1,2,6,7,8]
  )
}

{// insert：在指定位置插入给定值。
  console.log(
    R.insert(2, 'x')([1, 2, 3, 4]) // [1,2,'x',3,4]
  )
}

{// insertAll：在指定位置，插入另一个数组的所有成员。
  R.insertAll(2, ['x', 'y', 'z'])([1, 2, 3, 4]) // [1,2,'x','y','z',3,4]
}

{// prepend：在数组头部插入一个成员
  console.log(
    R.prepend('fee')(['fi', 'fo', 'fum'])// ['fee', 'fi', 'fo', 'fum']
  )
}

{// append：在数组尾部追加新的成员。
  console.log(
    R.append('tests')(['write', 'more']), // ['write', 'more', 'tests']
    R.append('tests')([]),// ['tests']
    R.append(['tests'])(['write', 'more']), // ['write', 'more', ['tests']]
  )
}

{// intersperse：在数组成员之间插入表示分隔的成员。
  console.log(
    R.intersperse('n')(['ba', 'a', 'a'])// ['ba', 'n', 'a', 'n', 'a']
  )
}

{// join：将数组合并成一个字符串，并在成员之间插入分隔符。
  console.log(
    R.join('|')([1, 2, 3]) // '1|2|3'
  )
}

// 6.3 数组的过滤

{// filter：过滤出符合条件的成员。
  const isEven = n => n % 2 === 0
  console.log(
    R.filter(isEven)([1, 2, 3, 4]) // [2, 4]
  )
}

{// reject：过滤出所有不满足条件的成员。
  const isOdd = (n) => n % 2 === 1
  console.log(
    R.reject(isOdd)([1, 2, 3, 4]) // [2, 4]
  )
}

{// takeWhile： 一旦满足条件，后面的成员都会被过滤。
  const isNotFour = x => x !== 4
  console.log(
    R.takeWhile(isNotFour)([1, 2, 3, 4, 3, 2, 1]) // [1, 2, 3]
  )
}

{// dropWhile：一旦不满足条件，取出剩余的所有成员。
  const lteTwo = x => x <= 2
  console.log(
    R.dropWhile(lteTwo)([1, 2, 3, 4, 3, 2, 1])// [3, 4, 3, 2, 1]
  )
}

{// without：返回指定值以外的成员。
  console.log(
    R.without([1, 2])([1, 2, 1, 3, 4])// [3, 4]
  )
}

// 6.4 单数组运算

{// countBy：对每个成员执行指定函数以后，返回一个对象，表示各种执行结果分别包含多少成员。
  const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
  const letters = ['a', 'b', 'A', 'a', 'B', 'c']
  console.log(
    R.countBy(Math.floor)(numbers),  // {'1': 3, '2': 2, '3': 1}
    R.countBy(R.toLower)(letters),  // {'a': 3, 'b': 2, 'c': 1}
  )
}

{// splitAt：在给定位置，将原数组分成两个部分。
  console.log(
    R.splitAt(1)([1, 2, 3]), // [[1], [2, 3]]
    R.splitAt(5)('hello world'), // ['hello', ' world']
    R.splitAt(-1)('foobar'), // ['fooba', 'r']
  )
}

{// splitEvery：按照指定的个数，将原数组分成多个部分。
  console.log(
    R.splitEvery(3)([1, 2, 3, 4, 5, 6, 7]),// [[1, 2, 3], [4, 5, 6], [7]]
    R.splitEvery(3)('foobarbaz'),// ['foo', 'bar', 'baz']
  )
}

{// aperture：每个成员与其后给定数量的成员分成一组，这些组构成一个新的数组。
  R.aperture(3)([1, 2, 3, 4, 5, 6, 7])// [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]
}

{// splitWhen：以第一个满足指定函数的成员为界，将数组分成两个部分。
  console.log(
    R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3])// [[1], [2, 3, 1, 2, 3]]
  )
}

{// partition：根据是否满足指定函数，将成员分区。
  console.log(
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars'])// => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
  )
}

{// indexOf：某个值在数组中第一次出现的位置。
  console.log(
    R.indexOf(3)([1, 2, 3, 4]), // 2
    R.indexOf(10)([1, 2, 3, 4]), // -1
  )
}

{// lastIndexOf：某个值在数组中最后一次出现的位置。
  console.log(
    R.lastIndexOf(3)([-1, 3, 3, 0, 1, 2, 3, 4]), // 6
    R.lastIndexOf(10)([1, 2, 3, 4]), // -1
  )
}

{// map：数组的每个成员依次执行某个函数。
  const double = x => x * 2
  console.log(
    R.map(double)([1, 2, 3]) // [2, 4, 6]
  )
}

{// mapIndexed：与map类似，区别是遍历函数可以额外获得两个参数：索引位置和原数组。
  const mapIndexed = R.addIndex(R.map)
  console.log(
    mapIndexed(
      (val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']
    )// ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
  )
}

{// forEach：数组的每个成员依次执行某个函数，总是返回原数组。
  const printXPlusFive = x => console.log(x + 5)
  console.log(
    R.forEach(printXPlusFive, [1, 2, 3]) // [1, 2, 3]
    // logs 6
    // logs 7
    // logs 8
  )
}

{// reduce：数组成员依次执行指定函数，每一次的运算结果都会进入一个累积变量。
  const mySubtract = function (a, b) {
    return a - b
  }
  console.log(
    R.reduce(mySubtract, 0)([1, 2, 3, 4]), // -10
    R.reduce(mySubtract)(0)([1, 2, 3, 4]), // -10
  )
}

{// reduceRight：与reduce类似，区别是数组成员从左到右执行。
  console.log(
    R.reduceRight(R.subtract, 0)([1, 2, 3, 4]) // -2
  )
}


{// reduceWhile：与reduce类似，区别是有一个判断函数，一旦数组成员不符合条件，就停止累积。
  const isOdd = (acc, x) => x % 2 === 1
  const xs = [1, 3, 5, 60, 777, 800]
  const ys = [2, 4, 6]
  console.log(
    R.reduceWhile(isOdd, R.add, 0)(xs), // 9
    R.reduceWhile(isOdd, R.add, 111)(ys), // 111
  )
}

{// sort：按照给定函数，对数组进行排序。
  const diff = function (a, b) { return a - b }
  console.log(
    R.sort(diff)([4, 2, 7, 5])// [2, 4, 5, 7]
  )
}

{// sortWith：按照给定的一组函数，进行多重排序。
  const alice = { name: 'alice', age: 40 }
  const bob = { name: 'bob', age: 30 }
  const clara = { name: 'clara', age: 40 }
  const people = [clara, bob, alice]
  const ageNameSort = R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ])
  console.log(
    ageNameSort(people) //=> [alice, clara, bob]
  )
}

// 这个函数有问题。
// {// adjust：对指定位置的成员执行给定的函数。
//   console.log(
//     R.adjust(R.add(10), 1)([1, 2, 3]), // [1, 12, 3]
//     // R.adjust(R.add(10), 1)([1, 2, 3]), // [1, 12, 3]
//   )
// }

{// ap：数组成员分别执行一组函数，将结果合成为一个新数组。
  console.log(
    R.ap([R.multiply(2), R.add(3)])([1, 2, 3]),// [2, 4, 6, 4, 5, 6]
    R.ap([R.concat('tasty '), R.toUpper])(['pizza', 'salad']),// ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
  )
}

{// flatten：将嵌套数组铺平。
  console.log(
    R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  )
}

{// groupBy：将数组成员依次按照指定条件两两比较，并按照结果将所有成员放入子数组。
  console.log(
    R.groupWith(R.equals)([0, 1, 1, 2, 3, 5, 8, 13, 21]),// [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
    R.groupWith((a, b) => a % 2 === b % 2)([0, 1, 1, 2, 3, 5, 8, 13, 21]),// [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
    // R.groupWith(R.eqBy(isVowel), 'aestiou'),//=> ['ae', 'st', 'iou']
  )
}

// // 6.5 双数组运算

// {// concat：将两个数组合并成一个数组。
//   console.log(
//     R.concat('ABC')('DEF'), // 'ABCDEF'
//     R.concat([4, 5, 6])([1, 2, 3]), // [4, 5, 6, 1, 2, 3]
//     R.concat([])([]), // []
//   );
// }

// {// zip：将两个数组指定位置的成员放在一起，生成一个新数组。
//   console.log(
//     R.zip([1, 2, 3])(['a', 'b', 'c'])// [[1, 'a'], [2, 'b'], [3, 'c']]
//   );
// }

// {// zipObj：将两个数组指定位置的成员分别作为键名和键值，生成一个新对象。
//   console.log(
//     R.zipObj(['a', 'b', 'c'])([1, 2, 3])// {a: 1, b: 2, c: 3}

//   );

// }

// {// xprod：将两个数组的成员两两混合，生成一个新数组。
//   console.log(
//     R.xprod([1, 2])(['a', 'b'])// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

//   );

// }

// {// intersection：返回两个数组相同的成员组成的新数组。
//   console.log(
//     R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]) // [4, 3]

//   );

// }

// {// intersectionWith：返回经过某种运算，有相同结果的两个成员。
//   var buffaloSpringfield = [
//     { id: 824, name: 'Richie Furay' },
//     { id: 956, name: 'Dewey Martin' },
//     { id: 313, name: 'Bruce Palmer' },
//     { id: 456, name: 'Stephen Stills' },
//     { id: 177, name: 'Neil Young' }
//   ];
//   var csny = [
//     { id: 204, name: 'David Crosby' },
//     { id: 456, name: 'Stephen Stills' },
//     { id: 539, name: 'Graham Nash' },
//     { id: 177, name: 'Neil Young' }
//   ];
//   console.log(
//     R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield)(csny)// [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]

//   );
// }

// // difference：返回第一个数组不包含在第二个数组里面的成员。
// {
//   console.log(
//     R.difference([1, 2, 3, 4])([7, 6, 5, 4, 3]), // [1,2]
//     R.difference([7, 6, 5, 4, 3])([1, 2, 3, 4]), // [7,6,5]
//     R.difference([{ a: 1 }, { b: 2 }])([{ a: 1 }, { c: 3 }]), // [{b: 2}]
//   );
// }

// {// differenceWith：返回执行指定函数后，第一个数组里面不符合条件的所有成员。
//   var cmp = (x, y) => x.a === y.a;
//   var l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
//   var l2 = [{ a: 3 }, { a: 4 }];
//   console.log(
//     R.differenceWith(cmp, l1)(l2) // [{a: 1}, {a: 2}]
//   );
// }

// {// symmetricDifference：返回两个数组的非共有成员所组成的一个新数组。
//   console.log(
//     R.symmetricDifference([1, 2, 3, 4])([7, 6, 5, 4, 3]), // [1,2,7,6,5]
//     R.symmetricDifference([7, 6, 5, 4, 3])([1, 2, 3, 4]), // [7,6,5,1,2]
//   );
// }

// {// symmetricDifferenceWith：根据指定条件，返回两个数组所有运算结果不相等的成员所组成的新数组。
//   var eqA = R.eqBy(R.prop('a'));
//   var l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
//   var l2 = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
//   console.log(
//     R.symmetricDifferenceWith(eqA, l1, l2) // [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
//   );
// }

// // 6.6 复合数组

// {// find：返回符合指定条件的成员。
//   var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
//   console.log(
//     R.find(R.propEq('a', 2))(xs), // {a: 2}
//     R.find(R.propEq('a', 4))(xs), // undefined
//   );
// }

// {// findIndex：返回符合指定条件的成员的位置。
//   var xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
//   console.log(
//     R.findIndex(R.propEq('a', 2))(xs), // 1
//     R.findIndex(R.propEq('a', 4))(xs), // -1
//   );
// }

// {// findLast：返回最后一个符合指定条件的成员。
//   var xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
//   console.log(
//     R.findLast(R.propEq('a', 1))(xs), // {a: 1, b: 1}
//     R.findLast(R.propEq('a', 4))(xs), // undefined
//   );
// }

// {// findLastIndex：返回最后一个符合指定条件的成员的位置。
//   var xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
//   console.log(
//     R.findLastIndex(R.propEq('a', 1))(xs), // 1
//     R.findLastIndex(R.propEq('a', 4))(xs), // -1

//   );

// }

// {// pluck：取出数组成员的某个属性，组成一个新数组。
//   console.log(
//     R.pluck('a')([{ a: 1 }, { a: 2 }]), // [1, 2]
//     R.pluck(0)([[1, 2], [3, 4]]),   // [1, 3]
//   );
// }

// {// project：取出数组成员的多个属性，组成一个新数组。
//   var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
//   var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
//   var kids = [abby, fred];
//   console.log(
//     R.project(['name', 'grade'])(kids)// [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
//   )
// }

// {// transpose：将每个成员相同位置的值，组成一个新数组。
//   console.log(
//     R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]),// [[1, 2, 3], ['a', 'b', 'c']]
//     R.transpose([[1, 2, 3], ['a', 'b', 'c']]),// [[1, 'a'], [2, 'b'], [3, 'c']]
//     R.transpose([[10, 11], [20], [], [30, 31, 32]]),// [[10, 20, 30], [11, 31], [32]]
//   );
// }

// {// mergeAll：将数组的成员合并成一个对象。
//   console.log(
//     R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]),// {foo:1,bar:2,baz:3}
//     R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]),// {foo:2, bar:2}
//   );
// }

// {// fromPairs：将嵌套数组转为一个对象。
//   console.log(
//     R.fromPairs([['a', 1], ['b', 2], ['c', 3]])// {a: 1, b: 2, c: 3}
//   );
// }

// {// groupBy：将数组成员按照指定条件分组。
//   var byGrade = R.groupBy(function (student) {
//     var score = student.score;
//     return score < 65 ? 'F' :
//       score < 70 ? 'D' :
//         score < 80 ? 'C' :
//           score < 90 ? 'B' : 'A';
//   });
//   var students = [
//     { name: 'Abby', score: 84 },
//     { name: 'Eddy', score: 58 },
//     { name: 'Jack', score: 69 }
//   ];
//   console.log(
//     byGrade(students)
//   )
//   // {
//   //   'A': [{name: 'Dianne', score: 99}],
//   //   'B': [{name: 'Abby', score: 84}]
//   //   'F': [{name: 'Eddy', score: 58}]
//   // }
// }

// {// sortBy：根据成员的某个属性排序。
//   var sortByFirstItem = R.sortBy(R.prop(0));
//   console.log(
//     sortByFirstItem([[- 1, 1], [-2, 2], [-3, 3]])// [[-3, 3], [-2, 2], [-1, 1]]
//   );
//   var sortByNameCaseInsensitive = R.sortBy(
//     R.compose(R.toLower, R.prop('name'))
//   );
//   var alice = { name: 'ALICE', age: 101 };
//   var bob = { name: 'Bob', age: -10 };
//   var clara = { name: 'clara', age: 314.159 };
//   var people = [clara, bob, alice];
//   console.log(
//     sortByNameCaseInsensitive(people)
//   );// [alice, bob, clara]
// }
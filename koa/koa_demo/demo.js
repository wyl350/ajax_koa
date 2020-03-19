// async function testAsync() {
//   return 'Hello async';
// }
// const result = testAsync();
// console.log(result);

// result.then(function (a) {
//   console.log(a)
// })


// function getData() {
//   return 'zhangsan';
// }
// async function testAsync() {
//   return 'Hello async';
// }


// async function test() {
//   const v1 = await getData();
//   const v2 = await testAsync();
//   console.log(v1, v2);
//   // return 1
// }
// test().then(function (data) {
//   console.log(data);

// })







function findData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}


async function test() {
  const v = await findData();
  console.log(v);
}


test();

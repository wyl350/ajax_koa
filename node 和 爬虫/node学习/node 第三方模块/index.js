// https://www.jianshu.com/p/ab9883061a2c

// 一、util模块
// util模块中提供了一些判断和继承，比如

const util = require("util");

// （一）util.inherits(constructor, superConstructor)
// 从一个构造函数constructor继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。inherits方法可以实现原型的继承,不会涉及传址问题


function Dad() {
  this.name = "张三";
  this.age = 30;
  this.hobby = function () {
    console.log("吃鸡");
  }
}

Dad.prototype.money = function () {  //原型
  console.log("我有很多钱");
}

function Son() {
  Dad.call(this);  //构造函数继承
  this.height = "178cm";
}
Son.prototype.sex = function () {
  console.log("男");
}
util.inherits(Son, Dad);
var newSon = new Son();
console.log(newSon.name, newSon.age, newSon.height);   //张三 30 178cm
newSon.money();    //我有很多钱
newSon.hobby();    //吃鸡
newSon.sex();      //男

// （二）util.inspect(obj)
// inspect方法把对象转化为字符串

var obj = { name: "李四", age: 18 };   //对象Object
var newstr = util.inspect(obj);
console.log(newstr);   //字符串 { name: '李四', age: 18 }



// https://www.jianshu.com/p/ab9883061a2c



// querystring模块

// querystring模块只提供了四个方法，分别是
// querystring.parse
// querystring.stringify
// querystring.escape
// querystring.unescape

// （一）querystring.parse(str,separator,eq,options)
// parse方法是讲一个字符串转化为对象
// 参数说明：
// str：指需要转化的字符串
// separator：(可省)用于分割str这个字符串的字符或者字符串，默认是“&”
// eq：（可省）指用于划分键和值的字符或者字符串，默认是“=”
// options：(可省)该参数是一个对象，里面可设置maxKeys和decodeURIComponent这两个属性：
// maxKeys：传入一个number类型，指定解析键值对的最大值，默认值为1000，如果设置为0时，则取消解析的数量限制;
// decodeURIComponent:传入一个function，用于对含有%的字符串进行解码，默认值为querystring.unescape。在官方API的例子中，使用gbkDecodeURIComponent这个方法会报错，显示gbkDecodeURIComponent is no defined，这是因为在使用这个gbkDecodeURIComponent这个方法之前需要先进行定义。在API中也写了Assuming gbkDecodeURIComponent function already exists...这句话的意思是”假设这个gbkDecodeURIComponent方法已经存在”。

// （二）querystring.stringify(obj,separator,eq,options)
// stringify方法是将一个对象转化为一个字符串，可以看做与querystring.parse()相对
// 参数说明：
// obj：指需要转化为字符串的对象
// separator、eq参数同上
// options （可省）传入一个对象，，该对象可设置encodeURIComponent这个属性：
// encodeURIComponent:值的类型为function，可以将一个不安全的url字符串转换成百分比的形式，默认值为querystring.escape()。
// （三）querystring.escape(str)
// escape可使传入的字符串进行编码
// （四）querystring.unescape(str)
// 网上说unescape可将含有%的字符串进行解码



const querystring = require("querystring");

console.log(
  // querystring,
  '\n',
  querystring.keys,
);
// console.log(querystring.parse.toString())
// console.log(querystring.toString())

// querystring.parse
// querystring.stringify
// querystring.escape
// querystring.unescape

// const querystring = {
//   unescapeBuffer: [Function: unescapeBuffer],

//   unescape: [Function: qsUnescape],
//   decode: [Function: parse],

//   escape: [Function: qsEscape],
//   encode: [Function: stringify],

//   stringify: [Function: stringify],
//   parse: [Function: parse],
// }


console.log(
  querystring.parse("name=lisa&age=20&sex=女"),// 结果：{ name: 'lisa', age: '20', sex: '女' }
  querystring.parse("name:lisa*age:20*sex:女", "*", ":"),// 结果：{ name: 'lisa', age: '20', sex: '女' }
  '\n',
  querystring.stringify({ name: "Mack", age: 20, height: "180cm" }),// 结果：name=Mack&age=20&height=180cm
  querystring.stringify({ name: "Mack", age: 20, height: "180cm" }),// 结果：name@Mack+age@20+height@180cm
  '\n',
  querystring.escape("name=大卫"),// 结果：name%3D%E5%A4%A7%E5%8D%AB
  querystring.escape("name"), // name
  querystring.escape("="), // %3D
  querystring.escape("大卫"), // %E5%A4%A7%E5%8D%AB
  '\n',
  querystring.escape("name%3D%E5%A4%A7%E5%8D%AB"),// 结果：name%3D%E5%A4%A7%E5%8D%AB
  querystring.escape("name"), // name
  querystring.escape("%3D"), // %3D
  querystring.escape("%E5%A4%A7%E5%8D%AB"), // %E5%A4%A7%E5%8D%AB
);







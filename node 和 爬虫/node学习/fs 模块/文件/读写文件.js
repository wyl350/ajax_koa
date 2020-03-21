'use strict';
const fs = require('fs')
// 遗留问题，前面可能有几个封装的函数的resovle 和reject 的参数的顺序反了。

// 读
// 异步读取
async function readFile(filepath, encoding = 'utf-8') {
  return new Promise((reject, resolve) => {
    fs.readFile(filepath, encoding, function (err, data) {
      if (err) { reject(err) } else { resolve(data) }
    });
  })
}
// Buffer 和 String 相互转化
{
  // Buffer对象转换为String:  data.toString("utf-8");
  // String对象转为Buffer:Buffer.from(text,'utf-8');
}
// 同步读取
function readFileSync(filepath, encoding = 'utf-8') {
  try {
    return fs.readFileSync(filepath, encoding);
  } catch (error) {
    console.log(error);
  }
}

// 写
// 异步写入
async function writeFile(filepath, writedata) {
  return new Promise((reject) => {
    fs.writeFile(filepath, writedata, function (err) {
      if (err) { reject(err) } else { console.log('写入成功！') }
    })
  })
}
// 异步追加写入
async function writeFileAppend(filepath, writedata) {
  return new Promise((reject, resolve) => {
    fs.writeFile(filepath, writedata, { 'flag': 'a' }, function (err) {
      if (err) { reject(err) } else { console.log('写入成功！') }
    });
  })
}
// 同步写入
function writeFileSync(filepath, writedata) {
  try {
    fs.writeFileSync(filepath, writedata);
    console.log('write success!')
  } catch (err) {
    console.log(err)
  }
}

// 文件或文件夹属性
async function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) { reject(err) } else { resolve(stats) }
    })
  })
}
// stats的属性和方法
{
  // console.log(stats.isFile())  // : 是否是文件
  // console.log(stats.isDirectory())  // : 是否是文件夹
  // console.log(stats.mod)  // : 获取权限
  // console.log(stats.size)  // : 字节长度  文件夹的改属性一直是 0
  // console.log(stats.ctime)  // : State Change Time, 属性或内容上次被修改的时间(设置缓存的响应头可能会用到)
  // console.log(stats.mtime)  // : Modified time, 档案的内容上次被修改的时间(设置缓存的响应头可能会用到)
  // console.log(stats.atime)  // : Access time, 上次被读取的时间
  // console.log(stats.birthtime);  // : 文件创建时间 
}


// // 判断文件或者文件夹是否存在
async function stat(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) { console.log('该文件不存在'); reject(err) } else { console.log('该文件存在') }
    })
  })
}



// stat('1.txt')
//   .then(function (stats) {
//     console.log(stats);
//   })
//   .catch(function (err) {
//     console.log(err);
//   }) 

module.exports={
  
}
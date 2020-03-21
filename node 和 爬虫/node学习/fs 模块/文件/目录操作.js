// 目录操作
// 'use strict';
const fs = require('fs'); // 引入fs模块

// 创建 newdir 目录
const mkdir = (dirpath) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirpath, function (err) {
      if (err) { console.log('创建目录不成功'); reject(err) } else { console.log('新建目录成功！'); resolve() }
    });
  })
}
// fs.rmdir(path,callback);但是只能删除空目录。
const readdir = (dirpath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirpath, function (err, files) {
      if (err) { reject(err) } else { resolve(files) }
    });
  })
}

readdir('a')
  .then(function (files) {
    files.forEach(element => {
      console.log(element);
    });
  })
  .catch(function (err) {

  });



module.exports = {
  mkdir,
  readdir,
}
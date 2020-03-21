'use strict';
const fs = require('fs')
// 删除文件

async function unlink(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, function (err) {
      if (err) { console.log('该文件不存在'); reject(err) } else { console.log(`成功删除了${filepath}`); resolve() }
    });
  })
}
function unlinkSync(filepath) {
  try {
    fs.unlinkSync(filepath); // Sync 表示是同步方法
    console.log(`成功删除了${filepath}`);
  } catch (err) {
    console.log(`不存在${filepath}`);
  }
}


unlinkSync('2.txt')
  // .then(function () {
  //   // console.log();
  // })
  // .catch(function (err) {
  //   console.log(err);
  // })





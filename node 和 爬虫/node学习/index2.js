// 文件(夹)是否存在
const fs = require('fs')



// 文件或者文件夹统计信息




// 创建
// fs没有直接创建文件的方法。正常逻辑下，写入文件前需要确认文件是否存在，如果不存在需要创建后才能写入，而fs模块不需要这么做，在有写入功能的几个api中，如果目标文件不存在，node为自动创建该文件然后写入。常用的几个写入功能的api有：

// fs.appendFile()
// fs.writeFile()
// fs.createWriteStream()

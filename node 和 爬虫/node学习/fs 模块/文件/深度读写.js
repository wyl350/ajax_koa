
// - exists(path, callback)
// // 创建文件夹
// - mkdir()
// // 读取文件夹内所有文件
// - readdir()，readdirSync()

// // 监听文件变化
// - watchfile()，unwatchfile()
// // 创建读取文件流

// createReadStream()
// createWriteStream()






// 深入读写文件
// fs.read和fs.write功能类似fs.readFile和fs.writeFile() ，但提供更底层的操作，实际应用中多用fs.readFile和fs.writeFile。

// 使用fs.read和fs.write读写文件需要使用fs.open打开文件和fs.close关闭文件。
// 1、fs.read()
// 先介绍fs.open。
// fs.open(path, flags, [mode], callback)方法用于打开文件，以便fs.read()读取。
// 参数说明：

// path 文件路径
// flags打开文件的方式
// [mode] 是文件的权限（可行参数，默认值是0666）
// callback 回调函数

// flags值及说明如下：


// r ：读取文件，文件不存在时报错；
// r+ ：读取并写入文件，文件不存在时报错；
// rs ：以同步方式读取文件，文件不存在时报错；
// rs+ ：以同步方式读取并写入文件，文件不存在时报错；
// w ：写入文件，文件不存在则创建，存在则清空；
// wx ：和w一样，但是文件存在时会报错；
// w+ ：读取并写入文件，文件不存在则创建，存在则清空；
// wx+ ：和w+ 一样，但是文件存在时会报错；
// a ：以追加方式写入文件，文件不存在则创建；
// ax ：和a一样，但是文件存在时会报错；
// a+ ：读取并追加写入文件，文件不存在则创建；
// ax+ ：和a+ 一样，但是文件存在时会报错。

// fs.close(fd,[callback])

var fs = require('fs'); // 引入fs模块
var util = require('util'); // 引入fs模块

// 打开文件

// fs.open(path, flags, [mode], callback)
// path 文件路径
// flags 打开文件的方式
// [mode] 是文件的权限（可选参数，默认值是0666）
// callback 回调函数

// fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])
// fd             文件描述符
// buffer      缓冲区，数据将被写入。
// offset      buffer写入的偏移量
// length     （integer）   指定文件读取字节数长度
// position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。
// callback      回调传递了三个参数，err， bytesRead， buffer
// · err  异常
// · bytesRead: 读取的字节数
// · buffer: 缓冲区对象

// fs.close(fd,[callback])
// 用于关闭文件，fd是所打开文件的文件描述符。

// fs.open('1.txt', 'r', function (err, fd) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('open file success.');
// 	var buffer = new Buffer.from('255');
// 	// 读取文件
// 	fs.read(fd, buffer, 0, 10, 0, function (err, bytesRead, buffer) {
// 		if (err) {
// 			throw err;
// 		}
// 		// 打印出buffer中存入的数据
// 		console.log(bytesRead, buffer.slice(0, bytesRead).toString());
// 		// 关闭文件
// 		fs.close(fd);
// 	});
// });   // 实验失败


fs.open('1.txt', 'r', function (err, fd) {
	if (err) {
		console.error(err);
		return;
	}

	var buf = new Buffer(20);
	fs.read(fd, buf, 0, 20, null, function (err, bytesRead, buffer) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('bytesRead' + bytesRead);
		console.log(buffer);
	})
}) // 代码实验成功，
























// https://blog.csdn.net/weixin_33751566/article/details/88905731  继续



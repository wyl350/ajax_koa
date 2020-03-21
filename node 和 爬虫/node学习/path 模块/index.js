const path = require('path')
console.log(
  '\n',
  '思考这两个目录名',
  path.dirname('c:\Users\yuan\WebstormProjects\learn-node'),// c:
  path.dirname('./name.js'),  // .

  '\n',
  '目录名、文件名、拓展名',
  path.dirname(__dirname + '/path.js'),// C:\Users\Administrator\Desktop\temp\node学习 
  path.basename(__dirname + '/path.js'),// path.js 
  path.extname(__dirname + '/path.js'),// .js


  '\n',
  '路径拼接',
  path.join(__dirname, '\\\\\klkl////', '//////path.js'), // C:\Users\Administrator\Desktop\temp\node学习\klkl\path.js  



  '\n',
  '获取绝对路径',
  path.resolve('./path.js'),


  '\n',
  '获取相对路径',
  path.relative('./views/index.ejs', './static/images/0.png'), // ..\..\static\images\0.png

  '\n',
  '规范化路径 路径分隔符',
  path.sep, //  \    linux是/，在windows是\
  '\n',
  '路径分解  获取环境变量path的分隔符',
  path.delimiter,  // ;  // linux是冒号：，windows 是;
  '\n',
  path.format({
    root: 'c:\\',  // 根文件夹
    dir: 'c:\\Users\\yuan\\WebstormProjects\\learn-node',   // 当前所处的文件夹
    base: 'path.js',   // 文件全名
    ext: '/js',   // 文件拓展名
    name: 'path'   // 文件名
  }),

  '\n',
  '路径合并',
  path.format({
    root: 'c:\\',  // 根文件夹
    dir: 'c:\\Users\\yuan\\WebstormProjects\\learn-node',   // 当前所处的文件夹
    base: 'path.js',   // 文件全名
    ext: '/js',   // 文件拓展名
    name: 'path'   // 文件名
  }),
  '\n',
  '路径分解',
  path.parse(__filename),  // {
  //   root: 'C:\\',
  //   dir: 'C:\\Users\\Administrator\\Desktop\\temp\\node学习',
  //   base: 'index.js',
  //   ext: '.js',
  //   name: 'index'
  // }

);


console.log('================  path.basename(path,extname)');
console.log(path.basename('C:/windows/')); // windows
console.log(path.basename('C:\\windows\\test.js')); // C:\windows\test.js   
console.log(path.basename('C:/windows/test.js')); // test.js
console.log(path.basename('C:/windows/test.js', '.js')); // test     这个要特别注意
console.log(path.win32.basename('C:/windows/')); // windows
console.log(path.win32.basename('C:\\windows\\test.js')); // test.js
console.log(path.win32.basename('C:/windows/test.js')); // test.js
console.log(path.win32.basename('C:/windows/test.js', '.js')); // test     这个要特别注意

console.log('================  windows 10 环境');
console.log(path.basename('C:\\windows\\test.js')); // test.js
console.log(path.basename('C:/windows/test.js')); // test.js
console.log(path.win32.basename('C:\\windows\\test.js')); // test.js
console.log(path.win32.basename('C:/windows/test.js')); // test.js

console.log('================  path.delimiter(path)');
console.log(process.env.PATH);// 打印本机的全部环境变量，string 类型
console.log(typeof process.env.PATH);// string
console.log(process.env.PATH.split(path.delimiter)); // 打印本机的全部环境变量， array 类型
console.log(typeof process.env.PATH.split(path.delimiter)); // array
// 系统所用的多个路径合并的分隔符,(POSIX标准系统返回值为’:’，Windows系统返回值为：’;’)

console.log('================  dirname(path)');
console.log('================  format(object)');
console.log(path.format({
  dir: 'home/user/dir',
  root: '/test',
  base: 'file.txt',
  name: 'anotherFile',
  ext: 'md'
}));// home/user/dir\file.txt
// {
//   dir: string,   // 路径  关键
//   root: string,  // 根路径，dir存在时会忽略此参数
//   base: string,  // 文件全名，为`${name}.${ext}`  关键
//   name: string,  // 文件名，base存在时会忽略此参数
//   ext: string    // 文件拓展名，base存在时会忽略此参数
// }
console.log('================  path.join(path1,...)');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..', '..')) // \foo\bar\baz
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')) // \foo\bar\baz\asdf
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')) // \foo\bar\baz\asdf\quux
console.log('================  normalize(path)');
//on POSIX:
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))// \foo\bar\baz\asdf
// Returns: '/foo/bar/baz/asdf'
//On Windows:
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'))// C:\temp\foo\
// Returns: 'C:\\temp\\foo\\'
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'))// C:\temp\foo\bar
// Returns: 'C:\\temp\\foo\\bar'
console.log('================  relative(from, to) 由参数路径组成的一个相对路径');
console.log('================  resolve([…paths]) 由参数路径组成的一个绝对路径');
console.log(path.resolve('/foo/bar', './baz')) // C:\foo\bar\baz
// Returns: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/')) // C:\tmp\file
// Returns: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')) // C:\Users\Administrator\Desktop\temp\node学习\wwwroot\static_files\gif\image.gif
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'

// 返回值:有参数路径组成的一个绝对路径,组成规则如下:
// 从右往左拼接字符串，如果此过程中拼接结果出现绝对路径，则停止解析，返回此绝对路径；
// 若从右往左拼接字符串都没有出现绝对路径，则以当前工作目录路径作为前缀返回拼接结果
console.log('================  path.sep 是属性 操作系统的默认路径分隔符 \ on Windows  / on POSIX')
console.log('================ path.isAbsolute(path) 判断参数path是否是绝对路径 ');
// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));// normalization : \test\test1\2slashes\1slash
// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));// joint path : \test\test1\2slashes\1slash
// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));// resolve : C:\Users\Administrator\Desktop\temp\node学习\main.js
// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));// ext name : .js
console.log(path.isAbsolute('./name')) // false
console.log(path.toNamespacedPath('./name'))

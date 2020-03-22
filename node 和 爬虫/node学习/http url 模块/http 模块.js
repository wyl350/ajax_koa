// https://segmentfault.com/a/1190000016757708?utm_source=tag-newest


var http = require('http');
http.createServer(function(req,res){
    //req 获取url输入信息
    //res 浏览器根据url,返回响应信息
    // 设置HTTp头部,状态码是200，文件类型是html,字符集utf8
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    // res.write("hellow")
    // res.end()
    res.end("hello world11");
}).listen(8888)
console.log('server running at http://127.0.0.1:8888')




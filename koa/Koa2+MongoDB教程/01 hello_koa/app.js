var koa =require('koa');
var app=new koa();

//配置路由

//中间件

//express写法
//app.use(function(req,res){
//
//    res.send('返回数据')
//})


app.use( async (ctx)=>{
     ctx.body='你好 koa2.x';
})

app.listen(3000);





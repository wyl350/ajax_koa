/*
 Koa 中 koa-bodyparser 中间件获取表单提交的数据

    1.npm install --save koa-bodyparser

    2.引入var bodyParser = require('koa-bodyparser');

    3.app.use(bodyParser());

    4.ctx.request.body;  获取表单提交的数据
* */
var Koa=require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    bodyParser = require('koa-bodyparser');

var app=new Koa();
/*应用ejs模板引擎*/
app.use(views('views',{
    extension:'ejs'
}))

//配置post bodyparser的中间件
app.use(bodyParser());

router.get('/',async (ctx)=>{

    await  ctx.render('index');
})

//接收post提交的数据
router.post('/doAdd',async (ctx)=>{

    console.log(ctx.request.body);
    ctx.body=ctx.request.body;  //获取表单提交的数据
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);








var Koa = require('koa2'),
    router = require('koa-router')(),
    views = require('koa-views'),
    common = require('./module/common.js');
var app = new Koa();
/*应用ejs模板引擎*/
app.use(views('views', {
    extension: 'ejs'
}))

router.get('/', async (ctx) => {

    await ctx.render('index');
})

//接收post提交的数据
router.post('/doAdd', async (ctx) => {
    //原生nodejs 在koa中获取表单提交的数据
    var data = await common.getPostData(ctx);
    console.log(data);
    ctx.body = data;
})



app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);







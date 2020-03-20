
//引入 koa模块

/*
ejs模板引擎的使用：

    1.npm install koa-views  --save

    2.npm install ejs  --save

    3.var views = require('koa-views');

    app.use(views(__dirname, { extension: 'ejs' }))   //模板的后缀名是ejs


    4 await ctx.render('index');



注意：我们需要在每一个路由的render里面都要渲染一个公共的数据

    公共的数据放在这个里面，这样的话在模板的任何地方都可以使用


     ctx.state = {   //放在中间件
         session: this.session,
         title: 'app'
     };

* */

var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views');

var app = new Koa();



//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
app.use(views('views', {
    extension: 'ejs'  /*应用ejs模板引擎*/
}))

//写一个中间件配置公共的信息
app.use(async (ctx, next) => {
    ctx.state.userinfo = '张三';
    await next();/*继续向下匹配路由*/
})

router.get('/', async (ctx) => {

    let title = "你好ejs";

    await ctx.render('index', {

        title: title
    });

})
router.get('/news', async (ctx) => {
    //ctx.body='这是一个新闻';

    let list = ['11111', '22222', '33333'];

    let content = "<h2>这是一个h2</h2>";

    let num = 12;
    await ctx.render('news', {
        list: list,
        content: content,
        num: num
    })

})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);








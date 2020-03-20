
//引入 koa模块

var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件

//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配
/*
 app.use(async (ctx)=>{
    ctx.body='这是一个中间件';
 })
* */

/*匹配路由之前打印日期*/
app.use(async (ctx,next)=>{

    console.log(new Date());

    await next(); /*当前路由匹配完成以后继续向下匹配*/
})

router.get('/',async (ctx)=>{

    ctx.body="首页";

})
router.get('/news',async (ctx)=>{
    ctx.body="新闻列表页面";

})
router.get('/login',async (ctx)=>{
    ctx.body="新闻列表页面";
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);








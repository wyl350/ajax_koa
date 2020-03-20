/**
 https://www.npmjs.com/package/koa-router

 1.安装模块

 2.看文档使用

 */

//引入 koa模块

var Koa=require('koa');

var router = require('koa-router')();  /*引入是实例化路由** 推荐*/

//实例化
var app=new Koa();

router.get('/',async (ctx)=>{
    ctx.body="首页";

})

router.get('/news',async (ctx)=>{
    ctx.body="新闻列表页面";

})

router.get('/newscontent',async (ctx)=>{
    ctx.body="新闻详情";

})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

/*
*  router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头*/
app.listen(3002);








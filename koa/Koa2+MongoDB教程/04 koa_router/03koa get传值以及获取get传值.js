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
//获取get传值
//http://localhost:3002/newscontent?aid=123

router.get('/newscontent',async (ctx)=>{

    /*在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
     query：返回的是格式化好的参数对象。
     querystring：返回的是请求字符串。*/

    //从ctx中读取get传值

    console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式      ******推荐

    console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串

    console.log(ctx.url);   //获取url地址

    //ctx里面的request里面获取get传值

    console.log(ctx.request.url);
    console.log(ctx.request.query);   //{ aid: '123', name: 'zhangsan' }  对象
    console.log(ctx.request.querystring);   //aid=123&name=zhangsan


    ctx.body="新闻详情";

})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
/*
*  router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头*/
app.listen(3002);








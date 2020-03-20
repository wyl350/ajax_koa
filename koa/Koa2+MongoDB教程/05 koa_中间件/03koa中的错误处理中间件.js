
//引入 koa模块

var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件

//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配

//www.域名.com/news
app.use(async (ctx,next)=>{
    console.log('这是一个中间件01');
    next();

    if(ctx.status==404){   /*如果页面找不到*/
        ctx.status = 404;
        ctx.body="这是一个 404 页面"
    }else{
        console.log(ctx.url);
    }
})

router.get('/',async (ctx)=>{

    ctx.body="首页";

})
router.get('/news',async (ctx)=>{
    console.log('这是新闻2');
    ctx.body='这是一个新闻';
})
router.get('/login',async (ctx)=>{
    ctx.body="新闻列表页面";
})



app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);








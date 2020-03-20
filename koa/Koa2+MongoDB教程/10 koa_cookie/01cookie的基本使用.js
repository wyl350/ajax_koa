

/*
    1.cookie保存在浏览器客户端

    2.可以让我们用同一个浏览器访问同一个域 名的时候共享数据


/*
    1、保存用户信息
    2、浏览器历史记录
    3、猜你喜欢的功能
    4、10天免登陆
    5、多个页面之间的数据传递
    6、cookie实现购物车功能

 ctx.cookies.set('userinfo','zhangsan',{
    maxAge:60*1000*60
 });

 var userinfo=ctx.cookies.get('userinfo');


*/


var Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path');

var app = new Koa();

//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});

router.get('/', async (ctx) => {

    //正常就这样配置就可以使用了
    /*
     ctx.cookies.set('userinfo','zhangsan',{
        maxAge:60*1000*60
     });
    * */


    ctx.cookies.set('userinfo', 'zhangsan2222', {
        maxAge: 60 * 1000 * 60,

        // path:'/news',  /*配置可以访问的页面*/
        //domain:'.baidu.com'  /*正常情况不要设置 默认就是当前域下面的所有页面都可以方法*/

        httpOnly: false,  //true表示这个cookie只有服务器端可以访问，false表示客户端（js），服务器端都可以访问
        /*
            a.baidu.com
            b.baidu.com  共享cookie的数据
            express基础教程
        * */


    });



    let list = {
        name: '张三'
    }
    await ctx.render('index', {
        list: list

    });
})

router.get('/about', async (ctx) => {

    ctx.cookies.set('userinfo', 'zhangsan33333', {
        maxAge: 60 * 1000 * 60,
        path: '/news'
    });

    ctx.body = "这是关于我们";
})
//接收post提交的数据
router.get('/news', async (ctx) => {

    var userinfo = ctx.cookies.get('userinfo');

    console.log(userinfo);
    let app = {
        name: '张三11'
    };
    await ctx.render('news', {
        list: app
    });
})

router.get('/shop', async (ctx) => {

    var userinfo = ctx.cookies.get('userinfo');

    console.log(userinfo);
    ctx.body = '这是一个商品页面' + userinfo;
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);







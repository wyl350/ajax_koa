

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
*/


var Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path');

var app=new Koa();

//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});

router.get('/',async (ctx)=>{

    //koa中没法直接设置中文的cookie

    var userinfo=new Buffer('张三').toString('base64');

     ctx.cookies.set('userinfo',userinfo,{
        maxAge:60*1000*60
     });
    let list={
        name:'张三'
    }
    await ctx.render('index',{
        list:list

    });
})


router.get('/news',async (ctx)=>{

    var data=ctx.cookies.get('userinfo');

    var userinfo=new Buffer(data, 'base64').toString();

    console.log(userinfo);


    let app={
        name:'张三11'
    };
    await ctx.render('news',{
        list:app
    });
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);


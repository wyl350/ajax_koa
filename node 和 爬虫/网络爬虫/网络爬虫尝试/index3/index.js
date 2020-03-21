
/*
 http://aui.github.io/art-template/koa/

 1、

 cnpm install --save koa koa-router
 cnpm install --save art-template koa-art-template


 2、const render = require('koa-art-template');


 3、

 render(app, {
     root: path.join(__dirname, 'view'),   视图的位置
     extname: '.art', 后缀名
     debug: process.env.NODE_ENV !== 'production'  是否开启调试模式

 });
4、
 await ctx.render('user');
* */
var Koa = require('koa'),
	router = require('koa-router')(),
	render = require('koa-art-template'),
	path = require('path');

var app = new Koa();
const { HotNews } = require('./src')

//配置 koa-art-template模板引擎
render(app, {
	root: path.join(__dirname, 'views'),   // 视图的位置
	extname: '.html',  // 后缀名
	debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
});

router.get('/', async (ctx) => {
	ctx.body = await HotNews()
	let list = await HotNews()
	await ctx.render('index', {
		list
	});
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);







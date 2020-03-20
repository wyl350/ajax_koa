const Koa = require('koa2');
const Router = require('koa-router');
const fs = require('fs')
const app = new Koa();
const router = new Router();
// app.use(async (ctx, next) => {
//   console.log(new Date());
//   await next();
// })



router.get('/', async (ctx, next) => {
  ctx.body = "Index";
})

router.get('./data/todo.json', async function (ctx, next) {
  let data = await fs.readFileSync('./todo.json', 'utf-8')
  ctx.body = data;
})



router.get('/news', (ctx, next) => {
  ctx.body = "新闻页面"
});



app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.listen(3000, () => {
  console.log('starting at port 3000');
});

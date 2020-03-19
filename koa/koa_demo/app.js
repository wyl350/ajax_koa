// const koa = require('koa2')
// const app = new koa()

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') { // 首页
//         ctx.response.status = 200
//         ctx.response.body = 'index'
//     } else if (ctx.request.path === '/list') { // 列表页
//         ctx.response.status = 200
//         ctx.response.body = 'list'
//     } else {
//         ctx.throw(404, 'Not found') // 404
//     }
//     await next()
// })

// app.listen(3001)


const Koa = require('koa2');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
  console.log(new Date());
  await next();
})



router.get('/', async (ctx, next) => {
  console.log(1)
  next()
  console.log(2)

})
router.get('/', function (ctx) {
  ctx.body = "Hello koa0000";
  console.log(00000)
})


router.get('/news', (ctx, next) => {
  ctx.body = "新闻页面"
});
// app.use(async (ctx, next) => {
//   next();
//   if (ctx.status == 404) {
//     ctx.status = 404;
//     ctx.body = "这是一个404页面"
//   }
// });
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑
app.listen(3000, () => {
  console.log('starting at port 3000');
});




const static = require('koa-static');
const staticPath = './static';
app.use(static(
  path.join(__dirname, staticPath)
))



const bodyParser = require('koa-bodyparser');
app.use(bodyParser());



// 解析上下文里node原生请求的POST参数
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end", function () {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}


app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true,  //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true,   //签名默认true
  rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));





const Koa = require('koa');
const render = require('koa-art-template');
const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});
app.use(async function (ctx) {
  await ctx.render('user');
});


app.listen(8080);



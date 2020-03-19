# koa 建明教程
网址：https://www.jmjc.tech/less/116

Koa 初窥
运行 npm i koa2 命令安装。新建一个 app.js 写入我们的第一份 Koa 代码。
```js
const koa = require('koa2')
const app = new koa()

app.use(async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'hi, koa'
  await next()
})

app.listen(3000)
// node app.js，成功之后运行在 3000端口。
```
***


const Koa = require('koa'),
  router = require('koa-router')(),  /*引入是实例化路由** 推荐*/
  app = new Koa(),
  superagent = require('superagent'),
  cheerio = require('cheerio');
// 'div#pane-news ul li a'
let getHotNews = (res, selectorString) => {
  let hotNews = [];
  let $ = cheerio.load(res.text);
  $(selectorString).each((index, ele) => {
    console.log(1,$(ele))
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    };
    hotNews.push(news)
  });
  return hotNews
};



const getNews = () => {
  return new Promise((resolve, reject) => {
    superagent.get('http://news.baidu.com/').end((err, res) => {
      if (err) {
        reject(err)
      } else {
        const hotNews = getHotNews(res, 'div#pane-news ul li a')
        resolve(hotNews)
      }
    });
  })
}



app.use(async (ctx, next) => {
  await next()
})

router.get('/', async (ctx) => {
  await getNews().then(function (hotNews) {
    ctx.body = hotNews
  })
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000, function () {
  console.log('server is running at port 3000!')
});











// 这里要多说几点：

// async/await据说是异步编程的终级解决方案,它可以让我们以同步的思维方式来进行异步编程。Promise解决了异步编程的“回调地狱”，async/await同时使异步流程控制变得友好而有清晰，有兴趣的同学可以去了解学习一下，真的很好用。
// superagent模块提供了很多比如get、post、delte等方法，可以很方便地进行Ajax请求操作。在请求结束后执行.end()回调函数。.end()接受一个函数作为参数，该函数又有两个参数error和res。当请求失败，error会包含返回的错误信息，请求成功，error值为null，返回的数据会包含在res参数中。
// cheerio模块的.load()方法，将HTML document作为参数传入函数，以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素。同时可以使用类似于jQuery中的.each()来遍历元素。此外，还有很多方法，大家可以自行Google/Baidu。
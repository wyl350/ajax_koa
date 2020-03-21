// 本文网址
// https://segmentfault.com/a/1190000014811373?utm_source=tag-newest
// 或者原文   https://caogongzi.gitee.io/%2F2018%2F06%2F08%2Fnews-spider%2F
const express = require('express');
const app = express();
const superagent = require('superagent');

const cheerio = require('cheerio');

let getHotNews = (res) => {
  let hotNews = [];
  // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

  /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
     以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
   */
  let $ = cheerio.load(res.text);

  // 找到目标数据所在的页面元素，获取数据
  $('div#pane-news ul li a').each((idx, ele) => {
    // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
    // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
    let news = {
      title: $(ele).text(),        // 获取新闻标题
      href: $(ele).attr('href')    // 获取新闻网页链接
    };
    hotNews.push(news)              // 存入最终结果数组
  });
  return hotNews
};

/**
 * [description] - 抓取本地新闻页面
 */
let getLocalNews = (res) => {
  let localNews = [];
  let $ = cheerio.load(res);

  // 本地新闻
  $('ul#localnews-focus li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href'),
    };
    localNews.push(news)
  });

  // 本地资讯
  $('div#localnews-zixun ul li a').each((index, item) => {
    let news = {
      title: $(item).text(),
      href: $(item).attr('href')
    };
    localNews.push(news);
  });

  return localNews
};




let hotNews = [];                                // 热点新闻
let localNews = [];                              // 本地新闻
let pageRes = {};
superagent.get('http://news.baidu.com/').end((err, res) => {
  if (err) {
    // 如果访问失败或者出错，会这行这里
    console.log(`热点新闻抓取失败 - ${err}`)
  } else {
    // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
    // 抓取热点新闻数据
    hotNews = getHotNews(res)
    localNews = getLocalNews(res)
    pageRes = res
  }
});


/**
 * [description] - 跟路由
 */
// 当一个get请求 http://localhost:3000时，就会后面的async函数
// app.get('/', async (req, res, next) => {
//   res.send(hotNews);
// });

app.get('/', async (req, res, next) => {
  res.send(pageRes.text);
});
// app.get('/', function (req, res) {
//   res.send('Hello World!12121');
// });


let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});


// 这里要多说几点：

// async/await据说是异步编程的终级解决方案,它可以让我们以同步的思维方式来进行异步编程。Promise解决了异步编程的“回调地狱”，async/await同时使异步流程控制变得友好而有清晰，有兴趣的同学可以去了解学习一下，真的很好用。
// superagent模块提供了很多比如get、post、delte等方法，可以很方便地进行Ajax请求操作。在请求结束后执行.end()回调函数。.end()接受一个函数作为参数，该函数又有两个参数error和res。当请求失败，error会包含返回的错误信息，请求成功，error值为null，返回的数据会包含在res参数中。
// cheerio模块的.load()方法，将HTML document作为参数传入函数，以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素。同时可以使用类似于jQuery中的.each()来遍历元素。此外，还有很多方法，大家可以自行Google/Baidu。
// 注：因为我的Chrome安装了JSONView扩展程序，所以返回的数据在页面展示的时候会被自动格式化为结构性的JSON格式，方便查看。
// 爬取内容并修改
const express = require('express');
const app = express();
const superagent = require('superagent');

const cheerio = require('cheerio');

let getHotNews = (res) => {
  let hotNews = [];
  let $ = cheerio.load(res.text);  // res 是对象，而res.text 则是将它转为了字符串。
  $('div#pane-news ul li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),        // 获取新闻标题
      href: $(ele).attr('href')    // 获取新闻网页链接
    };
    hotNews.push(news)              // 存入最终结果数组
  });
  return hotNews
};

const HotNews = async () => {
  let HotNews = await superagent.get('http://news.baidu.com/')
  HotNews = await getHotNews(HotNews)
  return HotNews
}

let html = (array) => {
  // array
  return array.map(function (value, index, arr) {
    return (
      `<div>
        <ul>
          <li key=${index}><a href=${value.href}>${value.title}</a></li>
        </ul>
      </div>`
    )
  })
}

app.get('/', async (req, res, next) => {
  let a = await HotNews()
  // console.log(a);
  let result = await html(a)
  // console.log(result);

  // let html = html(await HotNews())
  res.send(result); // hotNews 是对象
});

let server = app.listen(3000, function () {
  console.log('Your App is running at port %s', server.address().port);
});

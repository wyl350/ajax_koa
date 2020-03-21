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

module.exports = {
  HotNews
}

// 测试
// const result = 
// HotNews().then(function (data) {
//   console.log(data)
// })

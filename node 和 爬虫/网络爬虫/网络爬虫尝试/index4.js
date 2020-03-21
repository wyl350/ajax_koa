const https = require('https');
const cheerio = require('cheerio');


let url = 'https://www.liepin.com/zhaopin/?init=-1&headckid=0417b67c8d823dcb&fromSearchBtn=2&sfrom=click-pc_homepage-centre_searchbox-search_new&ckid=0417b67c8d823dcb&degradeFlag=0&key=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&siTag=D_7XS8J-xxxQY6y2bMqEWQ%7EfA9rXquZc5IkJpXC-Ycixw&d_sfrom=search_fp&d_ckId=466b672969a37b2deaf20975f4b05e7c&d_curPage=0&d_pageSize=40&d_headId=466b672969a37b2deaf20975f4b05e7c&curPage=1';

https.get(url, function (res) {
  let chunks = [],
    size = 0;
  res.on('data', function (chunk) {
    chunks.push(chunk);
    size += chunk.length;
  });

  res.on('end', function () {
    console.log('数据包传输完毕');
    let data = Buffer.concat(chunks, size);
    let html = data.toString();

    let $ = cheerio.load(html);

    let result = [];

    $('.sojob-list').find('.job-info').each(i => {
      let map = {};
      //  个人基本信息
      map.name = $('.job-info').eq(i).find('h3').attr('title');

      let baseOthersInfo = $('.job-info').eq(i).find('.condition').attr('title');
      baseOthersInfo = baseOthersInfo.split("_");

      map.reward = baseOthersInfo[0];
      map.area = baseOthersInfo[1];
      map.experience = baseOthersInfo[2];

      //  公司信息
      let companyTagDom = $('.company-info').eq(i).find('.temptation').find('span');
      let companyTag = [];
      companyTagDom.each(i => {
        companyTag.push(companyTagDom.eq(i).text());
      });
      let companyInfo = {
        name: $('.company-info').eq(i).find('.company-name a').attr('title'),
        href: $('.company-info').eq(i).find('.company-name a').attr('href'),
        type: $('.company-info').eq(i).find('.industry-link a').text(),
        tag: companyTag.join(',')
      }
      map.company = companyInfo;
      result.push(map);
      map = {};
    });
    console.log(result);
  });
});

// 可以看到我们需要的目标数据已经被load出来了。

// 此时你可能有疑惑了，写了这么一大段代码，总是去console.log打印日志来排错，费时又费力，能不能跟写前端页面代码一样，在浏览器上直接打断点。

// 答案是肯定的，此时，我们还是运行app.js，只不过命令稍加变动，变成：

// node --inspect-brk app.js

// 终端输入命令之后运行，并打开浏览器的：

// chrome://inspect/#devices

// 此时，你可以看到Target目标调试对象：

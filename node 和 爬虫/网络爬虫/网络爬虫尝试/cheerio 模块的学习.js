var cheerio = require('cheerio'),
  $ = cheerio.load('<h2 class="title">Hello world</h2>');
console.log(
  // $.text(),
  $('h2').text()
);

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');

// $.html();
//=> <h2 class="title welcome">Hello there!</h2>

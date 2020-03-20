/**
 * Created by Administrator on 2018/3/14 0014.
 */
console.log(new Buffer('张三').toString('base64'));// 转换成 base64 字符
//5byg5LiJ
console.log(new Buffer('5byg5LiJ', 'base64').toString());// 还原 base
//张三
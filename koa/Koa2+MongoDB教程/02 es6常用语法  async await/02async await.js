


//async 是让方法变成异步



/*
普通方法


 function getData(){

 return '这是一个数据';
 }

 console.log(getData());  //这是一个数据
* */



/*
async 是让方法变成异步


 async function getData(){

 return '这是一个数据';
 }

 console.log(getData());  //Promise { '这是一个数据' }


* */




/*如何获取async 异步方法里面的数据的第一种方法
 async function getData(){

     return '这是一个数据';
 }

 var p=getData();
 p.then((data)=>{
     console.log(data);
 })

* */


//await 是等待异步方法执行完成,可以获取异步方法里面的数据，但是必须得用在异步方法里面

/*await 错误的用法
 async function getData(){

    return '这是一个数据';
 }

 var d=await getData();
 console.log(d);  //await is only valid in async function

* */


//await 是等待异步方法执行完成,可以获取异步方法里面的数据，但是必须得用在异步方法里面

/*
 async function getData(){

    return '这是一个数据';
 }

 async function test(){

    var d=await getData();

    console.log(d);
 }
 test();

* */


//await 阻塞的功能 ，把异步改成一个同步


//async function getData(){
//    console.log(2);
//    return '这是一个数据';
//}
//async function test(){
//
//    console.log(1);
//    var d=await getData();
//    console.log(d);
//    console.log(3);
//}
//test();  //1  2  3





//async 定义的方法返回的是 Promise对象。



/*
 function getData(){

    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
                 var username='张三';
                 resolve(username);


          },1000)
     })
 }

 var p=getData();
 p.then(function(d){
        console.log(d);

 })

* */


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var username='张三';
            resolve(username);

        },1000)
    })
}
async function test(){

    var data=await getData();
    console.log(data);
}

test();

# XMLHttpRequest对象的属性与方法
XMLHttpRequest对象是Ajax的核心，它有很多属性和方法。
***
1. readyState 属性
    > 当一个XMLHttpRequest对象被创立后，readyState属性标示了当前对象处于什么状态，可以通过对该属性的访问，来判读此次请求的状态然后做出相应的操作。
    1. case 0 :未初始化状态，此时，已经创建了一个XMLHttpRequest对象。
    1. Case 1:准备发送状态：此时，已经调用了XMLHttpRequest对象的open()方法，建立好了连接。
    1. case 2：响应头已经全部拿到。
    1. case 3:正在接收响应体，响应体未全部拿到。
    1. case 4:完成响应状态，此时已经完成了HttpResponse响应体的接收。
2. responseText 属性
    > responseText属性包含客服端接收到的HTTP响应的**文本内容**，当readyState属性为0、1或2时，responseText属性包含一个空字符串：当readyState属性值为3时，响应中包含客服端还没完成的响应信息；当readyState属性值卫4，responseText属性才包含完整的响应信息。
3. responseXML 属性
    > 只有当readyState属性为4，并且**响应头**部的**Content-Type的MIME类型**被指定为XML(text/xml或者application/xml)时，该属性才会有值并且被解析成一个XML文档，否则该属性为null。如果是回传的**XML文档结构不良或者未完成响应回传**，该属性也会为null。responseXML属性用来描述被XMLHttpRequest解析后的XML文档的属性(**对针对性的文本内容具有解析作用，同时也是具有检测作用，不合格则直接转为null**)。
4. status 属性
    > status属性描述了HTTP状态代码，注意，仅当readyState属性值为3（正在接受中）或者4（已加载）时，才能对此属性进行访问。如果在readyState属性值小于3时，试图去读取status属性值，将引发一个异常。
5. statusText 属性
    > statusText属性描述了HTTP状态代码文本，并且仅当readyState属性为3或者4才可用。当readyState属性为其他值时试图存取statusText属性将引发一个异常。
6. onreadystatechange 事件
    > 每当 readyState 属性发生改变时，就触发 onreadystatechange 事件，一般都要通过该事件来触发回传处理函数。
7. open()方法
    > XMLHttpRequest 对象是通过调用open(method,uri,async,username,password)方法来进行初始化工作的。调用该方法将得到一个可以用来进行发送的对象，open有五个参数。
    1. method参数是必须的，用来指定发送请求的HTTP方法（GET,POST,PUT,DELETE,HEAD)参数要**大写**。
    1. async参数用用指定是否请求是异步的，默认是true。**如果需要发送一个同步请求，需要把该参数设置为false**。
    1. 如果需要服务器验证访问用户的情况，可以设置username和password
8. send方法
    > 调用open()方法后，就可以通过调用send()方法按照open方法设定的参数将请求进行发送。当open方法中async为true，在send（）方法调用后立即返回，否则将会中断直到请求返回。要注意的是，send方法必须在readyState为1时即调用open方法以后才能调用。
    1. send()方法使用一个可选的参数，该参数可以包含可变类型的数据。用户可以使用它并通过POST方法把数据发送到服务器。
    1. 然而，在以下情况中，请使用 POST 请求：
        - 无法使用缓存文件（更新服务器上的文件或数据库）
        - 向服务器发送大量数据（POST 没有数据量限制）
        - 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
        - 第二个参数规定服务器端脚本的 URL(该文件可以是任何类型的文件，比如.txt 和.xml，或者服务器脚本文件，比如.asp 和.php （在传回响应之前，能够在服务器上执行任务）) 。
    1. 另外可以显示的使用null参数调用send方法，这与不用参数调用该方法一样。
    1. 对于大多数其他的数据类型，在调用send方法之前，应该使用setRequestHeader()方法先设置Content-Type头部，如果send（data)方法中的data参数的类型为DOMString,那么数据将被编码成UTF-8，如果是Document类型，那么将使用由data.xmlEncoding指定的编码串行化该数据。
    1. GET方法下可以在url的后面写上参数的值, POST方法下只能在send()方法里面写上参数的键值对。
9. abort()方法
    > 该方法可以暂停一个HttpRequest的请求发送或者HttpResponse的接收，并且将XMLHttp Request对象设置 为初始化状态。(**应该是回到没有建立连接之前。**)，让readyState属性的返回值直接为0
10. setRequestHeader()方法
    > 该方法用来设置请求的头部信息。当readyState属性为1时，即在open()方法后调用这个方法；否则将得到一个异常。setRequestHeader(header,value)方法包含两个参数，第一个是header键名称，后一个是键值。
11. getResponseHeader() 方法
    > 此方法用于检索响应的头部值，仅能当readyState属性是2、3或者4（既响应头部可用以后）才可用调用该方法。否则，该方法返回一个空字符串。此外，还可以通过getAllResponseHeaders()方法获取所有的HttpResponse的头部信息。

```js
// XMLHttpRequest 兼容对象
// 3
function getXMLHttpRequest() {
  var xmlHttpReq = null;
  if (window.XMLHttpRequest) {// Mozilla Firefox, Opera 8.0+, Safari
    xmlHttpReq = new XMLHttpRequest();
  } else {
    if (window.ActiveXObject) {// Internet Explorer
      try {
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        try {// Internet Explorer
          xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
        }
      }
    }
  }
  return xmlHttpReq;
}
```
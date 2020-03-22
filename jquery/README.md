## 菜鸟教程
https://www.runoob.com/jquery/jquery-tutorial.html

jQuery 参考手册  https://www.runoob.com/jquery/jquery-ref-selectors.html
jQuery API 手册 https://www.runoob.com/manual/jquery/

### 功能：
- HTML 元素选取
- HTML 元素操作
- CSS 操作
- HTML 事件函数
- JavaScript 特效和动画
- HTML DOM 遍历和修改
- AJAX
- Utilities

基础语法： $(selector).action()



- $("*")	选取所有元素	
- $(this)	选取当前 HTML 元素	
- $("p.intro")	选取 class 为 intro 的 <p> 元素	
- $("p:first")	选取第一个 <p> 元素	
- $("ul li:first")	选取第一个 <ul> 元素的第一个 <li> 元素	
- $("ul li:first-child")	选取每个 <ul> 元素的第一个 <li> 元素	
- $("[href]")	选取带有 href 属性的元素	
- $("a[target='_blank']")	选取所有 target 属性值等于 "_blank" 的 <a> 元素	
- $("a[target!='_blank']")	选取所有 target 属性值不等于 "_blank" 的 <a> 元素	
- $(":button")	选取所有 type="button" 的 <input> 元素 和 <button> 元素	
- $("tr:even")	选取偶数位置的 <tr> 元素	
- $("tr:odd")	选取奇数位置的 <tr> 元素
> $(":button") 为 jQuery 中表单选择器（貌似与过滤选择器同级），旨在选择所有的按钮，所以会找到 <input>、<button> 元素；而 $("button") 则为基本选择器，旨在选择为 <button> 的标签。
- $("#id", ".class")  复合选择器
- $(div p span)       层级选择器 //div下的p元素中的span元素
- $(div>p)            父子选择器 //div下的所有p元素
- $(div+p)            相邻元素选择器 //div后面的p元素(仅一个p)
- $(div~p)            兄弟选择器  //div后面的所有p元素(同级别)
- $(.p:last)          类选择器 加 过滤选择器  第一个和最后一个（first 或者 last）
- $("#mytable td:odd")      层级选择 加 过滤选择器 奇偶（odd 或者 even）
- $("div p:eq(2)")    **索引**选择器 div下的第三个p元素（索引是从0开始）
- $("a[href='www.baidu.com']")  属性选择器
- $("p:contains(test)")        // **内容过滤**选择器，包含text内容的p元素
- $(":emtyp")        //**内容过滤**选择器，所有空标签（不包含子标签和内容的标签）parent 相反
- $(":hidden")       //**所有隐藏元素** visible 
- $("input:enabled") //选取所有启用的表单元素
- $(":disabled")     //所有不可用的元素
- $("input:checked") //获取所有选中的复选框单选按钮等
- $("select option:selected") //获取选中的选项元素


> : 即为 jQuery 的过滤选择器，语法类似于 css 中的伪类选择器；其过滤选择器大概可以分为基本过滤（p:first 之类）、内容过滤（:empty）、子元素过滤(:first-child)和属性过滤 [href] 选择器。


常见 DOM 事件：
|鼠标事件|	键盘事件|	表单事件|	文档/窗口事件|
|---|---|---|---|
|click|	keypress|	submit|	load|
|dblclick|	keydown|	change|	resize|
|mouseenter|	keyup|	focus|	scroll|
|mouseleave|	 	blur|	unload|
|hover|	 	 	 |||


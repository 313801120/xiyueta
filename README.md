# xiyueta.js
#### 解析html网页、css样式、asp程序,使用jQuery语法来遍历操作dom结构。

![image](http://www.xiyueta.com/images/xiyueta_demo.gif)

<br/>

### 立即体验
[在线Demo](http://www.xiyueta.com/demo/)

### 功能一览
```
> .text() 获取匹配全部文本
> .html() 获取匹配第一个HTML
> .find() 获取匹配元素后代
> .add() 追加新的匹配元素
> .not() 删除匹配元素
> .is() 检测匹配元素
> .prop() 检测获得元素属性值
> .attr() 第一个元素的属性值
> .removeAttr() 删除元素属性
> .css() 设置CSS属性
> .val() 表单元素的值
> .remove() 删除回调一组列表
> .each() 遍历匹配元素
> .addClass() 类添加到元素中
> .hasClass() 搜索元素中类
> .removeClass() 移除元素类
> .wrap() 包裹到元素周围
> .unwrap() 移除元素父元素
> .parse() 解析html字符串
> .debug() 打印html结构
> .print() 打印HTML内容...
```
### 浏览器兼容性
```Chrome（及同内核的浏览器如QQ浏览器、360浏览器等等），Firefox，Safari，IE 11```

<br/>

#### 1. 安装包
  ```bash
  npm i xiyueta
  ```
或
  ```bash
  yarn add xiyueta
  ```

<br/>

#### 2. 在nodejs里使用xiyueta
```js
const xiyueta = require('xiyueta');
const $ = xiyueta.load('<h2 class="Title">Hello world</h2>');

$('h2').text(123);
$('h2.title').addClass('xyt');

$.html();
//=><h2 class="Title xyt">123</h2>
```
<br/>

#### 3. 在网页里使用xiyueta
```html
<script src="http://www.xiyueta.com/js/xiyueta.min.js"></script>
<script>
var html='<span>xiyueta</span><span>JS库</span>';
$().parse(html);
$.log($("span").text());
</script>
```
<br/>

#### 4. 在asp程序里使用xiyueta
```html
<script  language="javascript" runat="server" src="dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
console.log(xiyueta("title").parse("<title>hello world!</title>").text()) 'ASP里不可以用 $ 直接用 xiyueta代替
%>

<script language="javascript" runat="server">
  console.log($("title").parse("<title>hello world!</title>").text()); //上面要运行一段ASP程序，这里才不会报错，因为要用到ASP程序里的response.write输出函数
  

</script>
```

<br/>

### 资源链接
<hr>

文档官网：<a href="http://www.xiyueta.com/doc/" target="_blank">http://www.xiyueta.com/doc/</a>

在线演示：<a href="http://www.xiyueta.com/demo/" target="_blank">http://www.xiyueta.com/demo/</a>

Gitee仓库：<a href="https://gitee.com/313801120/xiyueta" target="_blank">https://gitee.com/313801120/xiyueta</a>

Github仓库：<a href="https://github.com/313801120/xiyueta" target="_blank">https://github.com/313801120/xiyueta</a> 

更新日志：<a href="http://xiyueta/doc/log/" target="_blank">http://xiyueta/doc/log/</a>

技术交流群：扫如下二维码加群

![image](http://www.xiyueta.com/images/qq2_qrcode.png)
<p align=center>
  <a href="http://www.xiyueta.com">
    <img src="http://www.xiyueta.com/images/logo-2.png" alt="xiyueta" width="360">
  </a>
</p>
<p align=center>

xiyueta is a fast, small, and feature-rich JavaScript library<br>

xiyueta.js library is faster than cheerio library to parse html<br>

Fast, flexible, and lean implementation of core jQuery designed specifically for the server.



</p>


---

xiyueta.js库是一个快速解析html字符串，遍历网页dom结构的JavaScript库。它通过与jQuery语法使用一致的 API 使 html文档遍历和处理更加简单。xiyueta.js库是先解析网页html文本再遍历html网页dom，xiyueta.js库可以在WEB浏览器里使用，也可以在ASP程序里使用，也可以在nodejs里使用。 xiyueta库在nodejs里使用比chreeio库性能更好，xiyueta库比chreeio库解析html字符串的速度快3至5倍。 xiyueta.js库设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。xiyueta的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口。




```js
//web 里使用 xiyueta
alert($('title').parse("<title>hello world!</title>").text());//解析html并获得网页标题
```


```js
//nodejs 里使用 xiyueta
var $ = require('./dist/nodejs.xiyueta.min.js');
//var $ = require('xiyueta');//本地存在则可以直接调用 使用方法:在CMD里输入 node demo.nodejs版.js
console.log($("title").parse("<title>hello world!</title>").text());                        
```


```html
//asp 里使用 xiyueta
<script  language="javascript" runat="server" src="./dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？
console.log(xiyueta("title").parse("<title>hello world!</title>").text()) 'ASP里不可以用 $ 直接用 xiyueta代替
%>

<script language="javascript" runat="server">
  console.log($("title").parse("<title>hello world!</title>").text()); //上面要运行一段ASP程序，这里才不会报错，因为要用到ASP程序里的response.write输出函数
</script>
```


没错，她具备jQuery的影子，与jQuery不一样的地方是，xiyueta是直接操作纯html网页文本。


## 快速上手

获得xiyueta后，将其完整地部署到你的项目目录（或静态资源服务器），你只需要引入下述一个JS文件：

```
./dist/xiyueta.min.js //xiyueta核心文件
```

不用去管其它任何文件。像使用jQuery语法一样来使用xiyueta

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>Start using xiyueta JS Library</title>
</head>
<body>
 
<!-- Your HTML code -->
 
<script src="./dist/xiyueta.min.js"></script>
<script>
  $().parse('<title>hello world!</title>'); //Parsing HTML
  $("title").text("xiyueta.com"); //Set page title
  alert($().print())
</script> 
</body>
</html>
```

## [阅读文档](http://www.xiyueta.com/doc/)
从现在开始，尽情地拥抱 xiyueta 吧！但愿她能成为你长远的开发伴侣，化作你方寸屏幕前的亿万字节！

## [教程案例](http://www.xiyueta.com/demo/)
提供大量对xiyueta的属性方法使用教程

## 相关
[官网](http://www.xiyueta.com/)、[更新日志](http://www.xiyueta.com/doc/changelog.asp)
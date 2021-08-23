<p align=center>
  <a href="http://www.xiyueta.com">
    <img src="http://www.xiyueta.com/images/logo-2.png" alt="xiyueta" width="360">
  </a>
</p>
<p align=center>
  xiyueta is a fast, small, and feature-rich JavaScript library.
</p>


---

xiyueta - 是一个快速、小巧且功能丰富的 JavaScript 库。它通过易于使用的 API 使 HTML 文档遍历和操作等工作变得更加简单，该 API 可在多种浏览器上运行。xiyueta设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。xiyueta的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口。也可以把ASP代码转换成PHP代码等




```js
//xiyueta使用
alert(xiyueta('title').parse("<title>网页标题</title>").text());//解析html并获得网页标题
```

```js
//nodejs 里使用 xiyueta
var $ = require('xiyueta')
console.log($("title").parse("<title>xiyueta</title>").text());                        
```


没错，她具备jQuery的影子，与jQuery不一样的地方是，xiyueta是直接操作纯html网页文本。


## 快速上手

获得xiyueta后，将其完整地部署到你的项目目录（或静态资源服务器），你只需要引入下述一个JS文件：

```
./xiyueta.min.js //xiyueta核心文件
```

不用去管其它任何文件。像使用jQuery语法一样来使用xiyueta

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>开始使用 xiyueta</title>
</head>
<body>
 
<!-- 你的 HTML 代码 -->
 
<script src="dist/xiyueta.min.js"></script>
<script>
  xiyueta().parse('<title>网页标题</title>');//解析html
  xiyueta("title").text("xiyuetaJS");//设置网页标题
  alert(xiyueta().print())
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
<p align=center>
  <a href="http://www.xiyueta.com">
    <img src="http://www.xiyueta.com/images/logo-2.png" alt="xiyueta" width="360">
  </a>
</p>
<p align=center>
  Xiyueta is a fast, small, and feature-rich JavaScript library
</p>


---

xiyueta（谐音：喜悦它 API) 是一个快速，小型且功能丰富的JavaScript库。通过易于使用的API（可在多种浏览器中使用），对HTML/CSSJS/JS/文档内容进行操作和处理，可以像使用jquery语言一样来使用xiyueta。可以对html文档顺序排序，html标记对检测等。处理后html/JS/CSS内容可以输出，方便再次手动对html内容查看和修改。



```js
//xiyueta库使用
  xiyueta('<title>喜悦TA</title>').format();//格式化html内容
  xiyueta("title").text("xiyueta")
  alert(xiyueta().print())
```
没错，她具备jQuery的影子，页与jQuery不一样的地方是，xiyueta库是直接操作html文件内容。


## 快速上手

获得 xiyueta 后，将其完整地部署到你的项目目录（或静态资源服务器），你只需要引入下述一个JS文件：

```
./xiyueta.js //xiyueta核心库
```

不用去管其它任何文件。像使用jQuery一样来使用xiyueta

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
 
<script src="js/xiyueta.min.js"></script>
<script>
  xiyueta('<title>喜悦TA</title>').format();//格式化html内容
  xiyueta("title").text("xiyueta")
  alert(xiyueta().print())
</script> 
</body>
</html>
```

## [阅读文档](http://www.xiyueta.com/)
从现在开始，尽情地拥抱 xiyueta 吧！但愿她能成为你长远的开发伴侣，化作你方寸屏幕前的亿万字节！

## 相关
[官网](http://www.xiyueta.com/)、[更新日志](http://xiyueta.com/doc/changelog.asp)
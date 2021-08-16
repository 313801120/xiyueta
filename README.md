<p align=center>
  <a href="http://www.xiyueta.com">
    <img src="http://www.xiyueta.com/images/logo-2.png" alt="xiyueta" width="360">
  </a>
</p>
<p align=center>
  Xiyueta is a fast, small, and feature-rich JavaScript library.
  <br>last updated 20210816<br>Latest version v1.2.5
</p>


---

xiyueta是一个快速、简洁的JavaScript框架，xiyueta框架设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。xiyueta框架的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口。



```js
//xiyueta框架使用
xiyueta('<title>喜悦TA</title>').parse();//解析html
xiyueta("title").text("xiyueta");//获得网页标签
alert(xiyueta().print());//打印HTML
```
没错，她具备jQuery的影子，与jQuery不一样的地方是，xiyueta框架是直接操作纯html网页文本。


## 快速上手

获得xiyueta框架后，将其完整地部署到你的项目目录（或静态资源服务器），你只需要引入下述一个JS文件：

```
./xiyueta.min.js //xiyueta框架核心文件
```

不用去管其它任何文件。像使用jQuery一样来使用xiyueta框架

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
  xiyueta('<title>喜悦TA</title>').parse();//解析html
  xiyueta("title").text("xiyueta")
  alert(xiyueta().print())
</script> 
</body>
</html>
```

## [阅读文档](http://www.xiyueta.com/)
从现在开始，尽情地拥抱 xiyueta框架 吧！但愿她能成为你长远的开发伴侣，化作你方寸屏幕前的亿万字节！

## [教程案例](http://www.xiyueta.com/demo/)
提供大量对xiyueta框架的属性方法使用教程

## 相关
[官网](http://www.xiyueta.com/)、[更新日志](http://www.xiyueta.com/doc/changelog.asp)
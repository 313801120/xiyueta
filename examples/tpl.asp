 <!--#Include file = "../inc/config.Asp"-->  <%
dim nav:nav="示例"
dim leftNav:leftNav="开始使用"
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>在线模板操作 - xiyuetaJS</title>
<meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="parser-detection" content="telephone=no">
  <script>
  ;!function(){self!==parent&&(location.href="//www.xiyueta.com/")}();
  </script>
  <link rel="stylesheet" href="/layui/css/layui.css"  media="all">
  <link rel="stylesheet" href="/layui/global.css" media="all">
</head>
<body>
<div class="layui-layout layui-layout-admin site-demo-fixed"> 


<div class="layui-header header header-demo" spring>
  <div class="layui-fluid">
    <a class="logo" href="/">
      <img src="/images/logo.png" alt="layui">
    </a>
    <div class="layui-form component" lay-filter="LAY-site-header-component"></div>


    <ul class="layui-nav">

      <li class="layui-nav-item<%if nav="文档" then response.write(" layui-this")%>">
        <a href="/doc">文档</a> 
      </li>
      <li class="layui-nav-item<%if nav="模板" then response.write(" layui-this")%>">
        <a href="/demo/">模板</a>
      </li> 
      
      <li class="layui-nav-item layui-hide-xs<%if nav="反馈" then response.write(" layui-this")%>">
        <a href="https://gitee.com/313801120/xiyueta/issues" target="_blank" rel="nofollow">反馈</a>
      </li>
      
      
      
    </ul>
  </div>
</div>
<!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
<!--[if lt IE 9]>
  <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
  <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
<![endif]--> 

  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      
<ul class="layui-nav layui-nav-tree site-demo-nav">
  
  <li class="layui-nav-item layui-nav-itemed">
    <a class="javascript:;" href="javascript:;">演示</a>
    <dl class="layui-nav-child">
      <dd>
        <a href="/demo/">调试预览</a>
      </dd>
    </dl>
  </li>
  
  <li class="layui-nav-item layui-nav-itemed">
    <a class="javascript:;" href="javascript:;">API文档</a>
    <dl class="layui-nav-child">
      <dd>
        <a href="xiyueta.debug.html" target="_blank">.debug()调试</a>
      </dd>
      <dd>
        <a href="xiyueta.text.html" target="_blank">.text()文本</a>
      </dd>
      <dd>
        <a href="xiyueta.html.html" target="_blank">.html()内容</a>
      </dd>
      <dd>
        <a href="xiyueta.attr.html" target="_blank">.attr()元素属性</a>
      </dd>
      <dd>
        <a href="xiyueta.remove.html" target="_blank">.remove()删除</a>
      </dd>
      <dd>
        <a href="xiyueta.item.html" target="_blank">.item()列表</a>
      </dd>
      <dd>
        <a href="xiyueta.handle.html" target="_blank">.handle()处理</a>
      </dd>
      <dd>
        <a href="xiyueta.fullurl.html" target="_blank">.fullurl()完整网址</a>
      </dd>
    </dl>
  </li>
  
  <li class="layui-nav-item layui-nav-itemed">
    <a class="javascript:;" href="javascript:;">选择器</a>
    <dl class="layui-nav-child">
      <dd>
        <a href="xiyueta.selector.eq.html" target="_blank">:eq()索引</a>
      </dd>
      <dd>
        <a href="xiyueta.selector.name.html" target="_blank">[name=value]属性</a>
      </dd>
    </dl>    
  </li>

  <li class="layui-nav-item layui-nav-itemed">
    <a class="javascript:;" href="javascript:;">CSS样式</a>
    <dl class="layui-nav-child">
      <dd>
        <a href="xiyueta.css.html" target="_blank">:css()样式</a>
      </dd> 
    </dl>    
  </li>

 
  
  <li class="layui-nav-item" style="height: 30px; text-align: center"></li>
</ul>

    </div>
  </div>
  <div class="layui-body site-demo">
    <form id="LAY_demoForm" target="LAY_demo" method="post">
    <div class="site-demo-editor">
      <div class="site-demo-area">
        <textarea id="LAY_editor" spellcheck="false" placeholder="在此处输入代码">

&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;meta charset="utf-8">
  &lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  &lt;title>开始使用 xiyueta&lt;/title>
&lt;/head>
&lt;body>
 
&lt;!-- 你的 HTML 代码 -->
 
&lt;script src="http://www.xiyueta.com/js/xiyueta.min.js">&lt;/script>
&lt;script>
  xiyueta('&lt;div>喜悦TA&lt;/div>').parse();//解析html
  xiyueta("div").text("xiyueta.com")
  document.write(xiyueta().print())
&lt;/script> 
&lt;/body>
&lt;/html>
        
        </textarea>
        <input type="hidden" name="html" id="LAY_demoCodes">
      </div>
      <div class="site-demo-btn">
        <button type="button" class="layui-btn" id="LAY_demo_run">运行代码</button>
        <button type="button" class="layui-btn" id="LAY_demo_run">运行代码</button>
        <button type="button" class="layui-btn" id="LAY_demo_run">运行代码</button>
      </div>
    </div>
    </form>
    <div class="site-demo-result">
      <iframe frameborder="0" id="LAY_demo" name="LAY_demo"></iframe>
    </div>
  </div>

<div class="layui-footer footer footer-demo">
  <div class="layui-container">


    &copy; 2021 <a href="/">xiyueta.com</a>
    
      <a href="/about/disclaimer.asp">免责声明</a>
      <a href="#" target="_blank">友链</a> <br>
      喜悦TA | Powered By XIYUETA-2021

    
  </div>
</div>
<script>
window.global = {
  pageType: 'demo'
  ,preview: function(){
    var preview = document.getElementById('LAY_preview');
    return preview ? preview.innerHTML : '';
  }()
};
</script>

<div class="site-tree-mobile layui-hide">
  <i class="layui-icon layui-icon-spread-left"></i>
</div>
<div class="site-mobile-shade"></div>
 
<script src="/layui/layui.js" charset="utf-8"></script>
<script>
layui.config({
  base: '/layui/'
  ,version: '1617720346170'
}).use('global');
</script>



</div>
</body>
</html>
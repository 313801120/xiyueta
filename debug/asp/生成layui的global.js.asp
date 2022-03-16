<!--#Include file = "../../../inc/config.Asp"-->
<!-- <script  language="javascript" runat="server" src="./../../dist/asp.xiyueta.min.js"></script>  -->

 

<script  language="javascript" runat="server" src="./../../src/asp.header.js"></script> 
<script  language="javascript" runat="server" src="./../../src/common.js"></script> 
<script  language="javascript" runat="server" src="./../../src/xiyueta.js"></script> 
<script  language="javascript" runat="server" src="./../../src/xiyueta.more.js"></script> 
<script  language="javascript" runat="server" src="./../../src/xiyueta.css.js"></script> 
<script  language="javascript" runat="server" src="./../../src/url.js"></script> 
<script  language="javascript" runat="server" src="./../../src/handle.js"></script> 
<script  language="javascript" runat="server" src="./../../src/handle.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
console.log(xiyueta("title").parse("<title>hello world!</title>").text()) 'ASP里不可以用 $ 直接用 xiyueta代替
  dim list,content,splstr,filePath,s,obj
  ' list=getDirFileList(".", "js")
  list=getDirFileList("/doc/css", "asp")
  splstr=split(list,vbcrlf)
  for each filePath in splstr
    call echo("filePath",filePath)
    content=readfile(filePath,"utf-8")
    ' xiyueta("*").parse(content).debug()
    xiyueta().parse(content)
    
    if xiyueta("div[class='layui-tab-item']").length=1 then
      if instr(xiyueta("div[class='layui-tab-item']").htmlwrap(),"</code>")=false then
        s="<pre><code class=""javascript"">"& xiyueta("div[class='layui-tab-item']").html() &"</code></pre>"
        if xiyueta.lv()=0 and xiyueta.htmlerr()=false then

          xiyueta("div[class='layui-tab-item']").html( s )
          call writeToFile(filePath,xiyueta.html(),"utf-8")
          call echoRed("tip","修改 缺少code标签 成功")

        else
          call eerr("提示","缺少code标签" & xiyueta.lv() & "," & xiyueta.htmlerr() )
        end if
        doevents        
      end if
    end if
    if xiyueta("div[class='layui-tab-item layui-show']").length=1 then
      if instr(xiyueta("div[class='layui-tab-item layui-show']").htmlwrap(),"</code>")=false then
        ' s="<pre><code class=""html"">"& phptrim(xiyueta("div[class='layui-tab-item layui-show']").html()) &"</code></pre>"
        ' if xiyueta.lv()=0 and xiyueta.htmlerr()=false then

        '   xiyueta("div[class='layui-tab-item layui-show']").html( s )
        '   call writeToFile(filePath,xiyueta.html(),"utf-8")
        '   call echoRed("tip22222","修改 缺少code标签 成功")

        ' else
        '   end if
        call eerr("提示22","缺少code标签" & xiyueta.lv() & "," & xiyueta.htmlerr() )
        
        doevents        
      end if
    end if
    if xiyueta.lv()<>0 or xiyueta.htmlerr()<>false then
      call eerrRed("提示","标签有错误，停止")   
    end if
     
  next

  call echo("提示","oK")
%>

<script language="javascript" runat="server">
  // console.log($().parse("<div><%=aa%></div>bb",false).debug()); //上面要运行一段ASP程序，这里才不会报错，因为要用到ASP程序里的response.write输出函数


</script>
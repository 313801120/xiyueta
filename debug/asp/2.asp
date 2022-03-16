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
  dim content,list,splstr,s,splxx,x,y,aHref,aTxt,aHelp,c
  content=getHttpUrl("http://xiyueta.com/doc/","utf-8")
        xiyueta().parse(content) 
        list=xiyueta("a").domList
        splstr=split(list,",")
        for each s in splstr
          if s<>"" then
            splxx=split(s,"|")
            x=splxx(0)
            y=splxx(1)
            aHref=xiyueta("*",x,y).attr("href")
            aTxt=xiyueta("*",x,y).find("span:eq(0)").text()
            aHelp=xiyueta("*",x,y).find("span:eq(1)").text()

            if aTxt<>"" and aHelp<>"" then
                if instr(aTxt,".")>0 or instr(aTxt,"$")>0  then
                    c=c & ",'<option value=""" & aHref & """>"& aTxt &" "& aHelp &"</option>'" & vbcrlf
                
             

                    call echo(s,"x="&x & " y=" & y)
                    call echoRed("aHref",aHref)
                    call echoRed("aTxt",aTxt)
                    call echoRed("aHelp",aHelp)
                end if
            end if
          end if

        next 
    content=readfile("\layui\global.js","utf-8")

    dim sCut
    
    sCut=strcut(content,"搜索API</option>'","</select>",1)


    content=replace(content,sCut, "搜索API</option>'" & vbcrlf & vbcrlf & phptrim(c) & vbcrlf & vbcrlf & ",'</select>")
    call writeToFile("\layui\global.js",content,"utf-8")
    call echo("sCut",sCut)
    call echo("c",c)
  call echo("提示","oK")
%>

<script language="javascript" runat="server">
  // console.log($().parse("<div><%=aa%></div>bb",false).debug()); //上面要运行一段ASP程序，这里才不会报错，因为要用到ASP程序里的response.write输出函数


</script>
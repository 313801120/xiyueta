<script  language="javascript" runat="server" src="./../../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
console.log(xiyueta("title").parse("<title>hello world!</title>").text()) 'ASP里不可以用 $ 直接用 xiyueta代替
%>

<script language="javascript" runat="server">
  console.log($("title").parse("<title>hello world!</title>").text()); //上面要运行一段ASP程序，这里才不会报错，因为要用到ASP程序里的response.write输出函数
  

</script>
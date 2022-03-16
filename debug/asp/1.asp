<script  language="javascript" runat="server" src="./../../dist/asp.xiyueta.min.js"></script> 

<%

xiyueta().parse("<title>hello world!</title>") 'Parsing HTML
xiyueta("title").text("xiyueta.com") 'Set page title
response.write(xiyueta.html() )

%>


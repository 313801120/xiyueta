<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
console.log( Object.prototype.toString.call(3))
dim s
%>

<script language="javascript" runat="server">
 var html = '<html><head></head><body></body></html>'
//-------------------
 
var startTime = new Date();

$().parse(html);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if(  $("*").length!=13 )return 'this is err1';

    return 'test_jQuery OK';
}
</script>
 

 
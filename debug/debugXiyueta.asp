<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
console.log( Object.prototype.toString.call(3))
dim s
%>

<script language="javascript" runat="server">
 var html = '<html><head></head><body><div aa bb="1111">aaa</div><span bb="bbb" aa>bbb</span>\n<</body></html>'
//-------------------
 
var startTime = new Date();

$().parse(html);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if(  $("div").attr("aa") !='' )return 'this is err1';
    if(  $("div").attr("bb") !='1111' )return 'this is err2';
    if(  $("div").attr("cc") !=undefined )return 'this is err3';
    if(  $("div").attr("aa","111").attr("aa") !='111' )return 'this is err4';
    if(  $("div").attr("bb","111").attr("bb") !='111' )return 'this is err5';
    if(  $("div").attr("cc","111").attr("cc") !='111' )return 'this is err6';
    if(  $("span").attr("aa") !='' )return 'this is err7';
    if(  $("span").attr("bb") !='bbb' )return 'this is err8';
    if(  $("span").attr("cc") !=undefined )return 'this is err9';
    if(  $("span").removeAttr("aa") !='[object Object]' )return 'this is err10';
    if(  $("span").removeAttr("bb") !='[object Object]' )return 'this is err11';
    if(  $("span").removeAttr("cc") !='[object Object]' )return 'this is err12';

    return 'test_jQuery OK';
}
</script>
 

 
<%
response.addheader "Content-Type", "text/html; charset=utf-8"%>
<meta charset="UTF-8">
<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
' console.log( Object.prototype.toString.call(3))


'call xiyueta.log("ASP test",[1,2,3,4],11,"dd")       '在ASP程序里，只能是数字和字符串，对象或数组判断不出来'
dim s 
%>

<script language="javascript" runat="server">
 var html = ''
console.log('Update time 2022/11/16 9:17:54')
//-------------------
 
var startTime = new Date();

$().parse(html);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if( $.getDomain("http://www.xiyueta.com/css/style.css")!='www.xiyueta.com' )return 'this is err1';
    if( $.getDomain("http://www.xiyueta.com/css/style.css",true)!='http://www.xiyueta.com' )return 'this is err2';
    if( $.getDomain("https://xiyueta.com/case/?page=1",true)!='https://xiyueta.com' )return 'this is err3';
    if( $.getDomain("ftp://xiyueta.com/1.asp",true)!='ftp://xiyueta.com' )return 'this is err4';
    if( $.getDomain("1.jpg",true)!='' )return 'this is err5';
    if( $.getDomain("//xiyueta.com/1.asp",true)!='xiyueta.com' )return 'this is err6';

    return 'test_jQuery OK';
}

 
//xiyueta.log("JS test",[1,2,3,4],["a","b","c"],{"name":[1,2,{"a1":"xiyueta","a2":".com"}],"age":18},11,"dd")
</script>
 

 
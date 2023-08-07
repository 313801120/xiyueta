<%
response.addheader "Content-Type", "text/html; charset=utf-8"%>
<meta charset="UTF-8">
<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
' console.log( Object.prototype.toString.call(3))


'call xiyueta.log("ASP test",[1,2,3,4],11,"dd")       '在ASP程序里，只能是数字和字符串，对象或数组判断不出来'
'  100n  长字符，在asp里不行'
dim s 
%>

<script language="javascript" runat="server">
 var html = '<html><head></head><body>\n\n<div>\n    <ul>\n        <li>aa</li>\n        <li>bb</li>\n        <li>cc</li>\n    </ul>\n</div>\n\n</body></html>'
//-------------------
 
    var fun=function(n){
        if(n==undefined)n=1;
        return n;
    }    
    var funtrue=function(){
        return true;
    }    
    var funfalse=function(){
        return false;
    }
    var funstr=function(){
        return "str";
    }
    var funnumb=function(){
        return 123;
    }
    var funarray=function(){
        return [1,2,"a",false,true];
    }
    var funobj=function(){
        return {"a":"11","bb":"22","ccc":"333"};
    }
var startTime = new Date();

$().parse(html,true);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if(  $(":eq(0)").length!=1 )return 'this is err1';

    return 'test_jQuery OK';
}

 
//xiyueta.log("JS test",[1,2,3,4],["a","b","c"],{"name":[1,2,{"a1":"xiyueta","a2":".com"}],"age":18},11,"dd")
</script>
 

 
﻿<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
dim s
%>

<script language="javascript" runat="server">
 var html = '<html><head></head><body><ul id="nav">\n    <li>this is 1</li>\n    <li>this is 2</li>\n    <li>this is 3</li>\n    <li>this is 4</li>\n    <li>this is 5</li>\n</ul>\n<ul id="news">\n    <li style="color:red;">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n    <li name="cc">this is 4</li>\n    <li name="dd">this is 5</li>\n</ul>\n<div id="home"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>\n<div id="home2"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>\n<ul id="css">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n    <li name="cc">this is 4</li>\n    <li name="dd">this is 5</li>\n</ul>\n<ul id="css2">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n</ul>\n<ul id="css3">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n</ul>\n<div id="val">\n    <input type="text" value="111">\n    <input type="text" value="222">\n    <input type="text" value="333">\n    <select name="select" id="select">\n        <option value="xiyueta">xiyueta</option>\n        <option value="xiyueta.com">xiyueta.com</option>\n        <option value="js库">js库</option>\n    </select>\n</div>\n<div id="val2">\n    <input type="text" value="111">\n    <input type="text" value="111">\n    <input type="text" value="111">\n</div>\n<div id="remove">\n    <p class="hello">Hello</p>\n        how are\n    <p>you?</p>\n</div>\n<div id="remove2">\n    <p class="hello">Hello</p>\n        how are\n    <p>you?</p>\n</div>\n<div id="each">\n    <ul>\n        <li>aa</li>\n        <li>bb</li>\n        <li>cc</li>\n    </ul>\n</div>\n<div id="addClass">\n    <ul>\n        <li class="aa">1</li>\n        <li class="bb">2</li>\n        <li>3</li>\n    </ul>\n</div>\n<div id="addClass2">\n    <ul>\n        <li class="aa">1</li>\n        <li class="bb">2</li>\n        <li>3</li>\n    </ul>\n</div>\n<div id="removeClass">\n    <ul>\n        <li class="s1 aa">1</li>\n        <li class="s1 bb">2</li>\n        <li class=" s1 aa cc bb">3</li>\n    </ul>\n</div>\n<div id="removeClass2">\n    <ul>\n        <li class="s1 aa">1</li>\n        <li class="s1 bb">2</li>\n        <li class=" s1 aa cc bb">3</li>\n    </ul>\n</div>\n<ul id="hasClass"><li class="aa">aa</li><li>bb</li></ul>\n<div id="wrap"><p>aaa</p><p>bbbb</p></div>\n<div id="wrapB"><br></div>\n<div id="wrap2"><p>aaa</p><p>bbbb</p></div>\n<div id="unwrap"><p>aaa<br></p><div>bbb</div><p></p></div>\n\n<ul id="next">\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n</ul>\n\n<div id="append">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="after">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="before">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="showhide"><p></p><span style="display: none;">xiyuta</span>\n</div>\n<div class="china"></div>\n<div class="XiYueta"></div>\n<div id="day20211001">\n    <h2 class="Title">Hello world</h2>\n</div>\n<div id="add">\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</div>\n<div id="children">\n    <span><p></p><br></span>\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</div>\n<div id="children2">xiyueta.com<span><br><br><br><br><p></p></span><br><p></p><p></p></div>\n<div id="closest">\n    <div></div>    \n    <span><br></span>\n</div>\n<div id="closest2">\n    <div></div>    \n    <span><br></span>\n</div>\n<div id="filter">\n    <div></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div><div class="middle"></div></div>\n\n</div>\n<div id="contents">\n    <a>bb<br><p>dd</p></a>\n    <span><br></span>\n    <br>\n</div>\n\n<div id="replaceWith">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div>  \n<div id="replaceWith2">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div>  \n<div id="replaceWith3">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div> \n<div id="replaceWith4">\n    <div>xiyueta.com</div>内容<span>313801120</span><p>11</p>    \n</div> \n\n<div id="day20211005">\n    <div class="layui-header header header-index" summer="">\n        aaa\n    </div>\n</div>\n\n'
//-------------------
 
var startTime = new Date();

$().parse(html);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if( $("[class='layui-header header header-index']").text()!='\n        aaa\n    ' )return 'this is err1';

    return 'test_jQuery OK';
}
</script>
 



</script>
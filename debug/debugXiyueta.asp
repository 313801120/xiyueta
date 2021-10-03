<script  language="javascript" runat="server" src="./../dist/asp.xiyueta.min.js"></script> 
<%
'这里需要运行一段ASP程序，下面才可以正常运行javascript程序，疑问？'
dim s
%>

<script language="javascript" runat="server">
 var html = '<html><head></head><body><ul id="nav">\n    <li>this is 1</li>\n    <li>this is 2</li>\n    <li>this is 3</li>\n    <li>this is 4</li>\n    <li>this is 5</li>\n</ul>\n<ul id="news">\n    <li style="color:red;">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n    <li name="cc">this is 4</li>\n    <li name="dd">this is 5</li>\n</ul>\n<div id="home"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>\n<div id="home2"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>\n<ul id="css">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n    <li name="cc">this is 4</li>\n    <li name="dd">this is 5</li>\n</ul>\n<ul id="css2">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n</ul>\n<ul id="css3">\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa">this is 2</li>\n    <li name="bb">this is 3</li>\n</ul>\n<div id="val">\n    <input type="text" value="111">\n    <input type="text" value="222">\n    <input type="text" value="333">\n    <select name="select" id="select">\n        <option value="xiyueta">xiyueta</option>\n        <option value="xiyueta.com">xiyueta.com</option>\n        <option value="js库">js库</option>\n    </select>\n</div>\n<div id="val2">\n    <input type="text" value="111">\n    <input type="text" value="111">\n    <input type="text" value="111">\n</div>\n<div id="remove">\n    <p class="hello">Hello</p>\n        how are\n    <p>you?</p>\n</div>\n<div id="remove2">\n    <p class="hello">Hello</p>\n        how are\n    <p>you?</p>\n</div>\n<div id="each">\n    <ul>\n        <li>aa</li>\n        <li>bb</li>\n        <li>cc</li>\n    </ul>\n</div>\n<div id="addClass">\n    <ul>\n        <li class="aa">1</li>\n        <li class="bb">2</li>\n        <li>3</li>\n    </ul>\n</div>\n<div id="addClass2">\n    <ul>\n        <li class="aa">1</li>\n        <li class="bb">2</li>\n        <li>3</li>\n    </ul>\n</div>\n<div id="removeClass">\n    <ul>\n        <li class="s1 aa">1</li>\n        <li class="s1 bb">2</li>\n        <li class=" s1 aa cc bb">3</li>\n    </ul>\n</div>\n<div id="removeClass2">\n    <ul>\n        <li class="s1 aa">1</li>\n        <li class="s1 bb">2</li>\n        <li class=" s1 aa cc bb">3</li>\n    </ul>\n</div>\n<ul id="hasClass"><li class="aa">aa</li><li>bb</li></ul>\n<div id="wrap"><p>aaa</p><p>bbbb</p></div>\n<div id="wrapB"><br></div>\n<div id="wrap2"><p>aaa</p><p>bbbb</p></div>\n<div id="unwrap"><p>aaa<br></p><div>bbb</div><p></p></div>\n\n<ul id="next">\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n</ul>\n\n<div id="append">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="after">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="before">\n    <p>defaultA</p>\n    <p>defaultB</p>\n</div>\n<div id="showhide"><p></p><span style="display: none;">xiyuta</span>\n</div>\n<div class="china"></div>\n<div class="XiYueta"></div>\n<div id="day20211001">\n    <h2 class="Title">Hello world</h2>\n</div>\n<div id="add">\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</div>\n<div id="children">\n    <span><p></p><br></span>\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</div>\n<div id="children2">xiyueta.com<span><br><br><br><br><p></p></span><br><p></p><p></p></div>\n<div id="closest">\n    <div></div>    \n    <span><br></span>\n</div>\n<div id="closest2">\n    <div></div>    \n    <span><br></span>\n</div>\n<div id="filter">\n    <div></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div class="middle"></div>\n    <div><div class="middle"></div></div>\n\n</div>\n<div id="contents">\n    <a>bb<br><p>dd</p></a>\n    <span><br></span>\n    <br>\n</div>\n\n<div id="replaceWith">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div>  \n<div id="replaceWith2">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div>  \n<div id="replaceWith3">\n  <div class="inner first">Hello</div>\n  <div class="inner second">And</div>\n  <div class="inner third">Goodbye</div>\n</div> \n<div id="replaceWith4">\n    <div>xiyueta.com</div>内容<span>313801120</span><p>11</p>    \n</div> \n'
//-------------------
 
var startTime = new Date();

$().parse(html);
console.log(test_jQuery());

console.log("xiyueta",new Date() - startTime + ' ms');


function test_jQuery() {

    if( $("#nav li").text(function(i){return "text"+i}).text()!='text0text1text2text3text4' )return 'this is err1';
    if( $("#nav li:eq(1)").text("xiyueta.com").text()!='xiyueta.com' )return 'this is err2';
    if( $("#nav li").text()!='text0xiyueta.comtext2text3text4' )return 'this is err3';
    if( $("#nav li:eq(1)").html("xiyueta.com").html()!='xiyueta.com' )return 'this is err4';
    if( $("#nav li").html()!='text0' )return 'this is err5';
    if( $("#nav li").length!=5 )return 'this is err6';
    if(  $("#nav").find("li").css("color","green").end().html() !='\n    <li style="color: green;">text0</li>\n    <li style="color: green;">xiyueta.com</li>\n    <li style="color: green;">text2</li>\n    <li style="color: green;">text3</li>\n    <li style="color: green;">text4</li>\n' )return 'this is err7';
    if(  $("#nav").find($("li:eq(1)")).css("color","red").end().html() !='\n    <li style="color: green;">text0</li>\n    <li style="color: red;">xiyueta.com</li>\n    <li style="color: green;">text2</li>\n    <li style="color: green;">text3</li>\n    <li style="color: green;">text4</li>\n' )return 'this is err8';
    if(  $("#news").attr("name","your news").attr("name") !='your news' )return 'this is err9';
    if(  $("#news").find("li").attr({"id":"nav","name":"xiyueta"}).end().html() !='\n    <li style="color:red;" id="nav" name="xiyueta">this is 1</li>\n    <li name="xiyueta" id="nav">this is 2</li>\n    <li name="xiyueta" id="nav">this is 3</li>\n    <li name="xiyueta" id="nav">this is 4</li>\n    <li name="xiyueta" id="nav">this is 5</li>\n' )return 'this is err10';
    if( $("#news").find("li").attr("id",function(i){return "attr"+i}).end().html()!='\n    <li style="color:red;" id="attr0" name="xiyueta">this is 1</li>\n    <li name="xiyueta" id="attr1">this is 2</li>\n    <li name="xiyueta" id="attr2">this is 3</li>\n    <li name="xiyueta" id="attr3">this is 4</li>\n    <li name="xiyueta" id="attr4">this is 5</li>\n' )return 'this is err11';
    if( $("#home").find("p").removeAttr("style").end().html()!='<p class="aa" id="home-list" name="bb"></p>' )return 'this is err12';
    if( $("#home2").find("p").removeAttr(" id name class href src style").end().html()!='<p></p>' )return 'this is err13';
    if( $("#css").find("li").css("font-size","12px").end().html()!='\n    <li style="color: red; font-size: 12px;">this is 1</li>\n    <li name="aa" style="font-size: 12px;">this is 2</li>\n    <li name="bb" style="font-size: 12px;">this is 3</li>\n    <li name="cc" style="font-size: 12px;">this is 4</li>\n    <li name="dd" style="font-size: 12px;">this is 5</li>\n' )return 'this is err14';
    if( $("#css2").find("li").css({"font-size":"12px","color":"blue"}).end().html()!='\n    <li style="color: blue; font-size: 12px;">this is 1</li>\n    <li name="aa" style="font-size: 12px; color: blue;">this is 2</li>\n    <li name="bb" style="font-size: 12px; color: blue;">this is 3</li>\n' )return 'this is err15';
    if( $("#val input:eq(1)").val()!='222' )return 'this is err16';
    if( $("#val input").length!=3 )return 'this is err17';
    if( $("#val input:eq(0)").val("xiyueta.com").val()!='xiyueta.com' )return 'this is err18';
    if( $("#val").find("select").val("xiyueta.com").val()!='xiyueta.com' )return 'this is err19';
    if( $("#val2").find("input").val(function(i){return "111"}).end().html()!='\n    <input type="text" value="111">\n    <input type="text" value="111">\n    <input type="text" value="111">\n' )return 'this is err20';
    if( $("#remove").find("p").remove().end().html()!='\n    \n        how are\n    \n' )return 'this is err21';
    if( $("#remove2").find("p").remove(':contains("Hello")').end().html()!='\n    \n        how are\n    <p>you?</p>\n' )return 'this is err22';
    if( $("#each").find("ul li").each(function(i){$(this).text("text"+i);$(this).css("color","red");}).end().html()!='\n    <ul>\n        <li style="color: red;">text0</li>\n        <li style="color: red;">text1</li>\n        <li style="color: red;">text2</li>\n    </ul>\n' )return 'this is err23';
    if( $("#addClass").find("ul li").addClass("cc dd").end().html()!='\n    <ul>\n        <li class="aa cc dd">1</li>\n        <li class="bb cc dd">2</li>\n        <li class="cc dd">3</li>\n    </ul>\n' )return 'this is err24';
    if( $("#addClass").find("ul li").addClass(function(i){return i}).end().html()!='\n    <ul>\n        <li class="aa cc dd">1</li>\n        <li class="bb cc dd">2</li>\n        <li class="cc dd">3</li>\n    </ul>\n' )return 'this is err25';
    if( $("#removeClass").find("ul li").removeClass("aa").end().html()!='\n    <ul>\n        <li class="s1">1</li>\n        <li class="s1 bb">2</li>\n        <li class="s1 cc bb">3</li>\n    </ul>\n' )return 'this is err26';
    if( $("#removeClass").find("ul li").removeClass(function(){return "aa"}).end().html()!='\n    <ul>\n        <li class="s1">1</li>\n        <li class="s1 bb">2</li>\n        <li class="s1 cc bb">3</li>\n    </ul>\n' )return 'this is err27';
    if( $("#hasClass li:last").hasClass("aa").toString()!='false' )return 'this is err28';
    if( $("#hasClass li").hasClass("aa").toString()!='true' )return 'this is err29';
    if( $("#unwrap").find("br").unwrap().end().html()!='aaa<br><div>bbb</div><p></p>' )return 'this is err30';
    if( $("#wrap").find("p:eq(0)").wrap("<span style=\"color:red\"></span>").end().html()!='<span style="color:red"><p>aaa</p></span><p>bbbb</p>' )return 'this is err31';
    if( $("#next").find("li:eq(0)").next().html()!='2' )return 'this is err32';
    if( $("#next").find("li:eq(0)").nextAll().text()!='2345' )return 'this is err33';
    if( $("#next").find("li:eq(-2)").prev().html()!='3' )return 'this is err34';
    if( $("#next").find("li:eq(-2)").prevAll().text()!='321' )return 'this is err35';
    if( $("#next").find("li:eq(-2)").siblings().length!=4 )return 'this is err36';
    if( $("#next").find("li:eq(-2)").siblings().text()!='1235' )return 'this is err37';
    if( $("#next").find("li:eq(-2)").parent().text()!='\n    1\n    2\n    3\n    4\n    5\n' )return 'this is err38';
    if( $("#next").find("li:eq(-2)").parents().length!=3 )return 'this is err39';
    if( $("#next li").eq(0).length!=1 )return 'this is err40';
    if( $("#next li").eq(1).length!=1 )return 'this is err41';
    if( $("#next li").eq(10).length!=0 )return 'this is err42';
    if( $("#next li").eq(-1).length!=1 )return 'this is err43';
    if( $("#next li").first().length!=1 )return 'this is err44';
    if( $("#next li").first().text()!='1' )return 'this is err45';
    if( $("#next li").last().length!=1 )return 'this is err46';
    if( $("#next li").last().text()!='5' )return 'this is err47';
    if( $("#next li").slice(0,3).length!=3 )return 'this is err48';
    if( $("#next li").slice(0,3).text()!='123' )return 'this is err49';
    if( $("#next li").slice(-2,-1).text()!='4' )return 'this is err50';
    if( $("#append p").append("aabb").text()!='defaultAaabbdefaultBaabb' )return 'this is err51';
    if( $("#append p").append(function(i){return "append"+i}).text()!='defaultAaabbappend0defaultBaabbappend1' )return 'this is err52';
    if( $("#prepend p").prepend("aabb").text()!='' )return 'this is err53';
    if( $("#prepend p").prepend(function(i){return "prepend"+i}).text()!='' )return 'this is err54';
    if( $("#prepend p").prepend("aabb").text()!='' )return 'this is err55';
    if( $("#prepend p").prepend(function(i){return "prepend"+i}).text()!='' )return 'this is err56';
    if( $("#after").find("p").after("aabb").end().text()!='\n    defaultAaabb\n    defaultBaabb\n' )return 'this is err57';
    if( $("#after").find("p").after(function(i){return "after"+i}).end().text()!='\n    defaultAafter0aabb\n    defaultBafter1aabb\n' )return 'this is err58';
    if( $("#before").find("p").before("aabb").end().text()!='\n    aabbdefaultA\n    aabbdefaultB\n' )return 'this is err59';
    if( $("#before").find("p").before(function(i){return "before"+i}).end().text()!='\n    aabbbefore0defaultA\n    aabbbefore1defaultB\n' )return 'this is err60';
    if( $("ul LI").length!=49 )return 'this is err61';
    if( $("#showhide").length!=1 )return 'this is err62';
    if( $("#showhidE").length!=0 )return 'this is err63';
    if( $(" #showhide ").length!=1 )return 'this is err64';
    if( $(".china").length!=1 )return 'this is err65';
    if( $(" .china  ").length!=1 )return 'this is err66';
    if( $(" .XiYueta  ").length!=1 )return 'this is err67';
    if( $(" li  ").length!=49 )return 'this is err68';
    if( $(" #day20211001 .Title  ").length!=1 )return 'this is err69';
    if( $("div#add").add("div#add li").length!=4 )return 'this is err70';
    if( $("div#add").add($("div#add li")).length!=4 )return 'this is err71';
    if( $("div#add").add("div#add").length!=1 )return 'this is err72';
    if( $("div#children span").children().length!=2 )return 'this is err73';
    if( $("div#children2").children().length!=4 )return 'this is err74';
    if( $("div#closest br").closest("span").html()!='<br>' )return 'this is err75';
    if( $("div#closest br,div#closest2 br").closest("span").length!=2 )return 'this is err76';
    if( $("div#filter div").filter( ".middle" ).length!=5 )return 'this is err77';
    if( $( "#replaceWith" ).find(".inner").replaceWith( "<h2>New heading</h2>" ).end().html()!='\n  <h2>New heading</h2>\n  <h2>New heading</h2>\n  <h2>New heading</h2>\n' )return 'this is err78';
    if( $( "#replaceWith2" ).find(".inner").replaceWith().end().html()!='\n  \n  \n  \n' )return 'this is err79';
    if( $("#replaceWith3").find(".third").replaceWith( $( "#replaceWith3 .first" ) ).end().html()!='\n  \n  <div class="inner second">And</div>\n  <div class="inner first">Hello</div>\n' )return 'this is err80';
    if( $("#replaceWith4").find("div").replaceWith( $("#replaceWith4 span") ).end().html()!='\n    <span>313801120</span>内容<p>11</p>    \n' )return 'this is err81';

    return 'test_jQuery OK';
}
</script>
 



</script>
console.log("2023-09-10 10:29:51"); 
var $ = xiyueta = require('./../../dist/nodejs.xiyueta.min.js');
//var $ = require('xiyueta');//本地存在则可以直接调用 使用方法:在CMD里输入 node debug.nodejs版单元测试.js
//为了兼容在ASP里测试，少用中文或中文符号，会报错和乱码

var beginTime = +new Date();

var fun = function(n) {
    if (n == undefined) n = 1;
    return n;
}
var funtrue = function() {
    return true;
}
var funfalse = function() {
    return false;
}
var funstr = function() {
    return "str";
}
var funnumb = function() {
    return 123;
}
var funarray = function() {
    return [1, 2, "a", false, true];
}
var funobj = function() {
    return { "a": "11", "bb": "22", "ccc": "333" };
}


console.log(xiyueta_test_20230114()); //测试2023-01-14
console.log(xiyueta_test_20230113()); //测试2023-01-13
console.log(xiyueta_test_20230112()); //测试2023-01-12
console.log(xiyueta_test_20230111()); //测试2023-01-11
console.log(xiyueta_test_20230106()); //测试2023-01-06
console.log(xiyueta_test_20221229()); //测试2022-12-29
console.log(xiyueta_test_20221222()); //测试2022-12-22
console.log(xiyueta_not_20221212()); //测试not更全
console.log(xiyueta_add_20221211()); //测试add更全
console.log(xiyueta_find_20221211()); //测试find更全
console.log(xiyueta_html_20221211()); //测试html更全
console.log(xiyueta_text_20221211()); //测试text更全
console.log(test_getDomain()); //测试xiyueta.getDomain() 提取网址里的域名部分
console.log(test_xiyuetaCSS()); //测试xiyuetaCSS
console.log(test_print()); //测试print
console.log(test_showhide()); //测试showhide
console.log(test_selector()); //测试selector
console.log(test_repair()); //测试repair()
console.log(test_wrap()); //测试wrap()
console.log(test_css()); //测试css()
console.log(test_item()); //测试item()
console.log(test_swap()); //测试swap()
console.log(test_doc()); //测试doc()
console.log(test_eq()); //测试eq()
console.log(test_addClass()); //测试addClass()
console.log(test_each()); //测试each()
console.log(test_remove()); //测试remove()
console.log(test_val()); //测试val()
console.log(test_attr()); //测试attr()
console.log(test_html()); //测试html()
console.log(test_find()); //测试find()
console.log(test_text()); //测试text()
console.log(test_moreother()); //测试moreother()


console.log("Time use " + (new Date() - beginTime) + " ms");


function xiyueta_test_20230114() {
    xiyueta.load("<div><span>aa</span></div><p></p>");
    var obj=xiyueta("div");
    var objA=xiyueta("span");
    var objB=xiyueta("p");
    
    if(  obj.inside(obj).length!=0 )return 'xiyueta_test_20230114 err1';
    if(  obj.inside(objA).length!=1 )return 'xiyueta_test_20230114 err2';
    if(  obj.inside(objB).length!=0 )return 'xiyueta_test_20230114 err3';

    if(  objA.inside(obj).length!=0 )return 'xiyueta_test_20230114 err4';
    if(  objA.inside(objA).length!=0 )return 'xiyueta_test_20230114 err5';
    if(  objA.inside(objB).length!=0 )return 'xiyueta_test_20230114 err6';

    if(  objB.inside(obj).length!=0 )return 'xiyueta_test_20230114 err7';
    if(  objB.inside(objA).length!=0 )return 'xiyueta_test_20230114 err8';
    if(  objB.inside(objB).length!=0 )return 'xiyueta_test_20230114 err9';

    return 'xiyueta_test_20230114 OK';
}

function xiyueta_test_20230113() {
    var html = '<html><head></head><body>\n\n<div style="text-align:center;">\n    \n    <a href="index.asp" class="xx"><span style="color:#FFFFFF;">home</span></a>\n    <span style="color:#FFFFFF;"> | </span>\n\n    <a href="about.asp"><span style="color:#FFFFFF;">about</span></a><span style="color:#FFFFFF;"> | </span>\n\n    <a href="product.asp"><span style="color:#FFFFFF;">products</span></a><span style="color:#FFFFFF;"> | </span>\n\n    <a href="about.asp?id=155"><span style="color:#FFFFFF;">job</span></a><span style="color:#FFFFFF;"> | </span>\n\n    <a href="about.asp?id=7"><span style="color:#FFFFFF;">contaceus</span></a>\n\n    <br>\n</div>\n\n</body></html>'
    xiyueta.load(html);
    if(  $("div").children().length!=10 )return 'xiyueta_test_20230113 err1';
    if(  $("div").children().not("div>*").length!=0 )return 'xiyueta_test_20230113 err2';
    if(  $("div").children(":not(div>*)").length!=0 )return 'xiyueta_test_20230113 err3';
    // if(  $("div").children(":not(:eq(0)").length!=1 )return 'xiyueta_test_20230113 err4';// jquery里为为什么不跟下面一样是9 xiyueta里是9 cheeri出错
    // if(  $("div").children(":not(:eq(0)").text()!='home' )return 'xiyueta_test_20230113 err5';
    if(  $("div").children().not(":eq(0)").length!=9 )return 'xiyueta_test_20230113 err6';
    if(  $("div").children().not("[class=xx]").length!=9 )return 'xiyueta_test_20230113 err7';
    if(  $("div").children().not("[class=dd]").length!=10 )return 'xiyueta_test_20230113 err8';

    return 'xiyueta_test_20230113 OK';
}

function xiyueta_test_20230112() {
    var html = '<html><head></head><body>\n\n    <a href="index.asp"><span style="color:#FFFFFF;">abc</span></a>\n    <span style="color:#FFFFFF;"> | </span> \n\n\n</body></html>'
    xiyueta.load(html);

    if(  $("a:eq(0)").find("*").length!=1 )return 'xiyueta_test_20230112 err1';
    if(  $("a:eq(0)").find("*").text()!='abc' )return 'xiyueta_test_20230112 err2';
    if(  $("a:eq(0)").find($("span")).text()!='abc' )return 'xiyueta_test_20230112 err3';
    if(  $("a:eq(0)").find($("li")).text()!='' )return 'xiyueta_test_20230112 err4';
    if(  $("a:eq(0)").find($("*")).text()!='abc' )return 'xiyueta_test_20230112 err5';
    if(  $("*").find($("a:eq(0)")).text()!='abc' )return 'xiyueta_test_20230112 err6';

    return 'xiyueta_test_20230112 OK';
}

function xiyueta_test_20230111() {
    var html = '<html><head></head><body>\n<div>\n<ul>\n    <li class="cli">a</li>\n    <li class="cli">b</li>\n    <li class="cli">\n        <ul>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n        </ul>\n    </li>\n</ul>\n    <span class="cli">br</span>\n</div>\n<div id="nav">\n    <ul class="news">\n        <li class="news"><a href="">a</a></li>\n        <li><a href="">b</a></li>\n        <li class="news"><a href="">c</a></li>\n        <li><a href="">d</a></li>\n    </ul>\n</div>\n<ul id="news">\n    <li>0</li>\n    <li class="abc">1</li>\n    <li>2</li>\n    <li class="newxx">3</li>\n    <li>4</li>\n    <li>5</li>\n</ul>\n\n\n\n</body></html>'
    xiyueta.load(html);

    if(  $(".cli").length!=4 )return 'xiyueta_test_20230111 err1';
    if(  $(".cli").children().length!=1 )return 'xiyueta_test_20230111 err2';
    if(  $(".cli").children().find("li").length!=6 )return 'xiyueta_test_20230111 err3';
    if(  $(".cli").children("li").length!=0 )return 'xiyueta_test_20230111 err4';
    if(  $("#nav ul li a").length!=4 )return 'xiyueta_test_20230111 err5';
    if(  $("#nav ul li a").parent().length!=4 )return 'xiyueta_test_20230111 err6';
    if(  $("#nav ul li a").parent(".news").length!=2 )return 'xiyueta_test_20230111 err7';
    if(  $("#nav ul li a").parents(".news").length!=3 )return 'xiyueta_test_20230111 err8';
    if(  $("#nav ul li a").parents("ul").length!=1 )return 'xiyueta_test_20230111 err9';
    if(  $("#news .newxx").text()!='3' )return 'xiyueta_test_20230111 err10';
    if(  $("#news .newxx").prev().text()!='2' )return 'xiyueta_test_20230111 err11';
    if(  $("#news .newxx").prev(".abc").text()!='' )return 'xiyueta_test_20230111 err12';
    if(  $("#news .newxx").prevAll().text()!='210' )return 'xiyueta_test_20230111 err13';
    if(  $("#news .newxx").prevAll(".abc").text()!='1' )return 'xiyueta_test_20230111 err14';
    if(  $("#news li").next("").text()!='12345' )return 'xiyueta_test_20230111 err15';
    if(  $("#news li").next(".newxx").text()!='3' )return 'xiyueta_test_20230111 err16';
    if(  $("#news li").nextAll().text()!='12345' )return 'xiyueta_test_20230111 err17';
    if(  $("#news li").nextAll(".newxx").text()!='3' )return 'xiyueta_test_20230111 err18';

    return 'xiyueta_test_20230111 OK';
}

function xiyueta_test_20230106() {
    var html = '<html><head></head><body>\n<ul>\n    <li>a</li>\n    <li>b</li>\n    <li id="news">c</li>\n    <li>d</li>\n    <li>e</li>\n    <li>f</li>\n    <li>g</li>\n</ul>\n\n</body></html>'
    $.load(html)
    if(  $("ul li").length!=7 )return 'xiyueta_test_20230106 err1';
    if(  $("ul li").slice().length!=7 )return 'xiyueta_test_20230106 err2';
    if(  $("ul li").slice(0).length!=7 )return 'xiyueta_test_20230106 err3';
    if(  $("ul li").slice(1).length!=6 )return 'xiyueta_test_20230106 err4';
    if(  $("ul li").slice(-1).length!=1 )return 'xiyueta_test_20230106 err5';
    if(  $("ul li").slice(0,-1).length!=6 )return 'xiyueta_test_20230106 err6';
    if(  $("ul li").slice(0,99).length!=7 )return 'xiyueta_test_20230106 err7';
    if(  $("ul li").slice(0,-99).length!=0 )return 'xiyueta_test_20230106 err8';
    if(  $("ul li").slice(-1,2).length!=0 )return 'xiyueta_test_20230106 err9';
    if(  $("ul li").slice(2,4).length!=2 )return 'xiyueta_test_20230106 err10';
    if(  $("ul li").slice(1,3).length!=2 )return 'xiyueta_test_20230106 err11';
    if(  $("ul li").slice(-1,3).length!=0 )return 'xiyueta_test_20230106 err12';

    return 'xiyueta_test_20230106 OK';
}


function xiyueta_test_20221229() {//来源jquery生成
    var html = '<html><head></head><body>\n<ul>\n    <li>a</li>\n    <li>b</li>\n    <li id="news">c</li>\n    <li>d</li>\n    <li>e</li>\n    <li>f</li>\n    <li>g</li>\n</ul>\n\n</body></html>'
    $.load(html)
    if(  $("#news").text()!='c' )return 'xiyueta_test_20221229 err1';
    if(  $("#news").next().text()!='d' )return 'xiyueta_test_20221229 err2';
    if(  $("#news").nextAll().text()!='defg' )return 'xiyueta_test_20221229 err3';
    if(  $("#news").prev().text()!='b' )return 'xiyueta_test_20221229 err4';
    if(  $("#news").prevAll().text()!='ba' )return 'xiyueta_test_20221229 err5';
    if(  $("ul li").siblings().text()!='abcdefg' )return 'xiyueta_test_20221229 err6';
    if(  $("ul li").siblings(0).text()!='abcdefg' )return 'xiyueta_test_20221229 err7';
    if(  $("ul li").siblings(1).text()!='abcdefg' )return 'xiyueta_test_20221229 err8';
    if(  $("ul li").siblings(0,1).text()!='abcdefg' )return 'xiyueta_test_20221229 err9';
    if(  $("ul li").siblings(1,3).text()!='abcdefg' )return 'xiyueta_test_20221229 err10';
    if(  $("ul li").siblings(-1,3).text()!='abcdefg' )return 'xiyueta_test_20221229 err11';
    if(  $("ul li").siblings(1,-1).text()!='abcdefg' )return 'xiyueta_test_20221229 err12';
    if(  $("ul li").parent().text()!='\n    a\n    b\n    c\n    d\n    e\n    f\n    g\n' )return 'xiyueta_test_20221229 err13';
    if(  $("ul li").children().text()!='' )return 'xiyueta_test_20221229 err14';
    if(  $("ul li").closest().text()!='' )return 'xiyueta_test_20221229 err15';

    return 'xiyueta_test_20221229 OK';
}


function xiyueta_test_20221222() {
    var html = '<html><head></head><body>\n<ul>\n    <li><br></li>\n    <li><br id=\'1"2\'></li>\n    <li><br></li>\n</ul>\n\n</body></html>'
    $.load(html);

    if (xiyueta("li:eq(0)").find("br").attr("id", "3'3\"3").attr("id") != '3\'3"3') return 'xiyueta_test_20221222 err1';
    if (xiyueta("li:eq(0)").html() != '<br id="3\'3&quot;3">') return 'xiyueta_test_20221222 err2';


    var html = '<html><head></head><body>\n<p id="wrap">\n<a *())_ <div ()sfsd href="1.asp">this is a</div> \n</p>\n\n\n</body></html>'
    $.load(html, true);
    if (xiyueta("#wrap>a").length != 1) return 'xiyueta_test_20221222 err a1';
    if (xiyueta("#wrap>a").text().trim() != 'this is a') return 'xiyueta_test_20221222 err a2';
    if (xiyueta("#wrap>div").text() != '') return 'xiyueta_test_20221222 err a3';


    html = "<a href=aa id=bb > </a>";
    xiyueta.load(html);
    // xiyueta("*").attribute();
    xiyueta("*").attr("href", "1.asp")
    xiyueta("*").attr("id", "news")
    // xiyueta.debug();
    if (xiyueta.html() != '<a href=1.asp id=news > </a>') {
        return 'xiyueta_test_20221222 err b1';
    }

    html = "<a href=aa Id=bb Disabled> </a>"
    xiyueta.load(html)
    // xiyueta("*").attribute();
    xiyueta("*").attr("href", "1.asp")
    xiyueta("*").attr("iD", "news")
    xiyueta("*").attr("disabled", "true")
    // xiyueta.debug();
    // console.log(xiyueta.html())
    if (xiyueta.html() != '<a href=1.asp Id=news Disabled="true"> </a>') {
        return 'xiyueta_test_20221222 err b2';
    }

    html = "<a href=aa Id=bb Disabled> </a>"
    xiyueta.load(html)
    var s = xiyueta("*").getLabelParamList().join(" "); //
    if (s != 'href id disabled') {
        return 'xiyueta_test_20221222 err b3';
    }
    var s = xiyueta("*").getLabelParamList("value").join(" "); //
    if (s != 'aa bb ') {
        return 'xiyueta_test_20221222 err b4';
    }

    html = "<a href=aa Id=bb Disabled AbC naME='xx' Rel>a</a>"
    xiyueta.load(html)
    if (xiyueta.html("format") != '<a href="aa" id="bb" Disabled AbC name="xx" rel>a</a>') {
        return 'xiyueta_test_20221222 err b5';
    }

    html = "<a href=aa Id=bb Disabled AbC naME='xx' Rel src='a\"b'>a</a>"
    xiyueta.load(html)
    if (xiyueta.html("format") != '<a href="aa" id="bb" Disabled AbC name="xx" rel src="a&quot;b">a</a>') {
        return 'xiyueta_test_20221222 err b6';
    }




    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n</ul>\n\n</body></html>'
    xiyueta.load(html)

    if(  $("ul li").text(function(i){if(i==2){return false}else{return $(this).text()+'text'}}).text()!='1text2textfalse4text5text' )return 'xiyueta_test_20221222 err c1';
    if(  $("ul li").html(function(i){if(i==2){return false}else{return $(this).text()+'html'}}).text()!='1texthtml2texthtml4texthtml5texthtml' )return 'xiyueta_test_20221222 err c2';//cheerio里报错



    return 'xiyueta_test_20221222 OK';
}



function xiyueta_not_20221212() {
    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li><div>2</div></li>\n    <li>3</li>\n</ul>\n\n</body></html>'
    $.load(html);

    if ($("ul>li:eq(1)").not($("ul>li:eq(1)")).length != 0) return 'xiyueta_not_20221212 err1';
    if ($("ul>li:eq(1)").not().length != 1) return 'xiyueta_not_20221212 err2';
    if ($("li:eq(0)").not("").length != 1) return 'xiyueta_not_20221212 err3';
    if ($("li:eq(0)").not(1).length != 1) return 'xiyueta_not_20221212 err4';
    if ($("li:eq(0)").not(123).length != 1) return 'xiyueta_not_20221212 err5';
    if ($("li:eq(0)").not(313801120).length != 1) return 'xiyueta_not_20221212 err6';
    if ($("li:eq(0)").not(null).length != 1) return 'xiyueta_not_20221212 err7';
    if ($("li:eq(0)").not(undefined).length != 1) return 'xiyueta_not_20221212 err8';
    if ($("li:eq(0)").not(fun()).length != 1) return 'xiyueta_not_20221212 err9';
    if ($("li:eq(0)").not("a").length != 1) return 'xiyueta_not_20221212 err10';
    if ($("li:eq(0)").not(false).length != 1) return 'xiyueta_not_20221212 err11';
    if ($("li:eq(0)").not(true).length != 1) return 'xiyueta_not_20221212 err12';
    if ($("li:eq(0)").not(1.1).length != 1) return 'xiyueta_not_20221212 err13';
    if ($("li:eq(0)").not([1, 2, 3, 4, 5, 6]).length != 1) return 'xiyueta_not_20221212 err14';
    if ($("li:eq(0)").not({ "a": 1, "b": 2, "c": 3 }).length != 1) return 'xiyueta_not_20221212 err15';
    if ($("li:eq(0)").not(NaN).length != 1) return 'xiyueta_not_20221212 err16';
    if ($("li:eq(0)").not(Infinity).length != 1) return 'xiyueta_not_20221212 err17';
    if ($("li:eq(0)").not(function() {}).length != 1) return 'xiyueta_not_20221212 err18';
    if ($("li:eq(0)").not(funtrue()).length != 1) return 'xiyueta_not_20221212 err19';
    if ($("li:eq(0)").not(funfalse()).length != 1) return 'xiyueta_not_20221212 err20';
    if ($("li:eq(0)").not(funstr()).length != 1) return 'xiyueta_not_20221212 err21';
    if ($("li:eq(0)").not(funnumb()).length != 1) return 'xiyueta_not_20221212 err22';
    if ($("li:eq(0)").not(funarray()).length != 1) return 'xiyueta_not_20221212 err23';
    if ($("li:eq(0)").not(funobj()).length != 1) return 'xiyueta_not_20221212 err24';
    if ($("li:eq(0)").not([]).length != 1) return 'xiyueta_not_20221212 err25';
    if ($("li:eq(0)").not({}).length != 1) return 'xiyueta_not_20221212 err26';
    // if(  $("li:eq(0)").not( 100n ).length!=1 )return 'xiyueta_not_20221212 err27';//在asp版不行

    return 'xiyueta_not_20221212 OK';
}


// cheerio 里出报错
function xiyueta_add_20221211() {
    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li><div>2</div></li>\n    <li>3</li>\n</ul>\n\n</body></html>'
    $.load(html);

    if ($("ul>li:eq(1)").add($("ul>li:eq(1)")).length != 1) return 'xiyueta_add_20221211 err1';
    if ($("ul>li:eq(1)").add().length != 1) return 'xiyueta_add_20221211 err2';
    if ($("li:eq(0)").add("").length != 1) return 'xiyueta_add_20221211 err3';
    // if(  $("li:eq(0)").add(1).length!=2 )return 'xiyueta_add_20221211 err4';//xiyueta不同
    // if(  $("li:eq(0)").add(123).length!=2 )return 'xiyueta_add_20221211 err5';//xiyueta不同
    // if(  $("li:eq(0)").add(313801120).length!=2 )return 'xiyueta_add_20221211 err6';//xiyueta不同
    if ($("li:eq(0)").add(null).length != 1) return 'xiyueta_add_20221211 err7';
    if ($("li:eq(0)").add(undefined).length != 1) return 'xiyueta_add_20221211 err8';
    // if(  $("li:eq(0)").add(fun()).length!=2 )return 'xiyueta_add_20221211 err9';//xiyueta不同
    if ($("li:eq(0)").add("a").length != 1) return 'xiyueta_add_20221211 err10';
    if ($("li:eq(0)").add(false).length != 1) return 'xiyueta_add_20221211 err11';
    // if(  $("li:eq(0)").add(true).length!=2 )return 'xiyueta_add_20221211 err12';//xiyueta不同
    // if(  $("li:eq(0)").add(1.1).length!=2 )return 'xiyueta_add_20221211 err13';//xiyueta不同
    // if(  $("li:eq(0)").add([1,2,3,4,5,6]).length!=7 )return 'xiyueta_add_20221211 err14';//xiyueta不同
    // if(  $("li:eq(0)").add({"a":1,"b":2,"c":3}).length!=2 )return 'xiyueta_add_20221211 err15';//xiyueta不同
    if ($("li:eq(0)").add(NaN).length != 1) return 'xiyueta_add_20221211 err16';
    // if(  $("li:eq(0)").add(Infinity ).length!=2 )return 'xiyueta_add_20221211 err17';//xiyueta不同
    // if(  $("li:eq(0)").add(function(){}).length!=2 )return 'xiyueta_add_20221211 err18';//xiyueta不同
    // if(  $("li:eq(0)").add(funtrue()).length!=2 )return 'xiyueta_add_20221211 err19';//xiyueta不同
    if ($("li:eq(0)").add(funfalse()).length != 1) return 'xiyueta_add_20221211 err20';
    if ($("li:eq(0)").add(funstr()).length != 1) return 'xiyueta_add_20221211 err21';
    // if(  $("li:eq(0)").add(funnumb()).length!=2 )return 'xiyueta_add_20221211 err22';//xiyueta不同
    // if(  $("li:eq(0)").add(funarray()).length!=6 )return 'xiyueta_add_20221211 err23';//xiyueta不同
    // if(  $("li:eq(0)").add(funobj()).length!=2 )return 'xiyueta_add_20221211 err24';//xiyueta不同
    if ($("li:eq(0)").add([]).length != 1) return 'xiyueta_add_20221211 err25';
    // if(  $("li:eq(0)").add({}).length!=2 )return 'xiyueta_add_20221211 err26';//xiyueta不同
    // if(  $("li:eq(0)").add( 100n ).length!=2 )return 'xiyueta_add_20221211 err27';//xiyueta不同

    return 'xiyueta_add_20221211 OK';
}


function xiyueta_find_20221211() {
    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li><div>2</div></li>\n    <li>3</li>\n</ul>\n\n</body></html>'
    $.load(html);

    if ($("ul").find(function() { return "li" }).length != 0) return 'xiyueta_find_20221211 err1';
    if ($("ul").find("li").length != 3) return 'xiyueta_find_20221211 err2';
    if ($("ul").find().length != 0) return 'xiyueta_find_20221211 err3';
    if ($("ul").find(1).length != 0) return 'xiyueta_find_20221211 err4';
    if ($("ul").find(123).length != 0) return 'xiyueta_find_20221211 err5';
    if ($("ul").find(313801120).length != 0) return 'xiyueta_find_20221211 err6';
    if ($("ul").find(null).length != 0) return 'xiyueta_find_20221211 err7';
    if ($("ul").find(undefined).length != 0) return 'xiyueta_find_20221211 err8';
    if ($("ul").find(fun()).length != 0) return 'xiyueta_find_20221211 err9';
    if ($("ul").find("a").length != 0) return 'xiyueta_find_20221211 err10';
    if ($("ul").find(false).length != 0) return 'xiyueta_find_20221211 err11';
    if ($("ul").find(true).length != 0) return 'xiyueta_find_20221211 err12';
    if ($("ul").find(1.1).length != 0) return 'xiyueta_find_20221211 err13';
    if ($("ul").find([1, 2, 3, 4, 5, 6]).length != 0) return 'xiyueta_find_20221211 err14';
    if ($("ul").find({ "a": 1, "b": 2, "c": 3 }).length != 0) return 'xiyueta_find_20221211 err15';
    if ($("ul").find(NaN).length != 0) return 'xiyueta_find_20221211 err16';
    if ($("ul").find(Infinity).length != 0) return 'xiyueta_find_20221211 err17';
    if ($("ul").find(function() {}).length != 0) return 'xiyueta_find_20221211 err18';
    if ($("ul").find(funtrue()).length != 0) return 'xiyueta_find_20221211 err19';
    if ($("ul").find(funfalse()).length != 0) return 'xiyueta_find_20221211 err20';
    if ($("ul").find(funstr()).length != 0) return 'xiyueta_find_20221211 err21';
    if ($("ul").find(funnumb()).length != 0) return 'xiyueta_find_20221211 err22';
    if ($("ul").find(funarray()).length != 0) return 'xiyueta_find_20221211 err23';
    if ($("ul").find(funobj()).length != 0) return 'xiyueta_find_20221211 err24';
    if ($("ul").find([]).length != 0) return 'xiyueta_find_20221211 err25';
    if ($("ul").find({}).length != 0) return 'xiyueta_find_20221211 err26';

    return 'xiyueta_find_20221211 OK';
}


function xiyueta_html_20221211() {
    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li><div>2</div></li>\n    <li>3</li>\n</ul>\n\n</body></html>'
    $.load(html);

    if ($("ul>li:eq(1)").html() != '<div>2</div>') return 'xiyueta_html_20221211 err1';
    if ($("li:eq(0)").html() != '1') return 'xiyueta_html_20221211 err2';
    if ($("li:eq(0)").html(1).html() != '1') return 'xiyueta_html_20221211 err3';
    if ($("li:eq(0)").html(123).html() != '123') return 'xiyueta_html_20221211 err4';
    if ($("li:eq(0)").html(313801120).html() != '313801120') return 'xiyueta_html_20221211 err5';
    if ($("li:eq(0)").html(null).html() != '') return 'xiyueta_html_20221211 err6'; //cheerio报错
    if ($("li:eq(0)").html(undefined).html() != '') return 'xiyueta_html_20221211 err7'; //cheerio报错
    if ($("li:eq(0)").html(fun()).html() != '1') return 'xiyueta_html_20221211 err8';
    if ($("li:eq(0)").html("a").html() != 'a') return 'xiyueta_html_20221211 err9';
    if ($("li:eq(0)").html(false).html() != '') return 'xiyueta_html_20221211 err10'; //cheerio不一样
    if ($("li:eq(0)").html(true).html() != 'true') return 'xiyueta_html_20221211 err11';
    if ($("li:eq(0)").html(1.1).html() != '1.1') return 'xiyueta_html_20221211 err12';
    if ($("li:eq(0)").html([1, 2, 3, 4, 5, 6]).html() != '123456') return 'xiyueta_html_20221211 err13'; //cheerio不一样
    if ($("li:eq(0)").html({ "a": 1, "b": 2, "c": 3 }).html() != '') return 'xiyueta_html_20221211 err14'; //cheerio不一样
    if ($("li:eq(0)").html(NaN).html() != '') return 'xiyueta_html_20221211 err15'; //cheerio不一样
    if ($("li:eq(0)").html(Infinity).html() != 'Infinity') return 'xiyueta_html_20221211 err16';
    if ($("li:eq(0)").html(function() {}).html() != 'Infinity') return 'xiyueta_html_20221211 err17'; //cheerio不一样
    if ($("li:eq(0)").html(funtrue()).html() != 'true') return 'xiyueta_html_20221211 err18';
    if ($("li:eq(0)").html(funfalse()).html() != '') return 'xiyueta_html_20221211 err19'; //cheerio不一样
    if ($("li:eq(0)").html(funstr()).html() != 'str') return 'xiyueta_html_20221211 err20';
    if ($("li:eq(0)").html(funnumb()).html() != '123') return 'xiyueta_html_20221211 err21';
    if ($("li:eq(0)").html(funarray()).html() != '12atrue') return 'xiyueta_html_20221211 err22'; //cheerio不一样
    if ($("li:eq(0)").html(funobj()).html() != '') return 'xiyueta_html_20221211 err23'; //cheerio不一样
    if ($("li:eq(0)").html([]).html() != '') return 'xiyueta_html_20221211 err24';
    if ($("li:eq(0)").html({}).html() != '') return 'xiyueta_html_20221211 err25'; //cheerio不一样

    return 'xiyueta_html_20221211 OK';
}


function xiyueta_text_20221211() {
    var html = '<html><head></head><body>\n<ul>\n    <li>1</li>\n    <li><div>2</div></li>\n    <li>3</li>\n</ul>\n\n</body></html>'
    $.load(html);

    if ($("ul>li:eq(1)").text() != '2') return 'xiyueta_text_20221211 err1';
    if ($("li:eq(0)").text() != '1') return 'xiyueta_text_20221211 err2';
    if ($("li:eq(0)").text(1).text() != '1') return 'xiyueta_text_20221211 err3';
    if ($("li:eq(0)").text(123).text() != '123') return 'xiyueta_text_20221211 err4';
    if ($("li:eq(0)").text(313801120).text() != '313801120') return 'xiyueta_text_20221211 err5';
    if ($("li:eq(0)").text(null).text() != '') return 'xiyueta_text_20221211 err6';
    if ($("li:eq(0)").text(undefined).text() != '') return 'xiyueta_text_20221211 err7';
    if ($("li:eq(0)").text(fun()).text() != '1') return 'xiyueta_text_20221211 err8';
    if ($("li:eq(0)").text("a").text() != 'a') return 'xiyueta_text_20221211 err9';
    if ($("li:eq(0)").text(false).text() != 'false') return 'xiyueta_text_20221211 err10';
    if ($("li:eq(0)").text(true).text() != 'true') return 'xiyueta_text_20221211 err11';
    if ($("li:eq(0)").text(1.1).text() != '1.1') return 'xiyueta_text_20221211 err12';
    if ($("li:eq(0)").text([1, 2, 3, 4, 5, 6]).text() != '1,2,3,4,5,6') return 'xiyueta_text_20221211 err13';
    if ($("li:eq(0)").text({ "a": 1, "b": 2, "c": 3 }).text() != '[object Object]') return 'xiyueta_text_20221211 err14';
    if ($("li:eq(0)").text(NaN).text() != 'NaN') return 'xiyueta_text_20221211 err15';
    if ($("li:eq(0)").text(Infinity).text() != 'Infinity') return 'xiyueta_text_20221211 err16';
    if ($("li:eq(0)").text(function() {}).text() != 'Infinity') return 'xiyueta_text_20221211 err17';
    if ($("li:eq(0)").text(funtrue()).text() != 'true') return 'xiyueta_text_20221211 err18';
    if ($("li:eq(0)").text(funfalse()).text() != 'false') return 'xiyueta_text_20221211 err19';
    if ($("li:eq(0)").text(funstr()).text() != 'str') return 'xiyueta_text_20221211 err20';
    if ($("li:eq(0)").text(funnumb()).text() != '123') return 'xiyueta_text_20221211 err21';
    if ($("li:eq(0)").text(funarray()).text() != '1,2,a,false,true') return 'xiyueta_text_20221211 err22';
    if ($("li:eq(0)").text(funobj()).text() != '[object Object]') return 'xiyueta_text_20221211 err23';
    if ($("li:eq(0)").text([]).text() != '') return 'xiyueta_text_20221211 err24';
    if ($("li:eq(0)").text({}).text() != '[object Object]') return 'xiyueta_text_20221211 err25';

    return 'xiyueta_text_20221211 OK';
}


function test_getDomain() {

    if ($.getDomain("http://www.xiyueta.com/css/style.css") != 'www.xiyueta.com') return 'this is err1';
    if ($.getDomain("http://www.xiyueta.com/css/style.css", true) != 'http://www.xiyueta.com') return 'this is err2';
    if ($.getDomain("https://xiyueta.com/case/?page=1", true) != 'https://xiyueta.com') return 'this is err3';
    if ($.getDomain("ftp://xiyueta.com/1.asp", true) != 'ftp://xiyueta.com') return 'this is err4';
    if ($.getDomain("1.jpg", true) != '') return 'this is err5';
    if ($.getDomain("//xiyueta.com/1.asp", true) != 'xiyueta.com') return 'this is err6';

    return "xiyueta.getDomain() OK";
}


//测试 xiyueta.print() 
function test_print() {


    var html = '<<<span name="aa">aa1122bb</span>'
    $().parse(html);
    if ($().printHtml() != '<<<span name="aa">aa1122bb</span>') {
        return "xiyueta().print() err1";
    }

    var html = '< aa aa<div name="aa">aa1122bb</div> <<div></div>>'
    $().parse(html);

    if ($().printHtml() != html) {
        return "xiyueta().print() err2";
    }

    return "xiyueta().print() OK";
}

//测试 xiyuetaCSS() 
function test_xiyuetaCSS() {

    var css = 'div{color:red;}.nav{font-size:12px;}#news{color:blue}';
    xiyuetaCSS().parse(css);
    // $().debug()
    // return xiyuetaCSS("(all):eq(-1)").html()

    if (xiyuetaCSS("(all)").length != 3) {
        return "xiyuetaCSS() err1";
    } else if (xiyuetaCSS("#news").css("color") != "blue") {
        return "xiyuetaCSS() err2";
    } else if (xiyuetaCSS(".nav").text() != "font-size:12px;") {
        return "xiyuetaCSS() err3";
    } else if (xiyuetaCSS("(all):eq(-1)").html() != "color:blue") {
        return "xiyuetaCSS() err4";
    } else if ((xiyuetaCSS("div:eq(0)").text() != xiyuetaCSS("div").eq(0).text()) || (xiyuetaCSS("div:eq()").text() != xiyuetaCSS("div").eq().text()) || (xiyuetaCSS("div:eq('abc')").text() != xiyuetaCSS("div").eq('abc').text()) || (xiyuetaCSS("div:eq(-1)").text() != xiyuetaCSS("div").eq(-1).text())) {
        return "xiyuetaCSS() err5";
    } else if ((xiyuetaCSS("div:first").text() != xiyuetaCSS("div").first(0).text()) || (xiyuetaCSS("div:last").text() != xiyuetaCSS("div").last().text())) {
        return "xiyuetaCSS() err6";
    } else if (xiyuetaCSS("(all):eq(-1)").htmlwrap() != "#news{color:blue}") {
        return "xiyuetaCSS() err7";
    }
    return "xiyuetaCSS() OK";
}
//测试 xiyueta().show() xiyueta().hide()
function test_showhide() {

    var html = '<span>xiyueta</span><p style="display:none">js library</p>';
    $().parse(html);
    // $().debug() 
    $("span").hide()
    $("p").show()

    // return $().printHtml()

    if ($().printHtml() != '<span style="display: none;">xiyueta</span><p>js library</p>') {
        return "xiyueta().show().hide() err1";
    }
    return "xiyueta().show().hide() OK";
}



//测试 xiyueta().selector()
function test_selector() {
    var html = '<h2 class="title">Hello world</h2><h2>Hello world</h2>';
    $().parse(html);
    // $().debug()
    // return $("h2.title").text('Hello there!').print()

    if ($("h2.title").text('Hello there!').printHtml() != '<h2 class="title">Hello there!</h2><h2>Hello world</h2>') {
        return "xiyueta().selector err1";
    } else if ($("*.title").text('xiyueta.com').printHtml() != '<h2 class="title">xiyueta.com</h2><h2>Hello world</h2>') {
        return "xiyueta().selector err2";
    }

    var html = '<ul><li>this is 1 </li><li>this is 2 </li><li>this is 3 </li><li>this is 4 </li><li>this is 5 </li></ul>';
    $().parse(html);
    var s1 = $("li").even().css("color", "red").printHtml();
    $().parse(html);
    var s2 = $("li:even").css("color", "red").printHtml();
    // return s1 +"\n"+ s2
    if (s1 != s2 || s1 != '<ul><li style="color: red;">this is 1 </li><li>this is 2 </li><li style="color: red;">this is 3 </li><li>this is 4 </li><li style="color: red;">this is 5 </li></ul>') {
        return "xiyueta().selector err3";
    }

    $().parse(html);
    var s1 = $("li").odd().css("color", "red").printHtml();
    $().parse(html);
    var s2 = $("li:odd").css("color", "red").printHtml();
    // return s1 +"\n"+ s2
    if (s1 != s2) {
        return "xiyueta().selector err4";
    }
    if (s1 != '<ul><li>this is 1 </li><li style="color: red;">this is 2 </li><li>this is 3 </li><li style="color: red;">this is 4 </li><li>this is 5 </li></ul>') {
        return "xiyueta().selector err5";
    }

    $().parse(html);

    // return $("li:eq(0)").text()+"\n"+$("li").eq(0).text()
    if (($("li:eq(0)").text() != $("li").eq(0).text())) {
        return "xiyueta().selector err6";
    }
    // console.log(1111,$("li:eq()").text())
    // console.log(2222,$("li").eq().text())
    if (($("li:eq()").text() != $("li").eq().text())) {
        return "xiyueta().selector err6.2";
    }
    if (($("li:eq('abc')").text() != $("li").eq('abc').text())) {
        return "xiyueta().selector err6.3";
    }

    if (($("li:eq(-1)").text() != $("li").eq(-1).text())) {
        return "xiyueta().selector err6.4";
    }



    return "xiyueta().selector() OK";
}

//测试 xiyueta().repair()
function test_repair() {
    var html = "<div><ul><li></li></div>";
    $().parse(html);
    $().repair();
    // $().debug()
    // return $().printHtml();

    if ($().printHtml() != "<div><ul><li></li></ul></div>") {
        return "xiyueta().repair err1";
    }


    var html = "<div>xiyueta\n<span> JS library</div>\n    <p>www.xiyueta.com\n</div>";
    $().parse(html);
    $().repair();
    // return $().printHtml()
    if ($().printHtml() != "<div>xiyueta\n<span> JS library</span></div>\n    <p>www.xiyueta.com\n</p>") {
        return "xiyueta().repair err2";
    }




    return "xiyueta().repair() OK";
}
//测试 xiyueta().wrap().unwrap()
function test_wrap() {
    var html = "<div><p class='nav'>hellp word<br>bbb</p></div>";
    $().parse(html);
    // $().debug()
    // return $("br").wrap("<div>aaa</div>").print()

    if ($("br").wrap("<div>aaa</div>").printHtml() != "<div><p class='nav'>hellp word<div>aaa<br></div>bbb</p></div>") {
        return "xiyueta().wrap().unwrap() err1";
    } else if ($("br").unwrap().printHtml() != "<div>hellp word<div>aaa<br></div>bbb</div>") {
        return "xiyueta().wrap().unwrap() err2";
    }
    return "xiyueta().wrap().unwrap() OK";
}


//测试 xiyueta().css()
function test_css() {
    var html = '<div>aaa</div><span style="font-size: 22px;color: red;">aaaa</span>';
    $().parse(html);
    // $().debug()
    // return $("div").htmlwrap() 
    if ($("div").css("color", "blue").htmlwrap() != '<div style="color: blue;">aaa</div>') {
        return "xiyueta().css() err1";
    } else if ($("span").css("font-size", "33px").css("color", "green").css("font-weight", "bold").htmlwrap() != '<span style="font-size: 33px; color: green; font-weight: bold;">aaaa</span>') {
        return "xiyueta().css() err2";
    } else if ($("li:eq(1)").parse("<li>aaa</li><li>1111</li><li>ccc</li>").css({ color: "red", "font-size": "22px" }).printHtml() != '<li>aaa</li><li style="color: red; font-size: 22px;">1111</li><li>ccc</li>') {
        return "xiyueta().css() err3";
    }
    return "xiyueta().css() OK";
}



//测试 xiyueta().item()
function test_item() {
    var html = '<a href="1.html">aa</a><a href="2.html">bb</a><a href="3.html">cc</a>';
    $().parse(html);
    // $().debug()
    // return $("a").item("href").length; 

    if ($("a").item("href").length != 3) {
        return "xiyueta().item() err1";
    }
    return "xiyueta().item() OK";
}

//测试 xiyueta().swap()
function test_swap() {
    var html = '<ul><li>1</li><li>2</li></ul><div><div>aaa</div></div>';
    $().parse(html);
    // $().debug()
    // return $("ul").swap("div:eq(1)").print(); 

    if ($("ul").swap("div:eq(1)").printHtml() != "<div>aaa</div><div><ul><li>1</li><li>2</li></ul></div>") {
        return "xiyueta().swap() err1";
    }

    var html = "start<div>1</div> center <span>2</span>end"
    $().parse(html);

    if ($("div").swap("span").printHtml() != "start<span>2</span> center <div>1</div>end") return "xiyueta().swap() err2";




    return "xiyueta().swap() OK";
}


//测试 xiyueta().dom()
function test_doc() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\' class=\'redA bb\'>xiyueta</a></li>\
    <li id="navs" class="  list  ">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>333'
    $().parse(html);
    // $().debug()
    // return $("li:eq(0)").domlabelwrap(); 

    if ($("li:eq(0)").dom() != "<a href='1.asp' class='redA bb'></a>") {
        return "xiyueta().dom() err1";
    } else if ($("li:eq(0)").domwrap() != "<li class=\"news\"><a href='1.asp' class='redA bb'></a></li>") {
        return "xiyueta().dom() err2";
    } else if ($("*").domlabel() != "<li><a></a></li><li><a></a></li><li><a></a></li>") {
        return "xiyueta().dom() err3";
    } else if ($("li:eq(0)").domlabelwrap() != "<li><a></a></li>") {
        return "xiyueta().dom() err4";

    }
    return "xiyueta().dom() OK";
}

//测试 xiyueta().eq()
function test_eq() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\' class=\'redA bb\'>xiyueta</a></li>\
    <li id="navs" class="  list  ">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>333'
    $().parse(html);
    // $().debug()
    // return $("li").eq(-6).text() 

    if ($("li").eq(0).text() != "1.xiyueta") {
        return "xiyueta().eq() err1";
    } else if ($("li").first().text() != "1.xiyueta") {
        return "xiyueta().eq() err1.1";
    } else if ($("li").eq(-1).text() != "3.xiyueta") {
        return "xiyueta().eq() err2";
    } else if ($("li").last().text() != "3.xiyueta") {
        return "xiyueta().eq() err2.1";
    } else if ($("li").eq(-2).text() != "2.javascript框架") {
        return "xiyueta().eq() err3";
    } else if ($("li").eq(-6).text() != "") {
        return "xiyueta().eq() err4";

    }
    return "xiyueta().eq().first().last() OK";
}


//测试 xiyueta().addClass()
function test_addClass() {
    var html = '<html><head></head><body><ul id="nav">\
    <li class="news">1.<a href=\'1.asp\' class=\'redA bb\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>333</body></html>'
    $().parse(html);
    // $().debug()
    // return $("a").removeClass(" bB ").print() 

    if ($("*:eq(3)").addClass("one").attr("class") != "one") {
        return "xiyueta().addClass() err1";
    } else if ($("a").removeClass(" bB ").attr("class") != "redA bb") {
        return "xiyueta().addClass() err2";
    } else if ($("a").removeClass(" bb ").attr("class") != "redA") {
        return "xiyueta().addClass() err3";
    } else if ($("li:eq(1)").parse("<li>aaa</li><li>1111</li><li>ccc</li>").attr({ id: "nav", name: "daohang" }).printHtml() != '<li>aaa</li><li id="nav" name="daohang">1111</li><li>ccc</li>') {
        return "xiyueta().addClass() err4";

    }
    return "xiyueta().addClass() OK";
}


//测试 xiyueta().each()
function test_each() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\' class=\'redA bb\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>333'
    $().parse(html);
    var s1 = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\' class=\'bb\'><b>new 2</b></a></li>\
    <li id="navs" class="list">2.</li>\
    <li class="news">3.<a href=\'3.asp\' class="greenB">&lt;b&gt;new 3&lt;/b&gt;</a></li>\
    </ul>333'

    // $().debug()
    // return $("li");
    var c = "";
    $("ul li").find("a").each(function(index, obj) {
        if (c != "") c += ",";
        c += $(obj).attr("href");
        if (index == 0) {
            $(obj).html("<b>new 2</b>").removeClass("redA")
        } else if (index == 1) {
            $(obj).remove();
        } else if (index == 2) {
            $(obj).text("<b>new 3</b>").addClass('greenB')
        }
    })

    // return $().printHtml()  + "\n"+ s1


    if (c != "1.asp,2.asp,3.asp") {
        return "xiyueta().each() err1";
    } else if ($().printHtml() != s1) {
        return "xiyueta().each() err2";

    }
    return "xiyueta().each() OK";
}

//测试 xiyueta().remove()
function test_remove() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>333'
    $().parse(html);


    // $().debug()
    // return $("li");

    if ($("li").remove().length != 3) {
        return "xiyueta().remove() err1";
    } else if ($("div").remove().length != 0) {
        return "xiyueta().remove() err1";

    }
    return "xiyueta().remove() OK";

}



//测试 xiyueta().val()
function test_val() {
    var html = '<textarea id="txt"><ul>\
        <li>aa</li>\
        <li>bb</li>\
        <li>cc</li>\
    </ul></textarea>\
 \
<input type="text" value="111">\
<input id="tow" type="text" value="222">\
<input class="setcolor" type="text" value="333">\
\
<select class="sel">\
    <option value="tt">tt</option>\
    <option value="pp" selected >pp</option>\
    <option value="11">11</option>\
    <option value="22">22</option>\
</select>'
    $().parse(html);
    var s1 = '<ul>\
        <li>aa</li>\
        <li>bb</li>\
        <li>cc</li>\
    </ul>'

    // $().debug()


    // return $(".sel").val()

    if ($("input").val() != "111") {
        return "xiyueta().val() err1";
    } else if ($("#txt").val() != s1) {
        return "xiyueta().val() err2";
    } else if ($(".sel").val() != "pp") {
        return "xiyueta().val() err3";
    } else if ($(" input ").val("new").val() != "new") {
        return "xiyueta().val() err4";
    } else if ($(" input ").val("new").val() != "new") {
        return "xiyueta().val() err5";
    } else if ($(" textarea ").val("new").val() != "new") {
        return "xiyueta().val() err6";
    }
    return "xiyueta().var() OK";

}

//测试 xiyueta().attr()
function test_attr() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>'
    $().parse(html);
    var s1 = '<ul id="nav" name="value">\
    <li class="news" name="value">1.<a href=\'1.asp\' name="value">xiyueta</a></li>\
    <li id="navs" class="list" name="value">2.<a href=\'2.asp\' name="value">javascript框架</a></li>\
    <li class="news" name="value">3.<a href=\'3.asp\' name="value">xiyueta</a></li>\
    </ul>'

    // return $("ul").find("li:eq(1)")

    if ($().attr("id") != undefined) {
        return "xiyueta().attr() err1";
    } else if ($("ul").find("li").attr("id") != undefined) {
        return "xiyueta().attr() err2";
    } else if ($("ul").find("li:eq(1)").attr("id") != "navs") {
        return "xiyueta().attr() err3";
    } else if ($("*").attr("name", "value").print() != s1) {
        return "xiyueta().attr() err4";
    } else if ($("li:eq(1)").attr("name", "newvalue").attr("name") != "newvalue") {
        return "xiyueta().attr() err5";
    }


    var html = "<div   id='nav'   href  src='aabb.jap'>aa</div>"
    $().parse(html);
    if ($("div").attr("id") != "nav") {
        return "xiyueta().attr() err6";
    } else if ($("div").removeAttr("id").attr("id") != undefined) {
        return "xiyueta().attr() err7";
    } else if ($("div").attr("href") != "") {
        return "xiyueta().attr() err8";
    } else if ($("div").removeAttr("href").attr("href") != undefined) {
        return "xiyueta().attr() err9";
    } else if ($.html() != "<div src='aabb.jap'>aa</div>") {
        return "xiyueta().attr() err10";
    }



    return "xiyueta().attr() OK";

}
//测试 xiyueta().html()
function test_html() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>'
    $().parse(html);

    // return $("ul").find("li:eq(2) a").html() 

    if ($().html() != undefined) {
        return "xiyueta().html() err1";
    } else if ($("ul").find("li:eq(2) a").html() != "xiyueta") {
        return "xiyueta().html() err2";
    } else if ($("ul li[class=news]:eq(1)").html("new html").html() != "new html") {
        return "xiyueta().html() err3";
    } else if ($("ul li:eq(1)").html() != "2.<a href='2.asp'>javascript框架</a>") {
        return "xiyueta().html() err4";
    }
    return "xiyueta().html() OK";

}


//测试 xiyueta().find()
function test_find() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>'
    $().parse(html);

    //     $().debug();
    // return $("ul").find("li[class=news] a").length

    if ($("*").find("li a").length != 3) {
        return "xiyueta().find() err1";
    } else if ($("ul").find("li[class=news] a").length != 2) {
        return "xiyueta().find() err2";
    } else if ($("ul").find("li[class=news]:eq(1) a").length != 1) {
        return "xiyueta().find() err3";
    }

    return "xiyueta().find() OK";
}

//测试 xiyueta().text()
function test_text() {
    var html = '<ul id="nav">\
    <li class="news">1.<a href=\'1.asp\'>xiyueta</a></li>\
    <li id="navs" class="list">2.<a href=\'2.asp\'>javascript框架</a></li>\
    <li class="news">3.<a href=\'3.asp\'>xiyueta</a></li>\
    </ul>'

    var s1 = '\
    1.xiyueta\
    2.javascript框架\
    3.xiyueta\
    1.xiyuetaxiyueta2.javascript框架javascript框架3.xiyuetaxiyueta'

    $().parse(html);
    // $().debug()
    // return $("ul *")
    if ($().text() != "") {
        return "xiyueta().text() err1";
    } else if ($("*").text() != s1) {
        return "xiyueta().text() err2";
    } else if ($("ul li:eq(1)").text() != "2.javascript框架") {
        return "xiyueta().text() err3";
    } else if ($("li:eq(1) a").text("this is new content").text() != "this is new content") {
        return "xiyueta().text() err4";
    } else if ($("").length != 0) {
        return "xiyueta().text() err5";
    } else if ($("*").length != 7) {
        return "xiyueta().text() err6";
    } else if ($("ul *").length != 6) {
        return "xiyueta().text() err7";
    } else if ($("li[class=news]").length != 2) {
        return "xiyueta().text() err8";
    } else if ($(" ul li[class=news]:eq(1) *").length != 1) {
        return "xiyueta().text() err9";
    }


    html = '<div name="<' + '%="aa"%' + '>">aa<' + '%=now()%' + '>bb</div>'
    // html='<div name="<'+'?="aa"?'+'>">aa<'+'?=now()?'+'>bb</div>'
    $().parse(html);
    if ($("div").text() != 'aa<' + '%=now()%' + '>bb') {
        return "xiyueta().text() err10";
    } else if ($("div").attr("name") != '<' + '%="aa"%' + '>') {
        return "xiyueta().text() err11";
    }
    html = '<div name="<' + '?="aa"?' + '>">aa<' + '?=now()?' + '>bb</div>'
    $().parse(html);
    if ($("div").text() != 'aa<' + '?=now()?' + '>bb') {
        return "xiyueta().text() err12";
    } else if ($("div").attr("name") != '<' + '?="aa"?' + '>') {
        return "xiyueta().text() err13";
    }



    return "xiyueta().text() OK";
}
//测试 xiyueta().moreother()
function test_moreother() {
    var html = '<ul>\
    <li>aaaa</li>\
    <li>bbbb</li>\
    <li>cccc<br></li>\
    </ul><div>1111<br></div><span>2<br>2<br>2</span>'

    $().parse(html);
    // $().debug()
    // return $("ul *,span").length
    if ($("ul *,span").length != 5) {
        return "xiyueta().text() test_moreother err1";
    } else if ($("ul ,span").find("br").length != 3) {
        return "xiyueta().text() test_moreother err2";
    }
    return "xiyueta().moreother() OK";
}
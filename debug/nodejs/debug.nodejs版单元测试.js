var $ = require('./../../dist/nodejs.xiyueta.min.js');
//var $ = require('xiyueta');//本地存在则可以直接调用 使用方法:在CMD里输入 node debug.nodejs版单元测试.js
//为了兼容在ASP里测试，少用中文或中文符号，会报错和乱码

var beginTime = +new Date();


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





//测试 xiyueta.print() 
function test_print() {


    var html = '<<<span name="aa">aa1122bb</span>'
    $().parse(html);
    if ($().print() != '<<<span name="aa">aa1122bb</span>') {
        return "xiyueta().print() err1";
    }

    var html = '< aa aa<div name="aa">aa1122bb</div> <<div></div>>'
    $().parse(html);
    
    if ($().print() != html) {
        return "xiyueta().print() err2";
    }

    return "xiyueta().print() TestOK";
}

//测试 xiyuetacss() 
function test_xiyuetaCSS() {

    var css = 'div{color:red;}.nav{font-size:12px;}#news{color:blue}';
    xiyuetaCSS().parse(css);
    // $().debug()
    // return xiyuetaCSS("(all):eq(-1)").html()

    if (xiyuetaCSS("(all)").length != 3) {
        return "xiyuetacss() err1";
    } else if (xiyuetaCSS("#news").css("color") != "blue") {
        return "xiyuetacss() err2";
    } else if (xiyuetaCSS(".nav").text() != "font-size:12px;") {
        return "xiyuetacss() err3";
    } else if (xiyuetaCSS("(all):eq(-1)").html() != "color:blue") {
        return "xiyuetacss() err4";
    } else if ((xiyuetaCSS("div:eq(0)").text() != xiyuetaCSS("div").eq(0).text()) || (xiyuetaCSS("div:eq()").text() != xiyuetaCSS("div").eq().text()) || (xiyuetaCSS("div:eq('abc')").text() != xiyuetaCSS("div").eq('abc').text()) || (xiyuetaCSS("div:eq(-1)").text() != xiyuetaCSS("div").eq(-1).text())) {
        return "xiyuetacss() err5";
    } else if ((xiyuetaCSS("div:first").text() != xiyuetaCSS("div").first(0).text()) || (xiyuetaCSS("div:last").text() != xiyuetaCSS("div").last().text())) {
        return "xiyuetacss() err6";
    } else if (xiyuetaCSS("(all):eq(-1)").htmlwrap() != "#news{color:blue}") {
        return "xiyuetacss() err7";
    }
    return "xiyuetacss() TestOK";
}
//测试 xiyueta().show() xiyueta().hide()
function test_showhide() {

    var html = '<span>xiyueta</span><p style="display:none">js library</p>';
    $().parse(html);
    // $().debug() 
    $("span").hide()
    $("p").show()

    // return $().print()

    if ($().print() != '<span style="display: none;">xiyueta</span><p>js library</p>') {
        return "xiyueta().show().hide() err1";
    }
    return "xiyueta().show().hide() TestOK";
}



//测试 xiyueta().selector()
function test_selector() {
    var html = '<h2 class="title">Hello world</h2><h2>Hello world</h2>';
    $().parse(html);
    // $().debug()
    // return $("h2.title").text('Hello there!').print()

    if ($("h2.title").text('Hello there!').print() != '<h2 class="title">Hello there!</h2><h2>Hello world</h2>') {
        return "xiyueta().selector err1";
    } else if ($("*.title").text('xiyueta.com').print() != '<h2 class="title">xiyueta.com</h2><h2>Hello world</h2>') {
        return "xiyueta().selector err2";
    }

    var html = '<ul><li>this is 1 </li><li>this is 2 </li><li>this is 3 </li><li>this is 4 </li><li>this is 5 </li></ul>';
    $().parse(html);
    var s1 = $("li").even().css("color", "red").print();
    $().parse(html);
    var s2 = $("li:even").css("color", "red").print();
    // return s1 +"\n"+ s2
    if (s1 != s2 || s1 != '<ul><li style="color: red;">this is 1 </li><li>this is 2 </li><li style="color: red;">this is 3 </li><li>this is 4 </li><li style="color: red;">this is 5 </li></ul>') {
        return "xiyueta().selector err3";
    }

    $().parse(html);
    var s1 = $("li").odd().css("color", "red").print();
    $().parse(html);
    var s2 = $("li:odd").css("color", "red").print();
    // return s1 +"\n"+ s2
    if (s1 != s2 ) {
        return "xiyueta().selector err4";
    }if (s1 != '<ul><li>this is 1 </li><li style="color: red;">this is 2 </li><li>this is 3 </li><li style="color: red;">this is 4 </li><li>this is 5 </li></ul>') {
        return "xiyueta().selector err5";
    }

    $().parse(html);

    // return $("li:eq(0)").text()+"\n"+$("li").eq(0).text()
    if (($("li:eq(0)").text() != $("li").eq(0).text()) || ($("li:eq()").text() != $("li").eq().text()) || ($("li:eq('abc')").text() != $("li").eq('abc').text()) || ($("li:eq(-1)").text() != $("li").eq(-1).text())) {
        return "xiyueta().selector err6";
    }



    return "xiyueta().selector() TestOK";
}

//测试 xiyueta().repair()
function test_repair() {
    var html = "<div><ul><li></li></div>";
    $().parse(html);
    $().repair();
    // $().debug()
    // return $().print();

    if ($().print() != "<div><ul><li></li></ul></div>") {
        return "xiyueta().repair err1";
    }


    var html = "<div>xiyueta\n<span> JS library</div>\n    <p>www.xiyueta.com\n</div>";
    $().parse(html);
    $().repair();
    // return $().print()
    if ($().print() != "<div>xiyueta\n<span> JS library</span></div>\n    <p>www.xiyueta.com\n</p>") {
        return "xiyueta().repair err2";
    }




    return "xiyueta().repair() TestOK";
}
//测试 xiyueta().wrap().unwrap()
function test_wrap() {
    var html = "<div><p class='nav'>hellp word<br>bbb</p></div>";
    $().parse(html);
    // $().debug()
    // return $("br").wrap("<div>aaa</div>").print()

    if ($("br").wrap("<div>aaa</div>").print() != "<div><p class='nav'>hellp word<div>aaa<br></div>bbb</p></div>") {
        return "xiyueta().wrap().unwrap() err1";
    } else if ($("br").unwrap().print() != "<div>hellp word<div>aaa<br></div>bbb</div>") {
        return "xiyueta().wrap().unwrap() err2";
    }
    return "xiyueta().wrap().unwrap() TestOK";
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
    } else if ($("li:eq(1)").parse("<li>aaa</li><li>1111</li><li>ccc</li>").css({ color: "red", "font-size": "22px" }).print() != '<li>aaa</li><li style="color: red; font-size: 22px;">1111</li><li>ccc</li>') {
        return "xiyueta().css() err3";
    }
    return "xiyueta().css() TestOK";
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
    return "xiyueta().item() TestOK";
}

//测试 xiyueta().swap()
function test_swap() {
    var html = '<ul><li>1</li><li>2</li></ul><div><div>aaa</div></div>';
    $().parse(html);
    // $().debug()
    // return $("ul").swap("div:eq(1)").print(); 

    if ($("ul").swap("div:eq(1)").print() != "<div>aaa</div><div><ul><li>1</li><li>2</li></ul></div>") {
        return "xiyueta().swap() err1";
    }

    var html = "开始<div>1</div> 中间 <span>2</span>结束"
    $().parse(html);

    if ($("div").swap("span").print() != "开始<span>2</span> 中间 <div>1</div>结束") return "xiyueta().swap() err2";




    return "xiyueta().swap() TestOK";
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
    return "xiyueta().dom() TestOK";
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
    return "xiyueta().eq().first().last() TestOK";
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
    } else if ($("li:eq(1)").parse("<li>aaa</li><li>1111</li><li>ccc</li>").attr({ id: "nav", name: "daohang" }).print() != '<li>aaa</li><li id="nav" name="daohang">1111</li><li>ccc</li>') {
        return "xiyueta().addClass() err4";

    }
    return "xiyueta().addClass() TestOK";
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

    // return $().print()  + "\n"+ s1


    if (c != "1.asp,2.asp,3.asp") {
        return "xiyueta().each() err1";
    } else if ($().print() != s1) {
        return "xiyueta().each() err2";

    }
    return "xiyueta().each() TestOK";
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
    return "xiyueta().remove() TestOK";

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


    // return xiyueta().val() 

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
    return "xiyueta().var() TestOK";

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
    }else if ($("div").removeAttr("id").attr("id") !=undefined) {
        return "xiyueta().attr() err7";
    }else if ($("div").attr("href")!="") {
        return "xiyueta().attr() err8";
    }else if ($("div").removeAttr("href").attr("href") !=undefined) {
        return "xiyueta().attr() err9";
    }else if ($.html() !="<div src='aabb.jap'>aa</div>") {
        return "xiyueta().attr() err10";
    } 
 


    return "xiyueta().attr() TestOK";

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
    return "xiyueta().html() TestOK";

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

    return "xiyueta().find() TestOK";
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



    return "xiyueta().text() TestOK";
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
    return "xiyueta().moreother() TestOK";
}
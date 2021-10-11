<%  
response.addheader "Content-Type", "text/html; charset=utf-8"
 
'获得文件大小
function getFSize(byVal fileName)
    on error resume next 
    dim fso, openFile 
    call handlePath(fileName)                                                       '获得完整路径
    getFSize = 0 
    set fso = createObject("Scripting.FileSystemObject")
        if fso.fileExists(fileName) = true then
            set openFile = fso.getFile(fileName)
                getFSize = openFile.size 
            set openFile = nothing 
        end if 
    set fso = nothing 
    if err then call doError(err.description, "getFSize 获得文件大小 函数出错，FileName=" & fileName) 
end function 

'检查文件
function checkFile(byVal filePath)
    on error resume next 
    dim fso 
    call handlePath(filePath)                                                       '获得完整路径
    set fso = createObject("Scripting.FileSystemObject")
        checkFile = fso.fileExists(filePath) 
    set fso = nothing 
    if err then call doError(err.description, "checkFile 检查文件 函数出错，filePath=" & filePath) 
end function

'处理成完成路径 (2013,9,27
function handlePath(fFPath)                                                     'Path前面不加ByVal 重定义，这样是为了让前面函数里可以使用这个路径完整调用
    fFPath = replace(fFPath, "/", "\") 
    fFPath = replace(fFPath, "\\", "\") 
    fFPath = replace(fFPath, "\\", "\") 
    dim isDir                                                                       '为目录
    isDir = false 
    if right(fFPath, 1) = "\" then
        isDir = true 
    end if 
    if inStr(fFPath, ":") = 0 then
        if left(fFPath, 1) = "\" then
            fFPath = server.mapPath("\") & "\" & fFPath 
        else
            fFPath = server.mapPath(".\") & "\" & fFPath 
        end if 
    end if 
    fFPath = replace(fFPath, "/", "\") 
    fFPath = replace(fFPath, "\\", "\") 
    fFPath = replace(fFPath, "\\", "\") 
    fFPath = fullPath(fFPath) 
    if isDir = true then
        fFPath = fFPath & "\" 
    end if 
    handlePath = fFPath 
end function 
'完整路径
function fullPath(byVal fFPath)
    dim splStr, s, c 
    c = "" 
    fFPath = replace(fFPath, "/", "\") 
    splStr = split(fFPath, "\") 
    for each s in splStr
        s = trim(s) 
        if s <> "" and s <> "." then
            if inStr(c, "\") > 0 and s = ".." then
                c = mid(c, 1, inStrRev(c, "\") - 1) 
            else
                if c <> "" and right(c, 1) <> "\" then c = c & "\" 
                c = c & s 
            end if 
        end if 
    next 
    fullPath = c 
end function 

'写入内容
function writeToFile(byVal fileName, byVal content, byVal char_Set)
    on error resume next 
    if char_Set = "1" or uCase(char_Set) = "GB2312" then
        char_Set = "GB2312" 
    elseIf char_Set = "0" or uCase(char_Set) = "UTF-8" then
        char_Set = "UTF-8" 
    elseIf char_Set = "2" or uCase(char_Set) = "UNICODE" then
        char_Set = "UNICODE" 
    else    
        char_Set = "utf-8"   
    end if 
    'Call Echo("Char_Set",Char_Set)
    dim stm 
    call handlePath(fileName)                                                       '获得完整路径
    set stm = createObject("ADODB.Stream")
        stm.type = 2                                                                    '以本模式读取
        stm.mode = 3 
        stm.charset = char_Set 
        stm.open 
        call stm.writeText(content) 
        call stm.saveToFile(fileName, 2) 
        stm.flush 
        stm.close 
        writeToFile = fileName & "写入成功" 
    set stm = nothing 
    if err then call doError(Err.description, "WriteToFile，数据流写入内容 函数出错，FileName=" & fileName & "，Content字符" & len(content)) 
end function 
'数据流读出内容
function readFile(byVal fileName, byVal char_Set)
    'on error resume next
    char_Set=char_Set & ""
    if char_Set = "1" or uCase(char_Set) = "GB2312" then
        char_Set = "GB2312" 
    elseIf char_Set = "0" or uCase(char_Set) = "UTF-8" then
        char_Set = "UTF-8" 
    elseIf char_Set = "2" or uCase(char_Set) = "UNICODE" then
        char_Set = "UNICODE" 
    elseIf char_Set = "3" or uCase(char_Set) = "UNICODE BIG ENDIAN" then
        char_Set = "UNICODE" 
    else    
        char_Set = "utf-8"   
    end if 
    dim str, stm, f, fso 
    call handlePath(fileName)                                                       '获得完整路径
    if checkFile(fileName) = false then
        readFile = "" 
        exit function 
    end if 
    set stm = createObject("ADODB.Stream")
        stm.type = 2                                                                    '以本模式读取
        stm.mode = 3 
        stm.charset = char_Set 
        stm.open 
        set fso = createObject("Scripting.FileSystemObject")
            set f = fso.getFile(fileName)
                if f.size > 0 then
                    call stm.loadFromFile(fileName) 
                end if 
                str = stm.readText 
                stm.close 
            set stm = nothing 
            readFile = str 
            if err then call doError(Err.description, "ReadFile，数据流读出内容 函数出错，FileName=" & fileName) 
        set fso = nothing 
    set stm = nothing 
end function 



if request("act")="save" then 
    call updateTestCode("debugXiyueta.html",request("content")) 
    call updateTestCode("debugXiyueta.asp",request("content"))
    call updateTestCode("debugXiyueta.js",request("content")) 
    call updateTestCode("debugJquery20211005.asp",request("content"))'自身' 
    response.write("save jquery test OK")
    response.end()
end if
function getHtml()    
    html=readfile("debugJquery20211005.asp","utf-8")
    nLen=instr(html,"%" & ">")
    if nLen>0 then
        html=mid(html,nLen+2)
    end if
    nLen=instr(html,"<" & "script ")
    if nLen>0 then
        html=mid(html,1,nLen)
    end if
    html=replace(replace(replace(replace(html,"\","\\"),vbcrlf,"\n"),"""","\"""),"'","\'")
    html="<html><head></head><body>"& html &"</body></html>"
    getHtml=html
end function

'更新jquery测试代码段
function updateTestCode(filePath,jQueryContent)
    dim c,s,nStart,nEnd,startStr,endStr,html
    jQueryContent=request("content")
    html=getHtml()
    c=readfile(filePath,"utf-8")
    startStr="function" & " test_jQuery() {"
    nStart=instr(c,startStr)
    endStr="return " & "'test_jQuery OK';"
    nEnd=instr(c, endStr)
    if nStart=false or nEnd=false then updateTestCode=false:exit function   
    c=mid(c,1,nStart+len(startStr)-1) & vbcrlf & jQueryContent & vbcrlf & vbcrlf & "    " & mid(c,nEnd)
    
    startStr="var "+"html = '"
    nStart=instr(c,startStr)
    endStr="//---------"+"----------"
    nEnd=instr(c, endStr)
    if nStart<>false and nEnd<>false then
        c=mid(c,1,nStart+len(startStr)-1)   & html & "'" & vbcrlf  & mid(c,nEnd) 
    end if
    
    

    call writeToFile(filePath,c,"utf-8")
    response.write(filePath & " update OK" & vbcrlf)
end function
%>中国<ul id="nav">
    <li>this is 1</li>
    <li>this is 2</li>
    <li>this is 3</li>
    <li>this is 4</li>
    <li>this is 5</li>
</ul>
<ul id="news">
    <li style="color:red;">this is 1</li>
    <li name="aa">this is 2</li>
    <li name="bb">this is 3</li>
    <li name="cc">this is 4</li>
    <li name="dd">this is 5</li>
</ul>
<div id="home"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>
<div id="home2"><p style="color:red:font-size:12p;" class="aa" id="home-list" name="bb"></p></div>
<ul id="css">
    <li style="   color   :  red  ">this is 1</li>
    <li name="aa">this is 2</li>
    <li name="bb">this is 3</li>
    <li name="cc">this is 4</li>
    <li name="dd">this is 5</li>
</ul>
<ul id="css2">
    <li style="   color   :  red  ">this is 1</li>
    <li name="aa">this is 2</li>
    <li name="bb">this is 3</li>
</ul>
<ul id="css3">
    <li style="   color   :  red  ">this is 1</li>
    <li name="aa">this is 2</li>
    <li name="bb">this is 3</li>
</ul>
<div id="val">
    <input type="text" value="111">
    <input type="text" value="222">
    <input type="text" value="333">
    <select name="select" id="select">
        <option value="xiyueta">xiyueta</option>
        <option value="xiyueta.com">xiyueta.com</option>
        <option value="js库">js库</option>
    </select>
</div>
<div id="val2">
    <input type="text" value="111">
    <input type="text" value="111">
    <input type="text" value="111">
</div>
<div id="remove">
    <p class="hello">Hello</p>
        how are
    <p>you?</p>
</div>
<div id="remove2">
    <p class="hello">Hello</p>
        how are
    <p>you?</p>
</div>
<div id="each">
    <ul>
        <li>aa</li>
        <li>bb</li>
        <li>cc</li>
    </ul>
</div>
<div id="addClass">
    <ul>
        <li class="aa">1</li>
        <li class="bb">2</li>
        <li>3</li>
    </ul>
</div>
<div id="addClass2">
    <ul>
        <li class="aa">1</li>
        <li class="bb">2</li>
        <li>3</li>
    </ul>
</div>
<div id="removeClass">
    <ul>
        <li class="s1 aa">1</li>
        <li class="s1 bb">2</li>
        <li class=" s1 aa cc bb">3</li>
    </ul>
</div>
<div id="removeClass2">
    <ul>
        <li class="s1 aa">1</li>
        <li class="s1 bb">2</li>
        <li class=" s1 aa cc bb">3</li>
    </ul>
</div>
<ul id="hasClass"><li class='aa'>aa</li><li>bb</li></ul>
<div id="wrap"><p>aaa</p><p>bbbb</p></div>
<div id="wrapB"><br></div>
<div id="wrap2"><p>aaa</p><p>bbbb</p></div>
<div id="unwrap"><p>aaa<br><div>bbb</div></p></div>

<ul id="next">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>

<div id="append">
    <p>defaultA</p>
    <p>defaultB</p>
</div>
<div id="after">
    <p>defaultA</p>
    <p>defaultB</p>
</div>
<div id="before">
    <p>defaultA</p>
    <p>defaultB</p>
</div>
<div id="showhide"><p></p><span style="display: none;">xiyuta</span>
</div>
<div class="china"></div>
<div class="XiYueta"></div>
<div id="day20211001">
    <h2 class="Title">Hello world</h2>
</div>
<div id="add">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<div id="children">
    <span><p></p><br></span>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<div id="children2">xiyueta.com<span><br><br><br><br><p></p></span><br><p></p></div>
<div id="closest">
    <div></div>    
    <span><br></span>
</div>
<div id="closest2">
    <div></div>    
    <span><br></span>
</div>
<div id="filter">
    <div></div>
    <div class="middle"></div>
    <div class="middle"></div>
    <div class="middle"></div>
    <div class="middle"></div>
    <div><div class="middle"></div></div>

</div>
<div id="contents">
    <a>bb<br><p>dd</p></a>
    <span><br></span>
    <br>
</div>

<div id="replaceWith">
  <div class="inner first">Hello</div>
  <div class="inner second">And</div>
  <div class="inner third">Goodbye</div>
</div>  
<div id="replaceWith2">
  <div class="inner first">Hello</div>
  <div class="inner second">And</div>
  <div class="inner third">Goodbye</div>
</div>  
<div id="replaceWith3">
  <div class="inner first">Hello</div>
  <div class="inner second">And</div>
  <div class="inner third">Goodbye</div>
</div> 
<div id="replaceWith4">
    <div>xiyueta.com</div>内容<span>313801120</span><p>11</p>    
</div> 

<div id="day20211005">
    <div class="layui-header header header-index" summer>
        aaa
    </div>  
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<%if request("act")<>"show" then%>
<script type="text/javascript">
function createJqueryDebug(){
    var err = 0;
    var c ="";

    c += "\n" + getJQueryDebug('$("#nav li").text(function(i){return "text"+i}).text()');
    c += "\n" + getJQueryDebug('$("#nav li:eq(1)").text("xiyueta.com").text()');
    c += "\n"+getJQueryDebug('$("#nav li").text()');

    c += "\n" + getJQueryDebug('$("#nav li").html(function(i){return "html"+i}).html()'); //cheerio没有此功能 
    c += "\n" + getJQueryDebug('$("#nav li:eq(1)").html("xiyueta.com").html()');
    c += "\n"+getJQueryDebug('$("#nav li").html()');
    c += "\n" + getJQueryDebug('$("#nav li").length');

    c += "\n" + getJQueryDebug(' $("#nav").find("li").css("color","green").end().html() ');
    c += "\n" + getJQueryDebug(' $("#nav").find($("li:eq(1)")).css("color","red").end().html() ');


    c += "\n" + getJQueryDebug(' $("#news").attr("name","your news").attr("name") ');
    c += "\n" + getJQueryDebug(' $("#news").find("li").attr({"id":"nav","name":"xiyueta"}).end().html() ');
    c += "\n" + getJQueryDebug('$("#news").find("li").attr("id",function(i){return "attr"+i}).end().html()');

    c += "\n" + getJQueryDebug('$("#home").find("p").removeAttr("style").end().html()');
    c += "\n" + getJQueryDebug('$("#home2").find("p").removeAttr(" id name class href src style").end().html()');

    c += "\n" + getJQueryDebug('$("#css").find("li").css("font-size","12px").end().html()');
    c += "\n" + getJQueryDebug('$("#css2").find("li").css({"font-size":"12px","color":"blue"}).end().html()');
    c += "\n" + getJQueryDebug('$("#css3").find("li").css("color",function(i){return "red"}).end().html()');  //cheerio没有此功能

    c += "\n" + getJQueryDebug('$("#val input:eq(1)").val()'); 
    c += "\n" + getJQueryDebug('$("#val input").length'); 
    c += "\n" + getJQueryDebug('$("#val input:eq(0)").val("xiyueta.com").val()'); 
    c += "\n" + getJQueryDebug('$("#val").find("select").val("xiyueta.com").val()'); 
    c += "\n" + getJQueryDebug('$("#val2").find("input").val(function(i){return "111"}).end().html()');  //改变值，jQuery获得时没有改变，所以设置和初始一样，只显示传函数可不可以

    c += "\n" + getJQueryDebug('$("#remove").find("p").remove().end().html()'); 
    c += "\n" + getJQueryDebug('$("#remove2").find("p").remove(\':contains("Hello")\').end().html()'); 

    c += "\n" + getJQueryDebug('$("#each").find("ul li").each(function(i){$(this).text("text"+i);$(this).css("color","red");}).end().html()'); //cheerio传数字会报错

    c += "\n" + getJQueryDebug('$("#addClass").find("ul li").addClass("cc dd").end().html()'); //cheerio传数字会报错
    c += "\n" + getJQueryDebug('$("#addClass").find("ul li").addClass(function(i){return i}).end().html()'); //数字类型不添加

    // c += "\n" + getJQueryDebug('$("#removeClass").find("ul li").removeClass("aa").end().html()'); //元素参数为空时自动删除，这个与jQuery不一样，待以后看要不要改成和jquery一样
    c += "\n" + getJQueryDebug('$("#removeClass").find("ul li").removeClass(function(){return "aa"}).end().html()'); 
    c += "\n" + getJQueryDebug('$("#removeClass2").find("ul li").removeClass(["aa","bb","cc"]).end().html()');//cheerio不支持这种方法 

    c += "\n" + getJQueryDebug('$("#hasClass li:last").hasClass("aa").toString()')
    c += "\n" + getJQueryDebug('$("#hasClass li").hasClass("aa").toString()')
 
     


    // c += "\n" + getJQueryDebug('$("#unwrap").find("br").unwrap().end().html()')
    c += "\n" + getJQueryDebug('$("#wrap").find("p:eq(0)").wrap("<span style=\\"color:red\\"></span>").end().html()');//jQuery会自动把style=''的单引号转成双引号，这个与我的程序不一样，这个暂时不改变了，就这样了
    
    c += "\n" + getJQueryDebug('$("#wrap").find("p:eq(0)").wrap("<span style=\\"color:red\\">111111</span>").end().html()');//有1111这种在cheerio里报错
    
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(0)").next().html()');
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(0)").nextAll().text()');
    
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").prev().html()');
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").prevAll().text()');
    
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").siblings().length');
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").siblings().text()');
    
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").parent().text()');
    c += "\n" + getJQueryDebug('$("#next").find("li:eq(-2)").parents().length');

    c += "\n" + getJQueryDebug('$("#next li").eq(0).length');
    c += "\n" + getJQueryDebug('$("#next li").eq(1).length');
    c += "\n" + getJQueryDebug('$("#next li").eq(10).length');
    c += "\n" + getJQueryDebug('$("#next li").eq(-1).length');
    c += "\n" + getJQueryDebug('$("#next li").first().length');
    c += "\n" + getJQueryDebug('$("#next li").first().text()');
    c += "\n" + getJQueryDebug('$("#next li").last().length');
    c += "\n" + getJQueryDebug('$("#next li").last().text()');
    c += "\n" + getJQueryDebug('$("#next li").even().length');  //cheerio没有此功能
    c += "\n" + getJQueryDebug('$("#next li").even().text()'); //cheerio没有此功能
    c += "\n" + getJQueryDebug('$("#next li").odd().length'); //cheerio没有此功能
    c += "\n" + getJQueryDebug('$("#next li").odd().text()'); //cheerio没有此功能
    
    c += "\n" + getJQueryDebug('$("#next li").slice(0,3).length');  
    c += "\n" + getJQueryDebug('$("#next li").slice(0,3).text()');  
    c += "\n" + getJQueryDebug('$("#next li").slice(-2,-1).text()');

    // c += "\n" + getJQueryDebug('$("#append p").append(1).text()'); //cheerio里参数不能为数字 
    c += "\n" + getJQueryDebug('$("#append p").append("aabb").text()');  
    c += "\n" + getJQueryDebug('$("#append p").append(function(i){return "append"+i}).text()');//cheerio返回不为能数
    c += "\n" + getJQueryDebug('$("#prepend p").prepend("aabb").text()');  
    c += "\n" + getJQueryDebug('$("#prepend p").prepend(function(i){return "prepend"+i}).text()');

    c += "\n" + getJQueryDebug('$("#prepend p").prepend("aabb").text()');  
    c += "\n" + getJQueryDebug('$("#prepend p").prepend(function(i){return "prepend"+i}).text()');

    c += "\n" + getJQueryDebug('$("#after").find("p").after("aabb").end().text()');  
    c += "\n" + getJQueryDebug('$("#after").find("p").after(function(i){return "after"+i}).end().text()');

    c += "\n" + getJQueryDebug('$("#before").find("p").before("aabb").end().text()');  
    c += "\n" + getJQueryDebug('$("#before").find("p").before(function(i){return "before"+i}).end().text()');

    c += "\n" + getJQueryDebug('$("#showhide").find("p").show().end().text()');    //cheerio没有此功能
    c += "\n" + getJQueryDebug('$("#showhide").find("span").hide().end().text()');//cheerio没有此功能
    
    c += "\n" + getJQueryDebug('$("ul LI").length');

    c += "\n" + getJQueryDebug('$("#showhide").length');
    c += "\n" + getJQueryDebug('$("#showhidE").length');
    c += "\n" + getJQueryDebug('$(" #showhide ").length');

    c += "\n" + getJQueryDebug('$(".china").length');
    // c += "\n" + getJQueryDebug('$(".chinA").length');  //cheerio查找不到
    c += "\n" + getJQueryDebug('$(" .china  ").length');

    c += "\n" + getJQueryDebug('$(" .XiYueta  ").length');
    c += "\n" + getJQueryDebug('$(" .xiyueta  ").length'); //cheerio查找不到
    c += "\n" + getJQueryDebug('$(" .xiyueTA  ").length'); //cheerio查找不到
    
    c += "\n" + getJQueryDebug('$(" li  ").length');

    c += "\n" + getJQueryDebug('$(" #day20211001 .Title  ").length');
    c += "\n" + getJQueryDebug('$("h2.title").length');  //cheerio查找不到
    c += "\n" + getJQueryDebug('$("h2.title").text(123).text()'); //cheerio查找不到
    
    c += "\n" + getJQueryDebug('$("div#add").add("div#add li").length');
    c += "\n" + getJQueryDebug('$("div#add").add($("div#add li")).length');
    // // c += "\n" + getJQueryDebug('$("div#add").add(342222).length');//jquery里是2条，但是在cheerio是1 jquery出错了
    
    c += "\n" + getJQueryDebug('$("div#add").add("div#add").length');
    c += "\n" + getJQueryDebug('$("div#children span").children().length');
    c += "\n" + getJQueryDebug('$("div#children2").children().length');
    
    c += "\n" + getJQueryDebug('$("div#closest br").closest("span").html()');
    c += "\n" + getJQueryDebug('$("div#closest br,div#closest2 br").closest("span").length');
    
    c += "\n" + getJQueryDebug('$("div#filter div").filter( ".middle" ).length');
    // c += "\n" + getJQueryDebug('$("div#contents").contents().length');//xiyueta没有此功能因为它和children差不多，只是多了个文本块，文本块也算进了数组了，不知道这个什么意思，暂时先不要写了
    // c += "\n" + getJQueryDebug('$("div#contents").contents().text()');//等于 children   + 当前doc列表，我是这么理解的
    
    c += "\n" + getJQueryDebug('$( "#replaceWith" ).find(".inner").replaceWith( "<h2>New heading</h2>" ).end().html()');
    // c += "\n" + getJQueryDebug('$( "#replaceWith2" ).find(".inner").replaceWith().end().html()');
    // c += "\n" + getJQueryDebug('$("#replaceWith3").find(".third").replaceWith( $( "#replaceWith3 .first" ) ).end().html()');
    // // c += "\n" + getJQueryDebug('$("#replaceWith4").find("div").replaceWith( $("#replaceWith4 span") ).end().html()');//xiyueta报错，这个先这样吧
    
    c += "\n" + getJQueryDebug('$("[class=\'layui-header header header-index\']").text()');
    

    
    


    


    
    
     
    console.log(c)
    save(c)

    function getJQueryDebug(js) {
        var s = eval(js);
        var deyu = "";
        if (typeof s == 'string') {
            s = s.replace(/\n/g, '\\n');
            deyu = "'" + s + "'";
            // alert(deyu)
        } else if (typeof s == "number") {
            deyu = s+"";
        }else{
            deyu=s
        }
        if(deyu=="")deyu="''";
        err++;
        return c = "    if( " + js + "!=" + deyu + " )return 'this is err" + err + "';"
    }
}

createJqueryDebug()

//保存
function save(content){

    jQuery.ajax({
        url: '?act=save',
        type: 'POST',
        data: {
            'content': content       
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest)
            alert(textStatus)
            alert(errorThrown)
        },
        success: function(result) {
            // console.log(result)
        }
    });

}
</script>
<%elseif request("act")="show" then%>
<script type="text/javascript">
console.log( test_jQuery() );
function test_jQuery() {

    if( $("#nav li").text(function(i){return "text"+i}).text()!='text0text1text2text3text4' )return 'this is err1';
    if( $("#nav li:eq(1)").text("xiyueta.com").text()!='xiyueta.com' )return 'this is err2';
    if( $("#nav li").text()!='text0xiyueta.comtext2text3text4' )return 'this is err3';
    if( $("#nav li").html(function(i){return "html"+i}).html()!='html0' )return 'this is err4';
    if( $("#nav li:eq(1)").html("xiyueta.com").html()!='xiyueta.com' )return 'this is err5';
    if( $("#nav li").html()!='html0' )return 'this is err6';
    if( $("#nav li").length!=5 )return 'this is err7';
    if(  $("#nav").find("li").css("color","green").end().html() !='\n    <li style="color: green;">html0</li>\n    <li style="color: green;">xiyueta.com</li>\n    <li style="color: green;">html2</li>\n    <li style="color: green;">html3</li>\n    <li style="color: green;">html4</li>\n' )return 'this is err8';
    if(  $("#nav").find($("li:eq(1)")).css("color","red").end().html() !='\n    <li style="color: green;">html0</li>\n    <li style="color: red;">xiyueta.com</li>\n    <li style="color: green;">html2</li>\n    <li style="color: green;">html3</li>\n    <li style="color: green;">html4</li>\n' )return 'this is err9';
    if(  $("#news").attr("name","your news").attr("name") !='your news' )return 'this is err10';
    if(  $("#news").find("li").attr({"id":"nav","name":"xiyueta"}).end().html() !='\n    <li style="color:red;" id="nav" name="xiyueta">this is 1</li>\n    <li name="xiyueta" id="nav">this is 2</li>\n    <li name="xiyueta" id="nav">this is 3</li>\n    <li name="xiyueta" id="nav">this is 4</li>\n    <li name="xiyueta" id="nav">this is 5</li>\n' )return 'this is err11';
    if( $("#news").find("li").attr("id",function(i){return "attr"+i}).end().html()!='\n    <li style="color:red;" id="attr0" name="xiyueta">this is 1</li>\n    <li name="xiyueta" id="attr1">this is 2</li>\n    <li name="xiyueta" id="attr2">this is 3</li>\n    <li name="xiyueta" id="attr3">this is 4</li>\n    <li name="xiyueta" id="attr4">this is 5</li>\n' )return 'this is err12';
    if( $("#home").find("p").removeAttr("style").end().html()!='<p class="aa" id="home-list" name="bb"></p>' )return 'this is err13';
    if( $("#home2").find("p").removeAttr(" id name class href src style").end().html()!='<p></p>' )return 'this is err14';
    if( $("#css").find("li").css("font-size","12px").end().html()!='\n    <li style="color: red; font-size: 12px;">this is 1</li>\n    <li name="aa" style="font-size: 12px;">this is 2</li>\n    <li name="bb" style="font-size: 12px;">this is 3</li>\n    <li name="cc" style="font-size: 12px;">this is 4</li>\n    <li name="dd" style="font-size: 12px;">this is 5</li>\n' )return 'this is err15';
    if( $("#css2").find("li").css({"font-size":"12px","color":"blue"}).end().html()!='\n    <li style="color: blue; font-size: 12px;">this is 1</li>\n    <li name="aa" style="font-size: 12px; color: blue;">this is 2</li>\n    <li name="bb" style="font-size: 12px; color: blue;">this is 3</li>\n' )return 'this is err16';
    if( $("#css3").find("li").css("color",function(i){return "red"}).end().html()!='\n    <li style="   color   :  red  ">this is 1</li>\n    <li name="aa" style="color: red;">this is 2</li>\n    <li name="bb" style="color: red;">this is 3</li>\n' )return 'this is err17';
    if( $("#val input:eq(1)").val()!='222' )return 'this is err18';
    if( $("#val input").length!=3 )return 'this is err19';
    if( $("#val input:eq(0)").val("xiyueta.com").val()!='xiyueta.com' )return 'this is err20';
    if( $("#val").find("select").val("xiyueta.com").val()!='xiyueta.com' )return 'this is err21';
    if( $("#val2").find("input").val(function(i){return "111"}).end().html()!='\n    <input type="text" value="111">\n    <input type="text" value="111">\n    <input type="text" value="111">\n' )return 'this is err22';
    if( $("#remove").find("p").remove().end().html()!='\n    \n        how are\n    \n' )return 'this is err23';
    if( $("#remove2").find("p").remove(':contains("Hello")').end().html()!='\n    \n        how are\n    <p>you?</p>\n' )return 'this is err24';
    if( $("#each").find("ul li").each(function(i){$(this).text("text"+i);$(this).css("color","red");}).end().html()!='\n    <ul>\n        <li style="color: red;">text0</li>\n        <li style="color: red;">text1</li>\n        <li style="color: red;">text2</li>\n    </ul>\n' )return 'this is err25';
    if( $("#addClass").find("ul li").addClass("cc dd").end().html()!='\n    <ul>\n        <li class="aa cc dd">1</li>\n        <li class="bb cc dd">2</li>\n        <li class="cc dd">3</li>\n    </ul>\n' )return 'this is err26';
    if( $("#addClass").find("ul li").addClass(function(i){return i}).end().html()!='\n    <ul>\n        <li class="aa cc dd">1</li>\n        <li class="bb cc dd">2</li>\n        <li class="cc dd">3</li>\n    </ul>\n' )return 'this is err27';
    if( $("#removeClass").find("ul li").removeClass(function(){return "aa"}).end().html()!='\n    <ul>\n        <li class="s1">1</li>\n        <li class="s1 bb">2</li>\n        <li class="s1 cc bb">3</li>\n    </ul>\n' )return 'this is err28';
    if( $("#removeClass2").find("ul li").removeClass(["aa","bb","cc"]).end().html()!='\n    <ul>\n        <li class="s1">1</li>\n        <li class="s1">2</li>\n        <li class="s1">3</li>\n    </ul>\n' )return 'this is err29';
    if( $("#hasClass li:last").hasClass("aa").toString()!='false' )return 'this is err30';
    if( $("#hasClass li").hasClass("aa").toString()!='true' )return 'this is err31';
    if( $("#wrap").find("p:eq(0)").wrap("<span style=\"color:red\"></span>").end().html()!='<span style="color:red"><p>aaa</p></span><p>bbbb</p>' )return 'this is err32';
    if( $("#wrap").find("p:eq(0)").wrap("<span style=\"color:red\">111111</span>").end().html()!='<span style="color:red"><span style="color:red">111111<p>aaa</p></span></span><p>bbbb</p>' )return 'this is err33';
    if( $("#next").find("li:eq(0)").next().html()!='2' )return 'this is err34';
    if( $("#next").find("li:eq(0)").nextAll().text()!='2345' )return 'this is err35';
    if( $("#next").find("li:eq(-2)").prev().html()!='3' )return 'this is err36';
    if( $("#next").find("li:eq(-2)").prevAll().text()!='321' )return 'this is err37';
    if( $("#next").find("li:eq(-2)").siblings().length!=4 )return 'this is err38';
    if( $("#next").find("li:eq(-2)").siblings().text()!='1235' )return 'this is err39';
    if( $("#next").find("li:eq(-2)").parent().text()!='\n    1\n    2\n    3\n    4\n    5\n' )return 'this is err40';
    if( $("#next").find("li:eq(-2)").parents().length!=3 )return 'this is err41';
    if( $("#next li").eq(0).length!=1 )return 'this is err42';
    if( $("#next li").eq(1).length!=1 )return 'this is err43';
    if( $("#next li").eq(10).length!=0 )return 'this is err44';
    if( $("#next li").eq(-1).length!=1 )return 'this is err45';
    if( $("#next li").first().length!=1 )return 'this is err46';
    if( $("#next li").first().text()!='1' )return 'this is err47';
    if( $("#next li").last().length!=1 )return 'this is err48';
    if( $("#next li").last().text()!='5' )return 'this is err49';
    if( $("#next li").even().length!=3 )return 'this is err50';
    if( $("#next li").even().text()!='135' )return 'this is err51';
    if( $("#next li").odd().length!=2 )return 'this is err52';
    if( $("#next li").odd().text()!='24' )return 'this is err53';
    if( $("#next li").slice(0,3).length!=3 )return 'this is err54';
    if( $("#next li").slice(0,3).text()!='123' )return 'this is err55';
    if( $("#next li").slice(-2,-1).text()!='4' )return 'this is err56';
    if( $("#append p").append("aabb").text()!='defaultAaabbdefaultBaabb' )return 'this is err57';
    if( $("#append p").append(function(i){return "append"+i}).text()!='defaultAaabbappend0defaultBaabbappend1' )return 'this is err58';
    if( $("#prepend p").prepend("aabb").text()!='' )return 'this is err59';
    if( $("#prepend p").prepend(function(i){return "prepend"+i}).text()!='' )return 'this is err60';
    if( $("#prepend p").prepend("aabb").text()!='' )return 'this is err61';
    if( $("#prepend p").prepend(function(i){return "prepend"+i}).text()!='' )return 'this is err62';
    if( $("#after").find("p").after("aabb").end().text()!='\n    defaultAaabb\n    defaultBaabb\n' )return 'this is err63';
    if( $("#after").find("p").after(function(i){return "after"+i}).end().text()!='\n    defaultAafter0aabb\n    defaultBafter1aabb\n' )return 'this is err64';
    if( $("#before").find("p").before("aabb").end().text()!='\n    aabbdefaultA\n    aabbdefaultB\n' )return 'this is err65';
    if( $("#before").find("p").before(function(i){return "before"+i}).end().text()!='\n    aabbbefore0defaultA\n    aabbbefore1defaultB\n' )return 'this is err66';
    if( $("#showhide").find("p").show().end().text()!='xiyuta\n' )return 'this is err67';
    if( $("#showhide").find("span").hide().end().text()!='xiyuta\n' )return 'this is err68';
    if( $("ul LI").length!=49 )return 'this is err69';
    if( $("#showhide").length!=1 )return 'this is err70';
    if( $("#showhidE").length!=0 )return 'this is err71';
    if( $(" #showhide ").length!=1 )return 'this is err72';
    if( $(".china").length!=1 )return 'this is err73';
    if( $(" .china  ").length!=1 )return 'this is err74';
    if( $(" .XiYueta  ").length!=1 )return 'this is err75';
    if( $(" .xiyueta  ").length!=1 )return 'this is err76';
    if( $(" .xiyueTA  ").length!=1 )return 'this is err77';
    if( $(" li  ").length!=49 )return 'this is err78';
    if( $(" #day20211001 .Title  ").length!=1 )return 'this is err79';
    if( $("h2.title").length!=1 )return 'this is err80';
    if( $("h2.title").text(123).text()!='123' )return 'this is err81';
    if( $("div#add").add("div#add li").length!=4 )return 'this is err82';
    if( $("div#add").add($("div#add li")).length!=4 )return 'this is err83';
    if( $("div#add").add("div#add").length!=1 )return 'this is err84';
    if( $("div#children span").children().length!=2 )return 'this is err85';
    if( $("div#children2").children().length!=3 )return 'this is err86';
    if( $("div#closest br").closest("span").html()!='<br>' )return 'this is err87';
    if( $("div#closest br,div#closest2 br").closest("span").length!=2 )return 'this is err88';
    if( $("div#filter div").filter( ".middle" ).length!=5 )return 'this is err89';
    if( $( "#replaceWith" ).find(".inner").replaceWith( "<h2>New heading</h2>" ).end().html()!='\n  <h2>New heading</h2>\n  <h2>New heading</h2>\n  <h2>New heading</h2>\n' )return 'this is err90';
    if( $("[class='layui-header header header-index']").text()!='\n        aaa\n    ' )return 'this is err91';

    return 'test_jQuery OK';
}
</script>
<%end if%>
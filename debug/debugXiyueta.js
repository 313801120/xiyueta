// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body>\n<div class=\"left\" Style=\"color:red;\">\n    <span id=\" news\">dd</span>\n     \n</div>\n<div>aabbcc<br></div>\n<input id=\"nav\" Value=\"this is xx\" />\n</body></html>'
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

var type="x"
if (type.indexOf("x") != -1) {
    var startTime = new Date();
    var $ = xiyueta.load(html);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {

    if(  $("span[id=news]").html()!=undefined )return 'this is err1';

    return 'test_jQuery OK';
}
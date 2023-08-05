// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body>\n\n<div style="text-align:center;">\n<img src="1.jpg" /><img src="2.jpg"/>\n</div>\n\n</body></html>'
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
    var $ = xiyueta.load(html,true);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {


    return 'test_jQuery OK';
}
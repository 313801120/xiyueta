// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body>\n\n<div>\n    <ul>\n        <li><a href="">11</a></li>\n        <li><a href="">22</a></li>\n        <li><a href="">33</a></li>\n        <li><a href="">44</a></li>\n        <li><a href="">55</a></li>\n        <li><a href="">66</a></li>\n        <li><a href="">77</a></li>\n        <li><a href="">88</a></li>\n    </ul>\n</div>\n\n<'+'script type="text/javascript" src="debugJquery.js"></'+'script></body></html>'
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

    if(  $("*").length!=22 )return 'this is err1';

    return 'test_jQuery OK';
}
// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body>\n<span>\n<div style="aa"></div>\n<div style="aa"></div>\n</span>\n</body></html>'
//-------------------



var type="x"
if (type.indexOf("x") != -1) {
    var startTime = new Date();
    var $ = xiyueta.load(html);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {

    if(  $("span").empty().html()!='' )return 'this is err1';

    return 'test_jQuery OK';
}
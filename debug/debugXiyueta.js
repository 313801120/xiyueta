// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body></body></html>'
//-------------------



var type="x"
if (type.indexOf("x") != -1) {
    var startTime = new Date();
    var $ = xiyueta.load(html);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {

    if(  $("div ul li:eq(1)").text()!='2' )return 'this is err1';
    if(  $("div>p").text()!='aaa' )return 'this is err2';

    return 'test_jQuery OK';
}
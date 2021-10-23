// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = '<html><head></head><body>\n<div>\n    <ul>\n        <li>this is 1</li>\n        <li>this is 2</li>\n        <li>this is 3</li>\n        <li>this is 4</li>\n        <li>this is 5</li>\n    </ul>\n</div>\n\n<</body></html>'
//-------------------



var type="x"
if (type.indexOf("x") != -1) {
    var startTime = new Date();
    var $ = xiyueta.load(html);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {

    if(  $("div").index() !='' )return 'this is err1';
    if(  $("div").index() !='' )return 'this is err2';
 
    return 'test_jQuery OK';
}
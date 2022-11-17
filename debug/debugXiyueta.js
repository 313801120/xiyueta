// var xiyueta = require('xiyueta');
var xiyueta = require('./../dist/nodejs.xiyueta.min.js');

var html = ''
console.log('Update time 2022/11/16 9:17:54')
//-------------------



var type="x"
if (type.indexOf("x") != -1) {
    var startTime = new Date();
    var $ = xiyueta.load(html);
    console.log(test_jQuery());
    console.log("xiyueta", new Date() - startTime + ' ms');
}
 

function test_jQuery() {

    if( $.getDomain("http://www.xiyueta.com/css/style.css")!='www.xiyueta.com' )return 'this is err1';
    if( $.getDomain("http://www.xiyueta.com/css/style.css",true)!='http://www.xiyueta.com' )return 'this is err2';
    if( $.getDomain("https://xiyueta.com/case/?page=1",true)!='https://xiyueta.com' )return 'this is err3';
    if( $.getDomain("ftp://xiyueta.com/1.asp",true)!='ftp://xiyueta.com' )return 'this is err4';
    if( $.getDomain("1.jpg",true)!='' )return 'this is err5';
    if( $.getDomain("//xiyueta.com/1.asp",true)!='xiyueta.com' )return 'this is err6';

    return 'test_jQuery OK';
}
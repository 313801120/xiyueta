var $ = require('./../../dist/nodejs.xiyueta.min.js');
//var $ = require('xiyueta');//本地存在则可以直接调用 使用方法:在CMD里输入 node debug.nodejs版单元测试.js

var html="<p>hello world</p>"
console.log( $("p").parse(html).text())
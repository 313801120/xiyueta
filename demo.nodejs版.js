var $ = require('./dist/nodejs.xiyueta.min.js');
//var $ = require('xiyueta');//本地存在则可以直接调用 使用方法:在CMD里输入 node demo.nodejs版.js
console.log($("title").parse("<title>hello world!</title>").text());                        

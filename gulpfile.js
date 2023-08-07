var pkg = require('./package.json');
var inds = pkg.independents;


var gulp = require('gulp');
var concat = require('gulp-concat'); //合并文件
var uglify = require('gulp-uglify'); //压缩js文件
var header = require('gulp-header'); //添加标头
var footer = require('gulp-footer'); //添加底部
var replace = require('gulp-replace'); //替换内容
var zip = require('gulp-zip'); //打包 
const moment = require('moment');//日期时间    

//注释
var note = [
    '/*! xiyueta v<%=pkg.version %> | Author xiyueta Adream http://xiyueta.com/ | Released under the MIT license  */\n', { pkg: pkg }
]
//注释2
var note2 = [
    '/*! Author xiyueta Adream http://xiyueta.com/  */\n'
]
var nodejs = [`

module.exports = $
`]

var src = '../xiyueta/app/src/'
var mp3src = '../xiyueta/tool/xiyuetamp3/src/'
var tool = '../xiyueta/tool/'
var dist = '../xiyueta/app/dist/'
var source = '../xiyueta/app/source/'

//任务
var task = {


    //生成网页 JS文件
    webjs: function(ver) {
        gulp.src([src + 'xiyueta.js', src + 'xiyueta.css.js', src + 'xiyueta.asp.js', src + 'xiyueta.more.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'common.js', src + 'url.js', src + 'tpl.js'])
           
            .pipe(concat('js.xiyueta.js'))
            .pipe(gulp.dest(source))   //合并源码地址

            .pipe(concat('xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            .pipe(gulp.dest(dist))
            .pipe(gulp.dest('../xiyueta/js/'))//再复制一份到js/目录里
    }, 
    nodejs: function(ver) {//生成nodejs JS文件
        gulp.src([src + 'xiyueta.asp.js',src + 'xiyueta.css.js', src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'common.js', src + 'url.js', src + 'tpl.js'])
            .pipe(replace('_xyt.info\(\);', ''))


            .pipe(concat('nodejs.xiyueta.source.js'))
            .pipe(gulp.dest(source))   //合并源码地址

            .pipe(concat('nodejs.xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            .pipe(footer.apply(null, nodejs))
            .pipe(gulp.dest(dist))
    }, 
    aspjs: function(ver) { //生成aspjs JS文件
        gulp.src([src + 'asp.header.js', src + 'common.js', src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'xiyueta.css.js', src + 'xiyueta.asp.js', src + 'url.js', src + 'handle.js'])
            .pipe(replace('_xyt.info\(\);', ''))
            .pipe(replace('document.write\(', 'response.write\('))


            .pipe(concat('asp.xiyueta.js'))
            .pipe(gulp.dest(source))   //合并源码地址

            .pipe(concat('asp.xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            .pipe(gulp.dest(dist))
    }, 

    toolXiyuetaCss: function(ver) { //快速生成Css样式
        gulp.src([tool + 'xiyuetaCSS/js/yuan_xiyuetaCss.js'])  
            .pipe(concat('tool.xiyuetaCss.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(tool+'xiyuetaCSS/js/'))
    }, 
    toolHanzi: function(ver) { //认汉字
        gulp.src([tool + 'hanzi/js/yuan_hanzi.js'])  
            .pipe(concat('tool.hanzi.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note2))
            .pipe(gulp.dest(tool+"hanzi/js/"))
    }, 
    toolXiyuetaMp3: function(ver) { //生成 tool
        gulp.src([mp3src + 'class_public.js',  mp3src + 'class_PhotoDefault.js', mp3src + 'class_PhotoSplit.js', mp3src + 'class_PhotoTabManage.js', mp3src + 'class_PhotoQuanJing.js', mp3src + 'class_PhotoClip.js ', mp3src + '', mp3src + 'res_musicArray.js', mp3src + 'class_SceneManager.js', mp3src + 'class_Game.js  ', mp3src + 'class_Music.js', mp3src + 'class_video.js', mp3src + 'class_BendText.js', mp3src + 'class_CanvasMouse.js', mp3src + 'class_Author.js', mp3src + 'class_XiaXue.js', mp3src + 'class_QQShow.js', mp3src + 'class_QQShowPhoto.js', mp3src + 'function_Lyric.js'])  
            .pipe(concat('tool.xiyuetamp3.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(tool + 'xiyuetamp3/js/'))
    },  

    toolYZM: function(ver) { //生成 tool
        gulp.src([tool + 'yzmCracking/bitmap.js',  tool + 'yzmCracking/yzm.js'])  
            .pipe(concat('tool.yzm.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(tool+"yzmCracking/"))
    },  
    toolShiTu: function(ver) { //生成 识图
        gulp.src([tool + 'shitu/js/yun_main.js'])  
            .pipe(concat('tool.shitu.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note2))
            .pipe(gulp.dest(tool+"shitu/js/"))
    },  




    // nodejsSource: function(ver) {//生成nodejs源码 JS文件
    //     gulp.src([src + 'xiyueta.asp.js', src + 'xiyueta.css.js', src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'common.js', src + 'url.js', src + 'tpl.js'])
    //         .pipe(replace('_xyt.info\(\);', ''))
    //         .pipe(concat('nodejs.xiyueta.source.js'))
    //         .pipe(header.apply(null, note))
    //         .pipe(footer.apply(null, nodejs))
    //         .pipe(gulp.dest('../xiyueta/js/'))
    // },
    // sourcejs: function(ver) { //这个已经放到webjs里，这个不暂时放着
    //     gulp.src([src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'common.js', src + 'xiyueta.asp.js', src + 'xiyueta.css.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'url.js', src + 'tpl.js'])
    //         .pipe(concat('xiyueta.source.js'))
    //         // .pipe(uglify({
    //         //     mangle: false, //类型：Boolean 默认：true， 是否修改变量名
    //         //     compress: false, //类型：Boolean 默认：true， 是否完全压缩
    //         // }))
    //         .pipe(header.apply(null, note))
    //         .pipe(gulp.dest(dist))
    // },



     // 打包
    zip: function(ver) {
        return gulp.src(src + '*.js')
            .pipe(zip('xiyueta.'+ moment().format('YYYY-MM-DD') +'.zip'))
            .pipe(gulp.dest('zip'));
    },
    // 拷贝
    copyjs: function(ver) {
        gulp.src(dist + 'xiyueta.min.js')
            .pipe(gulp.dest('../xiyueta/js/'));
    },
    debug: function(ver) {
        gulp.src([src + 'debug.xiyueta.js'])
            .pipe(concat('debug/web/web.test.html'))
            .pipe(header.apply(null, ['<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n<script type="text/javascript" src="../../dist/xiyueta.min.js"></script>\n<script type="text/javascript">\n']))
            .pipe(footer.apply(null, ['\n</script>']))
            .pipe(gulp.dest(dist + '../'))
        gulp.src([src + 'debug.xiyueta.js'])
            .pipe(concat('debug/nodejs/nodejs.test.js'))
            .pipe(header.apply(null, ['var $ = xiyueta = require(\'./../../dist/nodejs.xiyueta.min.js\');\n//var $ = require(\'xiyueta\');//本地存在则可以直接调用 使用方法:在CMD里输入 node debug.nodejs版单元测试.js\n']))
            .pipe(gulp.dest(dist + '../'))
        gulp.src([src + 'debug.xiyueta.asp.head.asp', src + 'debug.xiyueta.js'])
            .pipe(concat('debug/asp/asp.test.asp'))
            .pipe(footer.apply(null, ['\n</script>']))
            .pipe(gulp.dest(dist + '../'))

    },
    // 拷贝
    copyAspPhp: function(ver) {
        gulp.src('../xiyueta/tool/asptophp/ASP.php')
            .pipe(gulp.dest(dist));
    }
 


};

//完整任务 gulp
gulp.task('auto', (cb) => { //rc 版：gulp --rc
    task.webjs();
    task.nodejs();
    task.aspjs(); 
    // task.nodejsSource(); 

    // task.sourcejs();//可以不需要，在webjs里已经生成


    cb();
});
//copy gulp
gulp.task('debug', (cb) => { //rc 版：gulp --rc
    task.debug();
    task.copyjs();
    task.zip();
    // task.copyAspPhp();

    cb();
});
//tool
gulp.task('tool', (cb) => {  
    task.toolHanzi();//汉字
    task.toolXiyuetaMp3();//mp3播放器canvas版
    task.toolYZM();//破解验证码

    cb();
}); 
//识图
gulp.task('toolShiTu', (cb) => {  
    task.toolShiTu();//识图

    cb();
}); 
//认汉字
gulp.task('toolHanzi', (cb) => {  
    task.toolHanzi();//认汉字

    cb();
}); 
//快速生成Css样式
gulp.task('toolXiyuetaCss', (cb) => {  
    task.toolXiyuetaCss();//快速生成Css样式

    cb();
}); 
//mp3播放器canvas版
gulp.task('toolXiyuetaMp3', (cb) => {  
    task.toolXiyuetaMp3();//mp3播放器canvas版

    cb();
}); 
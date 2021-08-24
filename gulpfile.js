var pkg = require('./package.json');
var inds = pkg.independents;


var gulp = require('gulp');
var concat = require('gulp-concat'); //合并文件
var uglify = require('gulp-uglify'); //压缩js文件
var header = require('gulp-header'); //添加标头
var footer = require('gulp-footer'); //添加主部
var replace = require('gulp-replace'); //替换内容
var gbkConvert = require('gulp-gbk-convert');


//注释
var note = [
    '/*! xiyueta v<%=pkg.version %> | Author xiyueta Adream | MIT License By http://xiyueta.com/  */\n', { pkg: pkg }

]
var nodejs = [`

module.exports = $
`]

var src = '../xiyueta/js/'
var dist = '../xiyueta/js/xiyueta/dist/'

//任务
var task = {
    //生成网页 JS文件
    webjs: function(ver) {
        gulp.src([src + 'xiyueta.css.js', src + 'xiyueta.asp.js', src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'common.js', src + 'url.js', src + 'tpl.js'])
            .pipe(concat('xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            .pipe(gulp.dest(dist))
    }, //生成nodejs JS文件
    nodejs: function(ver) {
        gulp.src([src + 'xiyueta.css.js', src + 'xiyueta.asp.js', src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'common.js', src + 'url.js', src + 'tpl.js'])
            .pipe(replace('_xyt.info\(\);', ''))
            .pipe(concat('nodejs.xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            .pipe(footer.apply(null, nodejs))
            .pipe(gulp.dest(dist))
    }, //生成aspjs JS文件
    aspjs: function(ver) {
        gulp.src([src + 'asp.header.js', src + 'common.js', src + 'xiyueta.js', src + 'xiyueta.more.js',  src + 'xiyueta.css.js', src + 'url.js', src + 'handle.js', src + 'xiyueta.asp.js'])
            .pipe(replace('_xyt.info\(\);', ''))
            .pipe(concat('asp.xiyueta.min.js'))
            .pipe(uglify())
            .pipe(header.apply(null, note))
            // .pipe(gbkConvert())
            .pipe(gulp.dest(dist))
    }, //生成aspjs 2 JS文件
    sourcejs: function(ver) {
        gulp.src([src + 'xiyueta.js', src + 'xiyueta.more.js', src + 'common.js', src + 'xiyueta.css.js', src + 'xiyueta.asp.js', src + 'xiyueta.debug.js', src + 'handle.js', src + 'url.js', src + 'tpl.js'])
            .pipe(concat('xiyueta.source.js'))
            // .pipe(uglify({
            //     mangle: false, //类型：Boolean 默认：true， 是否修改变量名
            //     compress: false, //类型：Boolean 默认：true， 是否完全压缩
            // }))
            .pipe(header.apply(null, note))
            .pipe(gulp.dest(dist))
    }, // 拷贝
    copyxiyuetajs: function(ver) {
        gulp.src(dist + 'xiyueta.min.js')
            .pipe(gulp.dest(src + 'xiyueta.min.js'));
    },
    debug: function(ver) {
        gulp.src([src + 'debug.xiyueta.js'])
            .pipe(concat('debug.web版单元测试.html'))
            .pipe(header.apply(null, ['<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n<script type="text/javascript" src="dist/xiyueta.min.js"></script>\n<script type="text/javascript">\n']))
            .pipe(footer.apply(null, ['\n</script>']))
            .pipe(gulp.dest(dist + '../'))
        gulp.src([src + 'debug.xiyueta.js'])
            .pipe(concat('debug.nodejs版单元测试.js'))
            .pipe(header.apply(null, ['var $ = require(\'xiyueta\')\n']))
            .pipe(gulp.dest(dist + '../'))
        gulp.src([src + 'debug.xiyueta.asp.head.asp',src + 'debug.xiyueta.js'])
            .pipe(concat('debug.asp版单元测试.asp'))
            .pipe(footer.apply(null, ['\n</script>']))            
            // .pipe(gbkConvert())
            .pipe(gulp.dest(dist + '../'))

    }
};

//完整任务 gulp
gulp.task('auto', function() { //rc 版：gulp --rc
    task.webjs();
    task.nodejs();
    task.aspjs();
    // task.sourcejs();
});
//copy gulp
gulp.task('debug', function() { //rc 版：gulp --rc
    task.debug();
});
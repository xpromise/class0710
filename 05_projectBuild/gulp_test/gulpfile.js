/*
  所有的gulp任务都在gulpfile.js文件中配置，当运行gulp指令时，默认会读取gulpfile.js文件中的配置，然后执行其中的任务。
  特点：
    1. 基于流
    2. 异步的

*/
//1. 引入插件模块
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
// https://github.com/browserslist/browserslist   所有可以配置的前缀方案
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions', 'not ie <= 8'] });
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const opn = require('opn');
const connect = require('gulp-connect');

//2. 配置插件任务
//语法检查
// jshint  gulp-jshint
gulp.task('jshint', () => {
  return gulp.src('./src/js/*.js')    //将指定目录文件导入到gulp流中
    .pipe(jshint({esversion: 6}))     //对流中的文件做语法检查
    .pipe(jshint.reporter('default'))  //将语法检查的错误给提示出来
    .pipe(livereload())
})
//语法转化
gulp.task('babel', ['jshint'], () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({    //语法转化  es6/7/8等高级语法转化成es5及以下的语法
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build/js'))  //将流中的文件导出到指定目录下
    .pipe(livereload())
})
//将commonjs模块化语法转化成浏览器能识别的语法
gulp.task('browserify', ['babel'], () => {
  return gulp.src('./build/js/app.js')  //导入主模块文件
    .pipe(browserify())  //将commonjs模块化语法转化成浏览器能识别的语法
    .pipe(rename('built.js'))  //对流中的文件重命名
    .pipe(gulp.dest('./build/js'))  //将流中的文件导出到指定目录下
    .pipe(livereload())
})
//压缩js代码
gulp.task('uglify', ['browserify'], () => {
  return gulp.src('./build/js/built.js')
    .pipe(uglify())   //压缩js代码
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload())
})
//将less文件编译成css文件
//gulp-less less-plugin-autoprefix
gulp.task('less', () => {
  return gulp.src('./src/less/*.less')
    .pipe(less({   //将less文件编译成css文件
      plugins: [autoprefix]  //引入插件，自动扩展css前缀
    }))
    .pipe(gulp.dest('./src/css'))
    .pipe(livereload())
})
//合并css文件
gulp.task('concat', ['less'], function() {
  return gulp.src(['./src/css/*.css'])
    .pipe(concat('built.css'))  //合并css文件，重命名为built.css
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
});
//压缩css
gulp.task('cssmin', ['concat'], function() {
  return gulp.src('./build/css/built.css')
    .pipe(cssmin())   //压缩css代码
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload())
});
//压缩html
gulp.task('htmlmin', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({  //压缩html
      collapseWhitespace: true,  //去除空格
      removeComments: true       //移出注释
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

//自动编译任务
gulp.task('watch', ['default'], function() {
  livereload.listen();
  //启动服务器
  connect.server({
    root: 'dist',
    livereload: true,  //热更新功能, 自动刷新浏览器
    port: 3000
  });
  //自动打开浏览器
  opn('http://localhost:3000/index.html');
  //监视指定目录下的文件，一旦文件发生变化，立即调用后面的任务处理
  gulp.watch('./src/less/*.less', ['cssmin']);
  gulp.watch('./src/js/*.js', ['uglify']);
  gulp.watch('./src/index.html', ['htmlmin']);
});

//3. 配置默认任务（可选）
gulp.task('default', ['uglify', 'cssmin', 'htmlmin']);
/*
  gulp执行任务可以是同步也可以是异步：
    异步的需要加上return，
    同步不用加return
 */
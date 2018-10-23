/*
  所有的gulp任务都在gulpfile.js文件中配置，当运行gulp指令时，默认会读取gulpfile.js文件中的配置，然后执行其中的任务。
 */

//1. 引入插件模块
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');


//2. 配置插件任务
//语法检查
gulp.task('jshint', () => {
  return gulp.src('./src/js/*.js')    //将指定目录文件导入到gulp流中
    .pipe(jshint({esversion: 6}))     //对流中的文件做语法检查
    .pipe(jshint.reporter('default'));  //将语法检查的错误给提示出来
})
//语法转化
gulp.task('babel', () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({    //语法转化  es6/7/8等高级语法转化成es5及以下的语法
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build/js'))  //将流中的文件导出到指定目录下
})
//将commonjs模块化语法转化成浏览器能识别的语法
gulp.task('browserify', () => {
  return gulp.src('./build/js/app.js')  //导入主模块文件
    .pipe(browserify())  //将commonjs模块化语法转化成浏览器能识别的语法
    .pipe(rename('built.js'))  //对流中的文件重命名
    .pipe(gulp.dest('./build/js'))  //将流中的文件导出到指定目录下
})

//3. 配置默认任务（可选）
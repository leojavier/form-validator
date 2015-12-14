/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var stylish = require('jshint-stylish');

gulp.task('less', function () {
    return gulp.src('css/**/*.less')
    .pipe($.less())
    .pipe($.debug({ title: 'Updtates:' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('jshint', function () {
    return gulp.src('js/**/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
    gulp.watch(['css/**/*.less', 'js/**/*.js'], ['less', 'jshint'])
});
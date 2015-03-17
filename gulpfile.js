var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();


gulp.task('styles', function() {
    gulp.src(['inc/less/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(prefix(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'], { cascade: true }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('inc/css/'))
        .pipe(refresh(server))
});

gulp.task('watch', function () {
    gulp.watch('inc/less/**', ['styles']);
});

gulp.task('build', ['styles']);
gulp.task('default', ['watch']);


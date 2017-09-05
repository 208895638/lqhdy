var gulp = require('gulp');
var sass = require('gulp-sass');
var imgmin = require("gulp-imagemin");
var jsmin = require("gulp-uglify");
var imgSrc = 'img/*';
var imgDest = 'images';
var jsold = "jss/*";
var jsnew = "js";
//压缩图片
gulp.task('imgmin',function(){
  gulp.src(imgSrc)
  .pipe(imgmin())
  .pipe(gulp.dest(imgDest));
});
//压缩js
gulp.task('jsmin',function(){
  gulp.src(jsold)
  .pipe(jsmin())
  .pipe(gulp.dest(jsnew));
});
gulp.task('sass',function() {
	return gulp.src('sass/*.*').pipe(sass()).pipe(gulp.dest('css'));
})
gulp.task('default',['sass','watch']);
gulp.task('watch',function(){
	return gulp.watch('sass/*.*',['sass']);
})
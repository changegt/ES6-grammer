var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var polyfille = require('babel-polyfill');

gulp.task('babeljs', function(){
	gulp.src("./src/es6/**/*.js")
	.pipe(babel())
	.pipe(rename((path) => {
		path.extname = ".es5.js";
	}))
	.pipe(gulp.dest("./src/es5"));
});

gulp.task('watchjs', function(){
	gulp.watch('./src/es6/**/*.js', ['babeljs']);
})
